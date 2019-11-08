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
  depended = {};
  filterApplicaton = {};
  filterPort = {};
  dataDrow;
  dataFilter;
  searchModel = "";
  width;
  height;
  constructor(private mainServices: MainService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.mainServices.getDataSample().subscribe((data: any[]) => {
      console.log(data);
      this.dataStore = data.slice();
      this.data = data.slice();
      this.init();
      this.drow();
    });
  }

  filterData() {
    this.dataDrow.nodes.forEach((item) => {
      let key = item.appName || item.name || '?';
      if (!this.filterApplicaton[key]) {
        this.filterApplicaton[key] = {
          count: 0,
          flag: true,
          name: key
        };
      }

      if (!this.filterPort[item.port]) {
        this.filterPort[item.port] = {
          count: 0,
          flag: true,
          name: item.port
        };
      }

      this.filterApplicaton[key].count++;
      this.filterPort[item.port].count++;
    });

    console.log(this.dataDrow.nodes, this.filterApplicaton, this.filterPort);
  }

  filterChange(e, item) {
    let data = this.dataDrow.nodes.slice();
    Object.keys(this.filterApplicaton).forEach((k) => {
      if (!this.filterApplicaton[k].flag) {
        data = data.filter((element) => {
          let key = element.appName || element.name || '?';
          return k !== key;
        });
      }
    });

    this.dataFilter = data.slice();
    this.dataFilterSearch();
  }

  drow() {
    const self = this;

    this.dataDrow = {
      nodes: [],
      links: []
    };

    let nodes = {};
    let links = [];

    this.data.forEach((el) => {
      let l: any = {};
      links.push(l);

      var sKey = el.SourceId + "," + (el.SourceImageName || "?"),
        tKey = el.TargetId + "," + (el.TargetImageName || "?");
      l.source =
        nodes[sKey] ||
        (nodes[sKey] = {
          id: sKey,
          serverId: el.SourceId,
          name: el.SourceImageName,
          ip: el.SourceIPAddress,
          appName: el.SourceProdName,
          publisher: el.SourceMfgName,
          serverHostname: el.ServerHostname,
          port: el.TargetPort,
          linkCount: 0
        });
      l.source.linkCount++;
      l.target =
        nodes[tKey] ||
        (nodes[tKey] = {
          id: tKey,
          serverId: el.TargetId,
          name: el.TargetImageName,
          ip: el.TargetIPAddress,
          appName: el.TargetProdName,
          publisher: el.TargetMfgName,
          serverHostname: el.TargetHostname,
          port: el.TargetPort,
          linkCount: 0
        });
      l.target.linkCount++;

      if (!this.connected[sKey]) {
        this.connected[sKey] = [];
      }
      this.connected[sKey].push(el.TargetProdName + ' (on ' + el.TargetHostname + ':' + el.TargetPort + ')');

      if (!this.depended[tKey]) {
        this.depended[tKey] = [];
      }
      this.depended[tKey].push(el.SourceProdName +  (el.ServerHostname ? (' (on ' + el.ServerHostname + ':' + el.SourcePort + ')') : ''));
    });

    this.dataDrow = { nodes: d3.values(nodes), links };
    this.dataFilter = this.dataDrow.nodes.slice();
    this.filterData();

    var simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function (d) {
        return d.id;
      }).distance(100).strength(1))
      .force("charge", d3.forceManyBody())
      .force('collide', d3.forceCollide(function (d) { return 30; }))
      .force("center", d3.forceCenter(this.width / 2, this.height / 2));
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
      .attr("id", (d) => d.id)
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
      if (self.dataFilter.indexOf(d) > -1) {
        self.highlightNeighbors(d, i);
        self.dataFilterSearch();
      }
    }

    function nodeClick(d, i, e) {
      self.selectedNode = d;
      self.showSide = true;
    }

    node.append("text")
      .text(function (d) {
        return d.id;
      })
      .attr('x', 6)
      .attr('y', 3);

    node.append("title")
      .text(function (d) { return d.id; });

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

  goToNode(item) {
    let self = this;

    d3.selectAll("circle").each(function (p) {
      if (p.id === item.id) {
        self.clearSelection();
        d3.select(this)
        .style("opacity", 1)
        .style("stroke", "yellow");
        var transform = self.getTransform(d3.select(this), 2.0, item);
        d3.zoomIdentity.scale(transform.scale)
        .translate(transform.translate);
        self.conteiner.transition().duration(1000)
            .attr("transform", "translate(" + transform.translate + ")scale(" + transform.scale + ")");
        if  (self.zoomTrans) {
          self.zoomTrans.k = 2.0;
          self.zoomTrans.x = transform.translate[0];
          self.zoomTrans.y = transform.translate[1];
        }
      }
    });
  }

  clearSelection() {
    d3.selectAll("circle").each(function (p) {
      d3.select(this)
        .style("stroke", "#b6fdba");
    });
  }

  getTransform(node, xScale, item) {
    let bbox = node.node().getBBox();
    var bx = item.x;
    var by = item.y;
    var bw = bbox.width;
    var bh = bbox.height;
    let vis = this.conteiner.node().getBBox();
    var vx = vis.x;		// container x co-ordinate
    var vy = vis.y;		// container y co-ordinate
    var vw = vis.width;	// container width
    var vh = vis.height;	// container height
    var tx = -bx*xScale + vx + vw/2 - bw*xScale/2;
    var ty = -by*xScale + vy + vh/2 - bh*xScale/2;
    
    return {translate: [tx + 200 , ty ], scale: xScale}
  }

  dataFilterSearch() {
    let self = this;
    if (this.dataFilter) {
      this.dataFilter.forEach(element => {
        let validCircle = [];
        d3.selectAll("circle").each(function (p) {
          self.dataDrow.links.forEach((d) => {
            if ((p.id === d.source.id && (self.filterPort[p.port] 
              && self.filterPort[p.port].flag)) ||
              (p.id === d.target.id && (self.filterPort[p.port] 
                && self.filterPort[p.port].flag)) ) {
                validCircle.push(p.id)
            } 
          });
          var isNeighbor = self.dataFilter.indexOf(p);
          d3.select(this)
            .style("opacity", (isNeighbor > -1) && (validCircle.indexOf(p.id) > -1) ? 1 : .25);
        });

        d3.selectAll("polyline")
          .style("opacity", function (d) {
            let fS = self.filterPort[d.source.port];
            let fT = self.filterPort[d.target.port];
            return ((!(fT && !fT.flag)) && (!(fS && !fS.flag)) &&
            (self.dataFilter.indexOf(d.target) > -1 && self.dataFilter.indexOf(d.source) > -1)) 
            ? 1 : .25;
          });

        d3.selectAll("text")
          .style("opacity", function (d) {
            return (self.dataFilter.indexOf(d) > -1) && (validCircle.indexOf(d.id) > -1) ? 1 : 0;
          });
      });
    }
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
