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
  zoom;
  zoomTrans;
  conteiner;
  slider;
  vis;
  marker;
  data;
  selectedNode;

  constructor(private mainServices: MainService) {

  }
  
  ngOnInit() {
  }

  ngAfterViewInit(){
    this.mainServices.getDataSample().subscribe(data =>{
      console.log(data);
      this.init();

      this.data = data;
      this.removeAll();
      this.drowLines();
      this.drow();
    });
  }

  init() {
    this.zoom = d3
      .zoom()
      .scaleExtent([0.1, 2])
      .on("zoom", () => {
        this.zoomTrans = d3.event.transform;
        // this.conteiner.attr("transform", d3.event.transform);
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
      .attr("height", h)
      .on("click", () => {
        // if (!this.readOnly) {
        //   this.unselect();

        // if (this.startDrowLine) {
        //   this.removeAll();
        //   this.startDrowLine = null;
        //   this.activeArrow = null;
        //   document.documentElement.style.cursor = "default";
        //   this.drow();
        // }

        // if (!this.clickArrow) {
        //   this.unselectArrow();
        // }


      });
    this.vis.call(this.zoom).on("dblclick.zoom", null);

    this.conteiner = this.vis.append("g").attr("id", "wrap");
    let g = d3
      .select("#graph")
      .append("div")
      .datum({})
      .attr("class", "coco-bpm-d3-zoom-wrap");
    let g1 = g;

    let icon = g1
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
    let g2 = g1
      .append("div")
      .datum({})
      .attr("class", "coco-bpm-slider-wrap");

    this.slider = g2
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

    g2.append("div")
      .datum({})
      .attr("class", "coco-bpm-line-range")
      .attr("id", "lineZoomRange");

    document.getElementById("graph").addEventListener("mousemove", e => {
      let dummyX = e.offsetX;
      let dummyY = e.offsetY;

    });

    this.marker = this.conteiner
      .append("svg:defs")
      .append("svg:marker")
      .attr("id", "triangle")
      .attr("refX", 6)
      .attr("refY", 6)
      .attr("markerWidth", 30)
      .attr("markerHeight", 30)
      .attr("orient", "auto");
    this.marker
      .append("path")
      .attr("class", "path")
      .attr("d", "M 0 0 12 6 0 12 3 6")
      .style("fill", "#999");
  }
  nodes = {}
  drow() {
    this.drowLines();
    let self = this;
    
    let obj = {
      nodes: this.data,
      links: []
    }

    this.data.forEach(el => {
      var sKey = el.SourceId + "," + (el.SourceImageName || "?"),
      tKey = el.TargetId + "," + (el.TargetImageName || "?");
      obj.links.push({"source": sKey, "target": tKey, "value": 1})
    });


  var simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function(d) {
       return d.SourceId + "," + (d.SourceImageName || "?"); }).distance(100).strength(1))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(200 / 2, 200 / 2));

  var link = this.conteiner.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(obj.links)
    .enter().append("line")
      .attr("stroke-width", function(d) { return 2; });

  var node = this.conteiner.append("g")
      .attr("class", "nodes")
    .selectAll("g")
    .data(obj.nodes)
    .enter().append("g")
    
  // var circles = node.append("circle")
  //     .attr("r", 5)

          //       let d, dx, dy, color;

         var d =
          "M0 12.001h2.782c.177 1.424 1.59 2.34 3.61 2.34 1.877 0 3.235-.96 3.235-2.296 0-1.148-.872-1.822-2.914-2.296l-2.065-.475C1.755 8.623.398 7.187.398 4.814.397 1.92 2.76 0 6.325 0c3.345 0 5.763 1.921 5.896 4.66H9.495c-.199-1.403-1.435-2.286-3.18-2.286-1.833 0-3.047.883-3.047 2.24 0 1.072.806 1.701 2.782 2.154l1.833.42c3.235.728 4.593 2.075 4.593 4.504 0 3.102-2.396 5.034-6.26 5.034-3.655 0-6.072-1.832-6.216-4.725zm14.06 2.255l6.825-6.054-6.825-6.054L16.16.288l8.942 7.914-8.942 7.914-2.101-1.86z";
var        color = "#3cd57c";

          let g = node.append("g");
          g.append("svg:circle")
            .attr("class", "nodes")
            .attr("r", "5px")
            .attr("fill", color)  
            .on("mouseover", nodeOver)
            .on("mouseout", nodeOut)
            .on("click", nodeClick)
            function nodeOut() {
              d3.selectAll("circle").style("opacity", 1).style("stroke", "white").style("stroke-width", 2 + "px");
              d3.selectAll("path.link").style("opacity", 1).style("stroke-width", 2 + "px");
              d3.selectAll("text").style("opacity", 1).style("fill", "black");
            }
            
            function nodeOver(d, i, e) {
              highlightNeighbors(d, i);
            }

            
function highlightNeighbors(d, i) {
  var nodeNeighbors = findNeighbors(d, i);
  d3.selectAll("circle").each(function(p) {
    var isNeighbor = nodeNeighbors.nodes.indexOf(p);
    d3.select(this)
      .style("opacity", isNeighbor > -1 ? 1 : .25)
      .style("stroke", isNeighbor > -1 ? "yellow" : "white");
  })

  d3.selectAll("path.link")
    .style("stroke-width", function(d) {
      return nodeNeighbors.links.indexOf(d) > -1 ? 2 *2 : 2
    })
    .style("opacity", function(d) {
      return nodeNeighbors.links.indexOf(d) > -1 ? 1 : .25
    });

  d3.selectAll("text")
    .style("opacity", function(d) {
      return nodeNeighbors.nodes.indexOf(d) > -1 ? 1 : 0
    })
    .style("fill", function(n) {
      return n === d ? "blue" : "black";
    })
    // .each(moveToFront);

}


function findNeighbors(d, i) {
  let neighborArray = [d];
  var linkArray = [];
  obj.links.forEach((p) => {
    if(p.source === d || p.target === d) {
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
            
            function nodeClick(d, i, e) {
              self.selectedNode = d;
              console.log(d,i)
              self.showSide = true
            }
          // g.append("svg:path")
          //   .attr("class", "path")
          //   .attr("d", d)
          //   .attr("fill", "#FFF")
          //   .attr("transform", `matrix(1 0 0 1 ${dx} ${dy} )`);




  var lables = node.append("text")
      .text(function(d) {
        return d.SourceId + "," + (d.SourceImageName || "?");
      })
      .attr('x', 6)
      .attr('y', 3);

  node.append("title")
      .text(function(d) { return d.SourceId + "," + (d.SourceImageName || "?"); });

  simulation
      .nodes(obj.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(obj.links);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
        })
  }
    // this.data.forEach((element, index, arr) => {
    //       let d, dx, dy, color;

    //       d =
    //       "M0 12.001h2.782c.177 1.424 1.59 2.34 3.61 2.34 1.877 0 3.235-.96 3.235-2.296 0-1.148-.872-1.822-2.914-2.296l-2.065-.475C1.755 8.623.398 7.187.398 4.814.397 1.92 2.76 0 6.325 0c3.345 0 5.763 1.921 5.896 4.66H9.495c-.199-1.403-1.435-2.286-3.18-2.286-1.833 0-3.047.883-3.047 2.24 0 1.072.806 1.701 2.782 2.154l1.833.42c3.235.728 4.593 2.075 4.593 4.504 0 3.102-2.396 5.034-6.26 5.034-3.655 0-6.072-1.832-6.216-4.725zm14.06 2.255l6.825-6.054-6.825-6.054L16.16.288l8.942 7.914-8.942 7.914-2.101-1.86z";
    //     dx = 0 - 10;
    //     dy = 0 - 8;
    //     color = "#3cd57c";

    //       let g = this.conteiner.append("g");
    //       g.append("svg:circle")
    //         .attr("class", "nodes")
    //         .attr("id", index + "main")
    //         .attr("cx", element.x)
    //         .attr("cy", element.y)
    //         .attr("r", "30px")
    //         .attr("fill", color);

    //       g.append("svg:path")
    //         .attr("class", "path")
    //         .attr("d", d)
    //         .attr("fill", "#FFF")
    //         .attr("transform", `matrix(1 0 0 1 ${dx} ${dy} )`);


     

    //       // g.append("text")
    //       //   .text(this.data.process.components[index].name)
    //       //   .attr("class", "coco-bpm-text-title")
    //       //   .attr("x", element.x + 30)
    //       //   .attr("y", element.y + 20);

    //       // g.append("text")
    //       //   .text(this.data.diagram.data[index].shotDesc || "text")
    //       //   .attr("class", "coco-bpm-text-desc")
    //       //   .attr("x", element.x + 30)
    //       //   .attr("y", element.y + 35);

    //       // g.append("rect")
    //       //   .attr("id", index + "stroke")
    //       //   .attr("class", "nodes coco-bpm-rect-fun-stroke")
    //       //   .attr("x", element.x - 30)
    //       //   .attr("y", element.y - 30)
    //       //   .attr("width", 160)
    //       //   .attr("height", 70)
    //       //   .attr("rx", 10)
    //       //   .attr("ry", 10);


    //       // g.append("rect")
    //       //   .attr("id", index)
    //       //   .attr("class", "nodes coco-bpm-rect-fun")
    //       //   .attr("x", element.x - 25)
    //       //   .attr("y", element.y - 30)
    //       //   .attr("width", 160)
    //       //   .attr("height", 60)
    //       //   .attr("rx", 10)
    //       //   .attr("ry", 10)
    //       //   .on("mouseover", (q, w, e) => {
            
    //       //   })
    //       //   .on("mouseout", (q, w, e) => {
            
    //       //   })
    //       //   .on("click", (d, i, s) => {
            
    //       //   })
    //       //   .on("dblclick", (d, i, s) => {
            
    //       //   })
    //         // .call(
    //         //   d3
    //         //     .drag()
    //         //     .on("start", dragstarted)
    //         //     .on("drag", dragged)
    //         //     .on("end", dragended)
    //         // );
    //   if (this.marker)
    //     this.marker
    //       .append("path")
    //       .attr("class", "path")
    //       .attr("d", "M 0 0 12 6 0 12 3 6")
    //       .style("fill", "#999");
    // });
  }

  drowLines() {
    // this.data.forEach((value, index, arr) => {
    //   value.selected.forEach(item => {
    //     let to = this.searchById(item, this.data);
    //     let from = this.data[index];
    //     if (to) {
    //       let x = +from.x;
    //       let y = +from.y;
    //       let x2 = +to.x;
    //       let y2 = +to.y;
    //       let minX = Math.abs(x - x2);
    //       let minY = Math.abs(y - y2);
    //       if (minX > minY) {
    //         if (+x < +x2) {
    //           x += 25;
    //           x2 -= 25;
    //         } else {
    //           x -= 25;
    //           x2 += 25;
    //         }
    //       } else {
    //         if (+y < +y2) {
    //           y += 25;
    //           y2 -= 25;
    //         } else {
    //           y -= 25;
    //           y2 += 25;
    //         }
    //       }

    //       var d = {
    //         source: {
    //           x: x + 30,
    //           y: y + 15
    //         },
    //         target: {
    //           x: x2 + 30,
    //           y: y2 + 15
    //         }
    //       };

    //       var link = d3
    //         .linkHorizontal()
    //         .x(function (d) {
    //           return d.x;
    //         })
    //         .y(function (d) {
    //           return d.y;
    //         });

    //       this.conteiner
    //         .append("path")
    //         .attr("d", link(d))
    //         .attr("id", from.id + to.id)
    //         .attr("class", "path")
    //         .style("fill", "none")
    //         .style("stroke", "#555")
    //         .attr("stroke-opacity", 0.4)
    //         .attr("stroke-width", 1.5)
    //         .attr("marker-mid", "url(#triangle)");

    //       this.conteiner
    //         .append("path")
    //         .attr("class", "path")
    //         .attr("d", link(d))
    //         .style("fill", "none")
    //         .style("stroke", "#555")
    //         .attr("stroke-opacity", 0)
    //         .attr("stroke-width", 15)
    //         .on("click", () => {

    //           this.selected = undefined;

    //           this.removeAll();
    //           this.drow();
    //           // if (this.selectedLine) {
    //           //   this.unselectArrow();
    //           // }
    //           this.clickArrow = true;

    //           this.selectedLine = from.id + to.id;
    //           this.selectedLineId = index;
    //           this.selectedLineFrom = from;
    //           this.selectedLineTo = to;

    //           d3.select(document.getElementById(from.id + to.id)).style(
    //             "stroke-width",
    //             2.5
    //           );
    //           d3.select(document.getElementById(from.id + to.id)).style(
    //             "stroke",
    //             "black"
    //           );

    //         });

    //       this.conteiner
    //         .append("polyline")
    //         .attr(
    //           "points",
    //           d.source.x +
    //           "," +
    //           d.source.y +
    //           " " +
    //           (d.source.x + d.target.x) / 2 +
    //           "," +
    //           (d.source.y + d.target.y) / 2 +
    //           " " +
    //           d.target.x +
    //           "," +
    //           d.target.y
    //         )
    //         .style("fill", "none")
    //         .attr("marker-mid", "url(#triangle)");
    //     }

    //   });
    // });
  }

  removeAll() {
    d3.selectAll("line").remove();
    d3.selectAll("polyline").remove();
    d3.selectAll("rect").remove();
    d3.selectAll("text").remove();
    d3.selectAll("circle").remove();
    d3.selectAll(".path").remove();
    d3.selectAll(".g").remove();
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
