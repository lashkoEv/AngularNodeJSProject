import * as i0 from "@angular/core";
export declare class ButtonGroupComponent {
    /**
     * Size the component small or large.
     * @type { 'sm' | 'lg' }
     */
    size?: 'sm' | 'lg';
    /**
     * Create a set of buttons that appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.
     * @type boolean
     */
    vertical?: boolean;
    /**
     * Default role attr for ButtonGroup. [docs]
     * @type string
     * @default 'group'
     */
    role: string;
    get hostClasses(): any;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonGroupComponent, "c-button-group", never, { "size": { "alias": "size"; "required": false; }; "vertical": { "alias": "vertical"; "required": false; }; "role": { "alias": "role"; "required": false; }; }, {}, never, ["*"], true, never>;
}
