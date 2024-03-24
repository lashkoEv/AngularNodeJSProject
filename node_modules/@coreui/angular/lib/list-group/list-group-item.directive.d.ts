import { ElementRef } from '@angular/core';
import { Colors } from '../coreui.types';
import * as i0 from "@angular/core";
export declare class ListGroupItemDirective {
    private hostElement;
    constructor(hostElement: ElementRef);
    /**
     * Toggle the active state for the component.
     * @type boolean
     */
    active?: boolean;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     * @type Colors
     */
    color?: Colors;
    /**
     * Set disabled attr for the host element. [docs]
     * @type boolean
     */
    disabled: string | boolean;
    get isDisabled(): boolean | null;
    get attrDisabled(): "" | null;
    get getTabindex(): string | null;
    get ariaCurrent(): boolean;
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListGroupItemDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ListGroupItemDirective, "[cListGroupItem], c-list-group-item", ["cListGroupItem"], { "active": { "alias": "active"; "required": false; }; "color": { "alias": "color"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_disabled: unknown;
}
