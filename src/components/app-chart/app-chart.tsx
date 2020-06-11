import { Element, Component, Prop, h, Watch } from "@stencil/core";
import { select } from "d3-selection";
import { scaleOrdinal } from "d3-scale";
import { pie, arc } from "d3-shape";
import { interpolate } from "d3-interpolate";
import { entries } from "d3-collection";
import COLUMNS from "../app-root/Columns";

import "d3-transition";
@Component({
  tag: "app-chart",
  styleUrl: "app-chart.css",
  shadow: true,
})
export class Chart {
  @Element() element: HTMLElement;
  @Prop() data: object = {};
  @Prop() svg: any;
  @Prop() pieChart: any;
  @Prop() chartArc: any;
  @Prop() path: any;
  @Prop() onChartClear: Function;

  private width: number = 400;
  private height: number = 400;
  private colors: any = scaleOrdinal().range(["#e1e0e4", "#36304a", "#9a97a4"]);

  constructor() {}

  componentDidLoad() {
    this.createChart();
  }

  @Watch("data")
  watching(data: object) {
    this.data = data;
    this.updateChart();
  }

  /* getters */
  private get getArc() {
    const radius = Math.min(this.width, this.height) / 2 - 40;
    return arc().innerRadius(0).outerRadius(radius);
  }

  private get getNormalizedData() {
    const normalizeData = Object.entries(this.data).reduce(
      (result: Array<number>, item: Array<number | string>) => {
        const columName = COLUMNS.filter((c: object) => {
          const name = Object.keys(c)[0];
          return item[0] === name && name !== COLUMNS[0].Country;
        }).length;
        return columName ? [...result, item[1]] : result;
      },
      []
    );
    const chartPie = pie().value((d: any) => d.value);
    return chartPie(entries(normalizeData));
  }

  /* private methods */
  private renderPath() {
    this.path
      .transition()
      .duration(300)
      .attr("d", this.getArc)
      .attr("fill", (d: any) => this.colors(d.data.key));
  }
  private async createChart() {
    const div = select(this.element.shadowRoot.querySelector(".chart"));
    const svg = div
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr(
        "transform",
        "translate(" + this.width / 2 + "," + this.height / 2 + ")"
      );
    this.path = await svg
      .selectAll()
      .data(this.getNormalizedData)
      .enter()
      .append("path");

    this.renderPath();
  }

  private updateChart() {
    this.path.data(this.getNormalizedData);
    this.renderPath();
  }

  render() {
    return (
      <section class="app-chart">
        <header>{this.data["Country"] || "Global"}</header>
        <div class="chart" />
        <button type="button" onClick={() => this.onChartClear()}>
          Clear chart
        </button>
      </section>
    );
  }
}
