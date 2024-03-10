import * as i0 from "@angular/core";
export declare class ModalDialogComponent {
    /**
     * Align the modal in the center or top of the screen.
     * @type {'top' | 'center'}
     */
    alignment?: 'top' | 'center';
    /**
     * Set modal to covers the entire user viewport.
     * @type {boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'}
     */
    fullscreen?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    /**
     * Does the modal dialog itself scroll, or does the whole dialog scroll within the window.
     * @type boolean
     */
    scrollable?: boolean;
    /**
     * Size the component small, large, or extra large.
     */
    size?: 'sm' | 'lg' | 'xl';
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalDialogComponent, "c-modal-dialog", never, { "alignment": { "alias": "alignment"; "required": false; }; "fullscreen": { "alias": "fullscreen"; "required": false; }; "scrollable": { "alias": "scrollable"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], true, never>;
}
