import { DropdownService } from '../dropdown.service';
import { DropdownComponent } from '../dropdown/dropdown.component';
import * as i0 from "@angular/core";
export declare class DropdownItemDirective {
    private dropdownService;
    dropdown?: DropdownComponent | undefined;
    /**
     * Set active state to a dropdown-item.
     * @type boolean
     * @default undefined
     */
    active?: boolean;
    /**
     * Configure dropdown-item close dropdown behavior.
     * @type boolean
     * @default true
     */
    autoClose: boolean;
    /**
     * Disables a dropdown-item.
     * @type boolean
     * @default undefined
     */
    disabled?: boolean;
    constructor(dropdownService: DropdownService, dropdown?: DropdownComponent | undefined);
    get ariaCurrent(): string | null;
    get hostClasses(): any;
    set tabIndex(value: string | number | null);
    get tabIndex(): string | number | null;
    private _tabIndex;
    get isDisabled(): boolean | null;
    private onClick;
    private onKeyUp;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownItemDirective, [null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DropdownItemDirective, "[cDropdownItem]", ["cDropdownItem"], { "active": { "alias": "active"; "required": false; }; "autoClose": { "alias": "autoClose"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "tabIndex": { "alias": "tabIndex"; "required": false; }; }, {}, never, never, true, never>;
}
