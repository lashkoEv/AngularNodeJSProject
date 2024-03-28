import { ButtonType, Colors, Shapes } from '../coreui.types';
import * as i0 from "@angular/core";
export declare class ButtonDirective {
    /**
     * Toggle the active state for the component. [docs]
     * @type boolean
     */
    active: string | boolean;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
     * @type Colors
     */
    color?: Colors;
    /**
     * Toggle the disabled state for the component.
     * @type boolean
     */
    disabled: string | boolean;
    /**
     * Select the shape of the component.
     * @type { 'rounded' | 'rounded-top' | 'rounded-end' | 'rounded-bottom' | 'rounded-start' | 'rounded-circle' | 'rounded-pill' | 'rounded-0' | 'rounded-1' | 'rounded-2' | 'rounded-3' | string }
     */
    shape?: Shapes;
    /**
     * Size the component small or large.
     * @type {'sm' | 'lg'}
     */
    size?: 'sm' | 'lg' | '';
    /**
     * Specifies the type of button. Always specify the type attribute for the `<button>` element.
     * Different browsers may use different default types for the `<button>` element.
     */
    type: ButtonType;
    /**
     * Set the button variant to an outlined button or a ghost button.
     * @type {'ghost' | 'outline'}
     */
    variant?: 'ghost' | 'outline';
    get hostClasses(): any;
    get ariaDisabled(): string | true | null;
    get isActive(): boolean | null;
    get attrDisabled(): "" | null;
    get tabIndex(): string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ButtonDirective, "[cButton]", ["cButton"], { "active": { "alias": "active"; "required": false; }; "color": { "alias": "color"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "shape": { "alias": "shape"; "required": false; }; "size": { "alias": "size"; "required": false; }; "type": { "alias": "type"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_active: unknown;
    static ngAcceptInputType_disabled: unknown;
}
