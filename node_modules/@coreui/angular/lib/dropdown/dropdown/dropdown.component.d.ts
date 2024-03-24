import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { Options, Placement } from '@popperjs/core';
import { DropdownMenuDirective } from '../dropdown-menu/dropdown-menu.directive';
import { DropdownService } from '../dropdown.service';
import * as i0 from "@angular/core";
export declare abstract class DropdownToken {
}
export declare class DropdownToggleDirective implements AfterViewInit {
    elementRef: ElementRef;
    private dropdownService;
    dropdown?: DropdownToken | undefined;
    static ngAcceptInputType_split: BooleanInput;
    static ngAcceptInputType_popper: BooleanInput;
    constructor(elementRef: ElementRef, dropdownService: DropdownService, dropdown?: DropdownToken | undefined);
    /**
     * Toggle the disabled state for the toggler.
     * @type DropdownComponent | undefined
     * @default undefined
     */
    dropdownComponent?: DropdownComponent;
    /**
     * Disables the toggler.
     * @type boolean
     * @default false
     */
    disabled?: boolean;
    /**
     * Enables pseudo element caret on toggler.
     * @type boolean
     */
    caret: boolean;
    /**
     * Create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` class for proper spacing around the dropdown caret.
     * @type boolean
     */
    set split(value: boolean);
    get split(): boolean;
    private _split;
    get hostClasses(): any;
    onClick($event: MouseEvent): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownToggleDirective, [null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DropdownToggleDirective, "[cDropdownToggle]", ["cDropdownToggle"], { "dropdownComponent": { "alias": "dropdownComponent"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "caret": { "alias": "caret"; "required": false; }; "split": { "alias": "split"; "required": false; }; }, {}, never, never, true, never>;
}
export declare class DropdownComponent implements AfterContentInit, OnChanges, OnDestroy, OnInit {
    private document;
    private elementRef;
    private renderer;
    private ngZone;
    private changeDetectorRef;
    dropdownService: DropdownService;
    static ngAcceptInputType_dark: BooleanInput;
    static ngAcceptInputType_visible: BooleanInput;
    constructor(document: Document, elementRef: ElementRef, renderer: Renderer2, ngZone: NgZone, changeDetectorRef: ChangeDetectorRef, dropdownService: DropdownService);
    /**
     * Set alignment of dropdown menu.
     * @type {'start' | 'end' | { xs: 'start' | 'end' } | { sm: 'start' | 'end' } | { md: 'start' | 'end' } | { lg: 'start' | 'end' } | { xl: 'start' | 'end'} | { xxl: 'start' | 'end'}}
     */
    alignment?: string;
    autoClose: boolean | 'inside' | 'outside';
    /**
     * Sets a darker color scheme to match a dark navbar.
     * @type boolean
     * @default false
     */
    set dark(value: boolean);
    get dark(): boolean;
    private _dark;
    /**
     * Sets a specified  direction and location of the dropdown menu.
     * @type 'dropup' | 'dropend' | 'dropstart'
     */
    direction?: 'center' | 'dropup' | 'dropup-center' | 'dropend' | 'dropstart';
    /**
     * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
     * @type Placement
     */
    placement: Placement;
    /**
     * If you want to disable dynamic positioning set this property to `false`.
     * @type boolean
     * @default true
     */
    set popper(value: boolean);
    get popper(): boolean;
    private _popper;
    /**
     * Optional popper Options object, placement prop takes precedence over
     * @type Partial<Options>
     */
    set popperOptions(value: Partial<Options>);
    get popperOptions(): Partial<Options>;
    private _popperOptions;
    /**
     * Set the dropdown variant to a btn-group, dropdown, input-group, and nav-item.
     */
    variant?: 'btn-group' | 'dropdown' | 'input-group' | 'nav-item';
    /**
     * Toggle the visibility of dropdown menu component.
     * @type boolean
     * @default false
     */
    set visible(value: boolean);
    get visible(): boolean;
    private _visible;
    visibleChange: EventEmitter<boolean>;
    dropdownContext: {
        $implicit: boolean;
    };
    _toggler: DropdownToggleDirective;
    _menu: DropdownMenuDirective;
    _menuElementRef: ElementRef;
    activeTrap: boolean;
    private dropdownStateSubscription;
    private popperInstance;
    private listeners;
    get hostClasses(): any;
    get hostStyle(): any;
    private clickedTarget;
    private onHostClick;
    dropdownStateSubscribe(subscribe?: boolean): void;
    toggleDropdown(): void;
    onClick(event: any): void;
    ngAfterContentInit(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    setVisibleState(value: boolean): void;
    createPopperInstance(): void;
    destroyPopperInstance(): void;
    private setListeners;
    private clearListeners;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownComponent, "c-dropdown", ["cDropdown"], { "alignment": { "alias": "alignment"; "required": false; }; "autoClose": { "alias": "autoClose"; "required": false; }; "dark": { "alias": "dark"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "popper": { "alias": "popper"; "required": false; }; "popperOptions": { "alias": "popperOptions"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; }, { "visibleChange": "visibleChange"; }, ["_toggler", "_menu", "_menuElementRef"], ["*"], true, never>;
}
