import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MainService } from 'src/app/shared/services/main.service';

declare var d3;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  showSide;
  showFilter;
  showSearch;
  zoom;
  zoomTrans;
  conteiner;
  slider;
  vis;
  marker;
  data;
  dataStore;
  selectedNode;
  connected = {};
  filterApplicaton = {};
  filterPort = {};
  dataDrow;
  dataFilter;

  constructor(private mainServices: MainService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mainServices.getDataSample().subscribe((data: any[]) => {
      console.log(data);
      this.dataStore = data.slice();
      this.data = data.slice();
      this.filterData();
      this.init();
      this.drow();
    });
  }

  filterData() {
    this.data.forEach((item) => {
      if (!this.filterApplicaton[item.SourceProdName || item.TargetProdName]) {
        this.filterApplicaton[item.SourceProdName || item.TargetProdName] = {
          count: 0,
          flag: true,
          name: item.SourceProdName || item.TargetProdName
        };
      }

      if (!this.filterPort[item.TargetPort]) {
        this.filterPort[item.TargetPort] = {
          count: 0,
          flag: true,
          name: item.TargetProdName + '(' + item.TargetPort + ')'
        };
      }

      this.filterApplicaton[item.SourceProdName || item.TargetProdName].count++;
      this.filterPort[item.TargetPort].count++;
    });

    console.log(this.filterApplicaton, this.filterPort);
  }

  filterChange(e, item) {
    let data = this.dataStore.slice();
    Object.keys(this.filterApplicaton).forEach((k) => {
      if (!this.filterApplicaton[k].flag) {
        data = data.filter((element) => {
          return k !== (element.SourceProdName || element.TargetProdName);
        });
      }
    });

    Object.keys(this.filterPort).forEach((k) => {
      if (!this.filterPort[k].flag) {
        data = data.filter((element) => {
          return k !== (element.TargetPort);
        });
      }
    });

    this.dataFilter = data.slice();
    this.dataFilterSearch();
  }

  drow() {
    const self = this;

    this.dataDrow = {
      nodes: this.data,
      links: []
    };

    this.data.forEach(el => {
      var sKey = el.SourceId + "," + (el.SourceImageName || "?"),
        tKey = el.TargetId + "," + (el.TargetImageName || "?");
      this.dataDrow.links.push({ "source": sKey, "target": tKey, "value": 1 });
      if (!this.connected[sKey]) {
        this.connected[sKey] = [];
      };
      this.connected[sKey].push(tKey);
    });

    var simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function (d) {
        return d.SourceId + "," + (d.SourceImageName || "?");
      }).distance(100).strength(1))
      .force("charge", d3.forceManyBody())
      .force('collide', d3.forceCollide(function (d) { return 30; }))
      .force("center", d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2));
    var link = this.conteiner.append("g")
      .attr("class", "links")
      .selectAll("polyline")
      .data(this.dataDrow.links)
      .enter().append("polyline");

    var node = this.conteiner.append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(this.dataDrow.nodes)
      .enter().append("g");

    let g = node.append("g");
    g.append("svg:circle")
      .attr("class", "nodes")
      .attr("r", "5px")
      .attr("fill", "#3cd57c")
      .on("mouseover", nodeOver)
      .on("mouseout", nodeOut)
      .on("click", nodeClick);

    function nodeOut() {
      d3.selectAll("circle").style("opacity", 1).style("stroke", "#b6fdba").style("stroke-width", 2 + "px");
      d3.selectAll("polyline").style("opacity", 1).style("stroke-width", 2 + "px");
      d3.selectAll("text").style("opacity", 1).style("fill", "black");
      self.dataFilterSearch();
    }

    function nodeOver(d, i, e) {
      self.highlightNeighbors(d, i);
    }

    function nodeClick(d, i, e) {
      self.selectedNode = d;
      self.showSide = true;
    }

    node.append("text")
      .text(function (d) {
        return d.SourceId + "," + (d.SourceImageName || "?");
      })
      .attr('x', 6)
      .attr('y', 3);

    node.append("title")
      .text(function (d) { return d.SourceId + "," + (d.SourceImageName || "?"); });

    simulation
      .nodes(this.dataDrow.nodes)
      .on("tick", ticked);

    simulation.force("link")
      .links(this.dataDrow.links);

    function ticked() {
      link.attr("points", function (d) {
        return (
          d.source.x +
          "," +
          d.source.y +
          " " +
          (d.source.x + d.target.x) / 2 +
          "," +
          (d.source.y + d.target.y) / 2 +
          " " +
          d.target.x +
          "," +
          d.target.y
        );
      }).attr("stroke-opacity", 0.4)
        .attr("stroke-width", 1.5)
        .attr("stroke", "#ec9696")
        .style("fill", "none")
        .attr("marker-mid", "url(#triangle)");

      node
        .attr("transform", function (d) {
          return "translate(" + d.x + "," + d.y + ")";
        });
    }
  }

  dataFilterSearch() {
    if (this.dataFilter)
      this.dataFilter.forEach(element => {
        let self = this;
        d3.selectAll("circle").each(function (p) {
          var isNeighbor = self.dataFilter.indexOf(p);
          d3.select(this)
            .style("opacity", isNeighbor > -1 ? 1 : .25);
        });

        d3.selectAll("polyline")
          .style("opacity", function (d) {
            return self.dataFilter.indexOf(d.source) > -1 ? 1 : .25;
          });

        d3.selectAll("text")
          .style("opacity", function (d) {
            return self.dataFilter.indexOf(d) > -1 ? 1 : 0;
          });
      });
  }

  highlightNeighbors(d, i) {
    var nodeNeighbors = this.findNeighbors(d, i);
    d3.selectAll("circle").each(function (p) {
      var isNeighbor = nodeNeighbors.nodes.indexOf(p);
      d3.select(this)
        .style("opacity", isNeighbor > -1 ? 1 : .25)
        .style("stroke", isNeighbor > -1 ? "yellow" : "#b6fdba");
    });

    d3.selectAll("polyline")
      .style("stroke-width", function (d) {
        return nodeNeighbors.links.indexOf(d) > -1 ? 3 : 2;
      })
      .style("opacity", function (d) {
        return nodeNeighbors.links.indexOf(d) > -1 ? 1 : .25;
      });

    d3.selectAll("text")
      .style("opacity", function (d) {
        return nodeNeighbors.nodes.indexOf(d) > -1 ? 1 : 0;
      })
      .style("fill", function (n) {
        return n === d ? "blue" : "black";
      });
  }

  findNeighbors(d, i) {
    let neighborArray = [d];
    var linkArray = [];
    this.dataDrow.links.forEach((p) => {
      if (p.source === d || p.target === d) {
        neighborArray.indexOf(p.source) == -1 ? neighborArray.push(p.source) : null;
        neighborArray.indexOf(p.target) == -1 ? neighborArray.push(p.target) : null;
        linkArray.push(p);
      }
    });
    return {
      nodes: neighborArray,
      links: linkArray
    };
  }

  init() {
    this.zoom = d3
      .zoom()
      .scaleExtent([0.1, 2])
      .on("zoom", () => {
        this.zoomTrans = d3.event.transform;
        const currentTransform = d3.event.transform;
        if (!currentTransform.x) {
          currentTransform.x = 0;
          currentTransform.y = 0;
        }
        this.conteiner.attr("transform", currentTransform);
        this.slider.property("value", currentTransform.k);
        this.rangeWidth();

      });
    this.vis = d3.select("#graph").append("svg");
    var w = "100%",
      h = "100%";
    this.vis
      .attr("width", w)
      .attr("height", h);

    this.vis.call(this.zoom).on("dblclick.zoom", null);

    this.conteiner = this.vis.append("g").attr("id", "wrap");
    let g = d3
      .select("#graph")
      .append("div")
      .datum({})
      .attr("class", "coco-bpm-d3-zoom-wrap");
    let icon = g
      .append("svg")
      .attr("width", "14")
      .attr("height", "14")
      .attr("viewBox", "0 0 14 14")
      .append("g")
      .attr("fill", "#2196F3")
      .attr("fill-rule", "nonzero");
    icon
      .append("path")
      .attr(
        "d",
        "M12.316 9.677a5.677 5.677 0 0 0 0-8.019 5.676 5.676 0 0 0-8.019 0 5.56 5.56 0 0 0-.853 6.843s.094.158-.033.284L.518 11.678c-.575.576-.712 1.381-.202 1.892l.088.088c.51.51 1.316.373 1.892-.202l2.886-2.887c.133-.133.29-.04.29-.04a5.56 5.56 0 0 0 6.844-.852zM5.344 8.63a4.194 4.194 0 0 1 0-5.925 4.194 4.194 0 0 1 5.925 0 4.194 4.194 0 0 1 0 5.925 4.195 4.195 0 0 1-5.925 0z"
      );
    icon
      .append("path")
      .attr(
        "d",
        "M5.706 5.331a.584.584 0 0 1-.539-.813A3.688 3.688 0 0 1 9.996 2.56a.585.585 0 0 1-.457 1.078 2.516 2.516 0 0 0-3.294 1.336.585.585 0 0 1-.54.357z"
      );
    let slider = g
      .append("div")
      .datum({})
      .attr("class", "coco-bpm-slider-wrap");

    this.slider = slider
      .append("input")
      .datum({})
      .attr("type", "range")
      .attr("class", "coco-bpm-slider")
      .attr("id", "range")
      .attr("value", 1)
      .attr("min", 0.1)
      .attr("max", 2)
      .attr("step", 0.01)
      .on("input", () => {
        this.zoom.scaleTo(this.vis, d3.select("#range").property("value"));
        this.rangeWidth();
      });

    slider.append("div")
      .datum({})
      .attr("class", "coco-bpm-line-range")
      .attr("id", "lineZoomRange");

    this.marker = this.conteiner
      .append("svg:defs")
      .append("svg:marker")
      .attr("id", "triangle")
      .attr("refX", 3)
      .attr("refY", 3)
      .attr("markerWidth", 30)
      .attr("markerHeight", 30)
      .attr("orient", "auto");
    this.marker
      .append("path")
      .attr("class", "path")
      .attr("d", "M 0 0 6 3 0 6 3 3")
      .style("fill", "#999");
  }

  removeAll() {
    d3.selectAll("line").remove();
    d3.selectAll("polyline").remove();
    d3.selectAll(".path").remove();
  }

  rangeWidth(flag?) {
    if (flag) {
      setTimeout(() => {
        document.getElementById("lineZoomRange").style.width = 50 + "%";
      }, 500);
    } else {
      let input = document.getElementById("range");
      let width;
      width = (input["value"] / 2) * 100;
      document.getElementById("lineZoomRange").style.width = width + "%";
    }
  }
}
