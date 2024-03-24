import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Breakpoints, Colors } from '../coreui.types';
import { ITable } from './table.type';
import * as i0 from "@angular/core";
export declare class TableDirective implements ITable, OnInit {
    private renderer;
    private hostElement;
    constructor(renderer: Renderer2, hostElement: ElementRef);
    /**
     * Set the vertical alignment.
     * @type string
     * @values 'bottom' | 'middle' | 'top'
     */
    align?: 'bottom' | 'middle' | 'top';
    /**
     * Sets the border color of the component to one of CoreUI’s themed colors.
     * @type Colors
     */
    borderColor?: Colors;
    /**
     * Add borders on all sides of the table and cells.
     * @type boolean
     */
    bordered: string | boolean;
    /**
     * Remove borders on all sides of the table and cells.
     * @type boolean
     */
    borderless: string | boolean;
    /**
     * Put the `<caption>` on the top of the table.
     * @values 'top'
     */
    caption?: 'top';
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     * @type Colors
     */
    color?: Colors;
    /**
     * Enable a hover state on table rows within table body.
     * @type boolean
     */
    hover: string | boolean;
    /**
     * Make table responsive across all viewports or pick a maximum breakpoint with which to have a responsive table up to.
     * @type: {boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'}
     */
    responsive?: boolean | Omit<Breakpoints, 'xs'>;
    /**
     * Make table more compact by cutting all cell `padding` in half.
     * @type boolean
     */
    small: string | boolean;
    /**
     * Add zebra-striping to any table row within the table body.
     * @type boolean
     */
    striped: string | boolean;
    /**
     * Add zebra-striping to any table column.
     * @type boolean
     * @since 4.2.4
     */
    stripedColumns: string | boolean;
    get hostClasses(): any;
    ngOnInit(): void;
    setResponsiveWrapper(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TableDirective, "table[cTable]", never, { "align": { "alias": "align"; "required": false; }; "borderColor": { "alias": "borderColor"; "required": false; }; "bordered": { "alias": "bordered"; "required": false; }; "borderless": { "alias": "borderless"; "required": false; }; "caption": { "alias": "caption"; "required": false; }; "color": { "alias": "color"; "required": false; }; "hover": { "alias": "hover"; "required": false; }; "responsive": { "alias": "responsive"; "required": false; }; "small": { "alias": "small"; "required": false; }; "striped": { "alias": "striped"; "required": false; }; "stripedColumns": { "alias": "stripedColumns"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_bordered: unknown;
    static ngAcceptInputType_borderless: unknown;
    static ngAcceptInputType_hover: unknown;
    static ngAcceptInputType_small: unknown;
    static ngAcceptInputType_striped: unknown;
    static ngAcceptInputType_stripedColumns: unknown;
}
