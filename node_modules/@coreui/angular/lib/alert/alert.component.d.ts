import { AfterContentInit, EventEmitter, QueryList } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { BooleanInput } from '@angular/cdk/coercion';
import { Colors } from '../coreui.types';
import { TemplateIdDirective } from '../shared';
import * as i0 from "@angular/core";
type AnimateType = ('hide' | 'show');
export declare class AlertComponent implements AfterContentInit {
    static ngAcceptInputType_dismissible: BooleanInput;
    static ngAcceptInputType_fade: BooleanInput;
    static ngAcceptInputType_visible: BooleanInput;
    hide: boolean;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @type Colors
     * @default 'primary'
     */
    color: Colors;
    /**
     * Default role for alert. [docs]
     * @type string
     * @default 'alert'
     */
    role: string;
    /**
     * Set the alert variant to a solid.
     * @type string
     */
    variant?: 'solid' | string;
    /**
     * Event triggered on the alert dismiss.
     */
    visibleChange: EventEmitter<boolean>;
    templates: any;
    contentTemplates: QueryList<TemplateIdDirective>;
    private _dismissible;
    /**
     * Optionally adds a close button to alert and allow it to self dismiss.
     * @type boolean
     */
    get dismissible(): boolean;
    set dismissible(value: boolean);
    private _fade;
    /**
     * Adds animation for dismissible alert.
     * @type boolean
     */
    get fade(): boolean;
    set fade(value: boolean);
    private _visible;
    get visible(): boolean;
    /**
     * Toggle the visibility of alert component.
     * @type boolean
     */
    set visible(value: boolean);
    get animationDisabled(): boolean;
    get animateType(): AnimateType;
    get hostClasses(): any;
    onAnimationStart($event: AnimationEvent): void;
    onAnimationDone($event: AnimationEvent): void;
    ngAfterContentInit(): void;
    onAnimationEvent(event: AnimationEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "c-alert", ["cAlert"], { "color": { "alias": "color"; "required": false; }; "role": { "alias": "role"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "dismissible": { "alias": "dismissible"; "required": false; }; "fade": { "alias": "fade"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; }, { "visibleChange": "visibleChange"; }, ["contentTemplates"], ["*"], true, never>;
}
export {};
