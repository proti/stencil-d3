/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppChart {
        "chartArc": any;
        "data": object;
        "onChartClear": Function;
        "path": any;
        "pieChart": any;
        "svg": any;
    }
    interface AppRoot {
        "data": string;
    }
    interface AppTable {
        "data": any;
        "onRowClick": Function;
    }
}
declare global {
    interface HTMLAppChartElement extends Components.AppChart, HTMLStencilElement {
    }
    var HTMLAppChartElement: {
        prototype: HTMLAppChartElement;
        new (): HTMLAppChartElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppTableElement extends Components.AppTable, HTMLStencilElement {
    }
    var HTMLAppTableElement: {
        prototype: HTMLAppTableElement;
        new (): HTMLAppTableElement;
    };
    interface HTMLElementTagNameMap {
        "app-chart": HTMLAppChartElement;
        "app-root": HTMLAppRootElement;
        "app-table": HTMLAppTableElement;
    }
}
declare namespace LocalJSX {
    interface AppChart {
        "chartArc"?: any;
        "data"?: object;
        "onChartClear"?: Function;
        "path"?: any;
        "pieChart"?: any;
        "svg"?: any;
    }
    interface AppRoot {
        "data"?: string;
    }
    interface AppTable {
        "data"?: any;
        "onRowClick"?: Function;
    }
    interface IntrinsicElements {
        "app-chart": AppChart;
        "app-root": AppRoot;
        "app-table": AppTable;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-chart": LocalJSX.AppChart & JSXBase.HTMLAttributes<HTMLAppChartElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-table": LocalJSX.AppTable & JSXBase.HTMLAttributes<HTMLAppTableElement>;
        }
    }
}
