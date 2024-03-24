import { AfterContentInit, QueryList } from '@angular/core';
import { CardComponent } from '../../card';
import { TemplateIdDirective } from '../../shared';
import * as i0 from "@angular/core";
export declare class WidgetStatCComponent extends CardComponent implements AfterContentInit {
    constructor();
    /**
     * Icon for your component.
     * @type string
     */
    icon?: string;
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
    /**
     * Invert colors from their default dark shade.
     * @type boolean
     */
    inverse: string | boolean;
    templates: any;
    contentTemplates: QueryList<TemplateIdDirective>;
    get hostExtendedClass(): {
        'high-emphasis-inverse': string | boolean;
    };
    get iconClasses(): {
        [x: string]: string | boolean;
        'mb-4': boolean;
        'text-end': boolean;
        'text-medium-emphasis': boolean;
        'text-medium-emphasis-inverse': string | boolean;
    };
    get titleClasses(): {
        [x: string]: string | boolean;
        'text-medium-emphasis': boolean;
        'text-medium-emphasis-inverse': string | boolean;
    };
    get valueClasses(): {
        [x: string]: string | boolean;
        'fs-4': boolean;
        'fw-semibold': boolean;
        'text-high-emphasis': boolean;
        'text-high-emphasis-inverse': string | boolean;
    };
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetStatCComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetStatCComponent, "c-widget-stat-c", ["cWidgetStatC"], { "icon": { "alias": "icon"; "required": false; }; "title": { "alias": "title"; "required": false; }; "value": { "alias": "value"; "required": false; }; "inverse": { "alias": "inverse"; "required": false; }; }, {}, ["contentTemplates"], ["*"], true, never>;
    static ngAcceptInputType_inverse: unknown;
}
