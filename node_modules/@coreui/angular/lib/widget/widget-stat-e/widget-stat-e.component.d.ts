import { CardComponent } from '../../card';
import * as i0 from "@angular/core";
export declare class WidgetStatEComponent extends CardComponent {
    constructor();
    /**
     * Title of the widget to display
     * @type string
     */
    title?: string;
    /**
     * Value for your widget to display
     * @type string | number
     */
    value?: string | number;
    get titleClasses(): {
        [x: string]: boolean;
        'text-medium-emphasis': boolean;
        small: boolean;
        'text-uppercase': boolean;
        'fw-semibold': boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetStatEComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetStatEComponent, "c-widget-stat-e", ["cWidgetStatE"], { "title": { "alias": "title"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
