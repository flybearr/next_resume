"use client";
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import { select } from "d3";
import "@/styles/svg.scss";

export default function Svgd3() {
  const svg = useRef(null);
  useEffect(() => {
    const svgEle = select(svg.current);
    const width = window.innerWidth * 0.7;
    const height = window.innerHeight * 0.7;
    let projection;
    let geoGenerator;
    d3.json(
      "https://raw.githubusercontent.com/codeforgermany/click_that_hood/master/public/data/taiwan.geojson"
    ).then(function (data) {
      projection = d3.geoMercator().fitExtent(
        [
          [0, 0],
          [width, height],
        ],
        data
      );
      // .scale(400) //scale：設定地圖縮放倍率
      // .translate([width / 4, height / 1.5]);

      geoGenerator = d3.geoPath().projection(projection);

      // Draw the map
      svgEle
        .append("g")
        .selectAll("path")
        .data(data.features)
        .enter()
        .append("g")
        .attr("class", function (d) {
          return d.properties.name;
        })
        .append("path")
        .attr("fill", "#69b3a2")
        .attr("d", geoGenerator)
        .style("stroke", "#fff")
        .style("margin", "0px")
        .on("mouseover", handleMouseOver)
        .on("mouseout", function (d, i) {
          d3.select(this).transition().duration(300).attr("fill", "#69b3a2");
          d3.selectAll("text")
            .transition()
            .delay(function (d, i) {
              return 100;
            })
            .text("");
        });
    });

    function handleMouseOver(e, d) {
      let centroid = geoGenerator.centroid(d);

      svgEle
        .append("text")
        .text(d.properties.name_traditional_chinese)
        .style("font-size", 20)
        .style("font-weight", "bold")
        .style("display", "inline")
        .attr("transform", "translate(" + centroid + ")")
        .style("fill", "black")
        .transition()
        .delay(function (d, i) {
          return 100;
        });

      d3.select(this).transition().duration(300).attr("fill", "yellow");
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <svg ref={svg}></svg>
    </div>
  );
}
