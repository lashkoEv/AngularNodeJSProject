import { Colors } from '../coreui.types';
import * as i0 from "@angular/core";
export declare class SpinnerComponent {
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     * @type Colors
     */
    color?: Colors;
    /**
     * Label for accessibility.
     * @type string
     * @default 'Loading...'
     */
    label: string;
    /**
     * Size the component small.
     * @type string
     * @values 'sm'
     */
    size?: 'sm';
    /**
     * Set the button variant to an outlined button or a ghost button.
     * @values 'border' | 'grow'
     * @default 'border'
     */
    variant?: 'border' | 'grow';
    role: string;
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<SpinnerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SpinnerComponent, "c-spinner", never, { "color": { "alias": "color"; "required": false; }; "label": { "alias": "label"; "required": false; }; "size": { "alias": "size"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; "role": { "alias": "role"; "required": false; }; }, {}, never, never, true, never>;
}
