import { Element, Component, Host, Prop, h, State } from "@stencil/core";
type ChartData = { Global: object; Countries: Array<object> };

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true,
})
export class AppRoot {
  @Element() element: HTMLElement;
  @Prop() data: string = null;
  @State() itemSelected: object = {};
  @State() chartData: ChartData = null;

  constructor() {}

  async componentDidLoad() {
    await this.loadData();
  }

  async loadData() {
    try {
      const response = await fetch(this.data);
      this.chartData = await response.json();
      //initial select
      this.itemSelected = this.chartData.Global;
    } catch (error) {
      console.log("Loading data:", error);
    }
  }

  private onChartClear() {
    this.itemSelected = this.chartData.Global;
  }
  private onRowClick(rowData: object) {
    this.itemSelected = rowData;
  }

  render() {
    if (!this.data) {
      return "no data provided.";
    }

    return this.chartData ? (
      <Host>
        <app-table
          data={this.chartData}
          onRowClick={(rowData: object) => this.onRowClick(rowData)}
        />
        <app-chart
          data={this.itemSelected}
          onChartClear={() => this.onChartClear()}
        />
      </Host>
    ) : (
      "Loading..."
    );
  }
}
