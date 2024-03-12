import { AfterContentInit, QueryList } from '@angular/core';
import { Colors } from '../../coreui.types';
import { TemplateIdDirective } from '../../shared';
import * as i0 from "@angular/core";
export declare class WidgetStatFComponent implements AfterContentInit {
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     * @type Colors
     */
    color?: Colors;
    /**
     * Sets the text-color context of the component to one of CoreUI’s themed colors.
     * @type Colors
     */
    textColor?: Colors | 'white' | 'muted';
    /**
     * Footer for your widget
     * @type string
     */
    footer?: string;
    /**
     * Icon for your widget
     * @type string
     */
    icon?: string;
    /**
     * Set padding of your component.
     * @type boolean
     */
    padding: string | boolean;
    /**
     * Title of the widget to display
     * @type string
     */
    title?: string;
    /**
     * Value for your widget to display
     * @type string
     */
    value?: string | number;
    templates: any;
    contentTemplates: QueryList<TemplateIdDirective>;
    get hostClasses(): {
        card: boolean;
    };
    get cardBodyClasses(): {
        'd-flex': boolean;
        'align-items-center': boolean;
        'p-0': boolean;
    };
    get iconClasses(): {
        [x: string]: string | boolean;
        'me-3': boolean;
        'text-white': boolean;
        'p-3': string | boolean;
        'p-4': boolean;
    };
    get titleClasses(): {
        [x: string]: boolean;
        'text-medium-emphasis': boolean;
        small: boolean;
        'text-uppercase': boolean;
        'fw-semibold': boolean;
    };
    get valueClasses(): {
        [x: string]: boolean;
        'fs-6': boolean;
        'fw-semibold': boolean;
    };
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetStatFComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetStatFComponent, "c-widget-stat-f", ["cWidgetStatB"], { "color": { "alias": "color"; "required": false; }; "textColor": { "alias": "textColor"; "required": false; }; "footer": { "alias": "footer"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "padding": { "alias": "padding"; "required": false; }; "title": { "alias": "title"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, ["contentTemplates"], never, true, never>;
    static ngAcceptInputType_padding: unknown;
}
