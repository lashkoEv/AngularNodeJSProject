import { AfterContentInit, QueryList } from '@angular/core';
import { Colors } from '../../coreui.types';
import { TemplateIdDirective } from '../../shared';
import * as i0 from "@angular/core";
export declare class WidgetStatAComponent implements AfterContentInit {
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     * @type Colors
     */
    color?: Colors;
    /**
     * Title of the widget to display
     * @type string
     */
    title?: string;
    /**
     * Value for your widget to display
     * @type string
     */
    value?: string;
    templates: any;
    contentTemplates: QueryList<TemplateIdDirective>;
    get hostClasses(): {
        [x: string]: boolean;
        card: boolean;
        'text-high-emphasis-inverse': boolean;
    };
    get bodyClasses(): {
        'pb-0': boolean;
        'd-flex': boolean;
        'justify-content-between': boolean;
        'align-items-start': boolean;
    };
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetStatAComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetStatAComponent, "c-widget-stat-a", ["cWidgetStatA"], { "color": { "alias": "color"; "required": false; }; "title": { "alias": "title"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, ["contentTemplates"], [".chart-wrapper", "*"], true, never>;
}
