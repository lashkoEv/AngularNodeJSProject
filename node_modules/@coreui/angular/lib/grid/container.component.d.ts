import { IContainer } from './container.type';
import { Breakpoints } from '../coreui.types';
import * as i0 from "@angular/core";
export declare class ContainerComponent implements IContainer {
    /**
     * Set container 100% wide until a breakpoint.
     */
    breakpoint: Exclude<Breakpoints, 'xs'>;
    /**
     * Set container 100% wide, spanning the entire width of the viewport.
     * @type boolean | string
     */
    fluid: string | boolean;
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContainerComponent, "c-container, [cContainer]", never, { "breakpoint": { "alias": "breakpoint"; "required": false; }; "fluid": { "alias": "fluid"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ngAcceptInputType_fluid: unknown;
}
