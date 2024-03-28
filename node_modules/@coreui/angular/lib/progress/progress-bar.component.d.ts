import { ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { Colors } from '../coreui.types';
import * as i0 from "@angular/core";
export declare class ProgressBarComponent implements OnInit, OnChanges {
    private renderer;
    private hostElement;
    /**
     * Use to animate the stripes right to left via CSS3 animations.
     * @type boolean
     */
    animated: string | boolean;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color?: Colors;
    precision: string | number;
    /**
     * The percent to progress the ProgressBar.
     * @type number
     */
    value: string | number;
    /**
     * Set the progress bar variant to optional striped.
     * @values 'striped'
     */
    variant?: 'striped';
    /**
     * Set default html role attribute.
     * @type string
     */
    role: string;
    private state;
    constructor(renderer: Renderer2, hostElement: ElementRef);
    get min(): number;
    set min(value: number);
    get max(): number;
    set max(value: number);
    get hostClasses(): any;
    ngOnInit(): void;
    setPercent(): void;
    setValues(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressBarComponent, "c-progress-bar", never, { "animated": { "alias": "animated"; "required": false; }; "color": { "alias": "color"; "required": false; }; "precision": { "alias": "precision"; "required": false; }; "value": { "alias": "value"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "role": { "alias": "role"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ngAcceptInputType_animated: unknown;
    static ngAcceptInputType_precision: unknown;
    static ngAcceptInputType_value: unknown;
}
