import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { DropdownService } from '../dropdown.service';
import * as i0 from "@angular/core";
export declare class DropdownMenuDirective implements OnInit, OnDestroy {
    elementRef: ElementRef;
    private dropdownService;
    constructor(elementRef: ElementRef, dropdownService: DropdownService);
    /**
     * Set alignment of dropdown menu.
     * @type {'start' | 'end' }
     */
    alignment?: 'start' | 'end' | string;
    /**
     * Toggle the visibility of dropdown menu component.
     */
    visible: boolean;
    /**
     * Sets a darker color scheme to match a dark navbar.
     * @type boolean
     */
    dark: string | boolean;
    private dropdownStateSubscription;
    get hostClasses(): any;
    get hostStyles(): {
        visibility: string | null;
        display: string | null;
    };
    ngOnInit(): void;
    ngOnDestroy(): void;
    private dropdownStateSubscribe;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownMenuDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DropdownMenuDirective, "[cDropdownMenu]", ["cDropdownMenu"], { "alignment": { "alias": "alignment"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "dark": { "alias": "dark"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_dark: unknown;
}
