import { AfterViewInit } from '@angular/core';
import { DropdownService } from '../dropdown.service';
import { DropdownComponent } from '../dropdown/dropdown.component';
import * as i0 from "@angular/core";
export declare class DropdownCloseDirective implements AfterViewInit {
    private dropdownService;
    dropdown?: DropdownComponent | undefined;
    constructor(dropdownService: DropdownService, dropdown?: DropdownComponent | undefined);
    /**
     * Disables a dropdown-close directive.
     * @type boolean
     * @default undefined
     */
    disabled?: boolean;
    dropdownComponent?: DropdownComponent;
    ngAfterViewInit(): void;
    get hostClasses(): any;
    set tabIndex(value: string | number | null);
    get tabIndex(): string | number | null;
    private _tabIndex;
    get isDisabled(): boolean | null;
    private onClick;
    private onKeyUp;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownCloseDirective, [null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DropdownCloseDirective, "[cDropdownClose]", ["cDropdownClose"], { "disabled": { "alias": "disabled"; "required": false; }; "dropdownComponent": { "alias": "dropdownComponent"; "required": false; }; "tabIndex": { "alias": "tabIndex"; "required": false; }; }, {}, never, never, true, never>;
}
