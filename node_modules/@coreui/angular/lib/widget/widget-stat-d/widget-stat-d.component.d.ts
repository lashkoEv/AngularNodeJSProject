import { Colors } from '../../coreui.types';
import * as i0 from "@angular/core";
export type WidgetStatDValue = {
    title?: string;
    value?: number | string;
};
export declare class WidgetStatDComponent {
    constructor();
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     * @type Colors
     */
    color?: Colors;
    /**
     * Values and subtitles for your component.
     * @type WidgetStatDValue
     */
    values?: WidgetStatDValue[];
    get hostClasses(): {
        card: boolean;
    };
    get headerClasses(): {
        [x: string]: string | boolean | undefined;
        'position-relative': boolean;
        'd-flex': boolean;
        'justify-content-center': boolean;
        'align-items-center': boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetStatDComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetStatDComponent, "c-widget-stat-d", ["cWidgetStatD"], { "color": { "alias": "color"; "required": false; }; "values": { "alias": "values"; "required": false; }; }, {}, never, ["*"], true, never>;
}
