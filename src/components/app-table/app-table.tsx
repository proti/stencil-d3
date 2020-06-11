import { Element, Component, Prop, h, State } from "@stencil/core";
import { select } from "d3-selection";
import COLUMNS from "../app-root/Columns";

@Component({
  tag: "app-table",
  styleUrl: "app-table.css",
  shadow: true,
})
export class AppRoot {
  @Element() element: HTMLElement;
  @Prop() data: any = null;
  @State() itemSelected: object = {};
  @Prop() onRowClick: Function;

  constructor() {}

  componentDidLoad() {
    this.createTable();
  }

  private onRowClickHandler(rowData: object) {
    this.onRowClick(rowData);
  }

  private createTable() {
    const table = select(
      this.element.shadowRoot.querySelector(".table")
    ).append("table");

    //header
    table
      .append("thead")
      .append("tr")
      .selectAll("th")
      .data(COLUMNS)
      .enter()
      .append("th")
      .text((name: object) => Object.values(name));

    //boddy
    table
      .append("tbody")
      .selectAll("tr")
      .data(this.data.Countries)
      .enter()
      .append("tr")
      .on("click", (rowData: object) => this.onRowClickHandler(rowData))
      .selectAll("td")
      .data((row: object) => COLUMNS.map((c: object) => row[Object.keys(c)[0]]))
      .enter()
      .append("td")
      .text((d: number | string) => d);
  }

  render() {
    return <div class="table" />;
  }
}
