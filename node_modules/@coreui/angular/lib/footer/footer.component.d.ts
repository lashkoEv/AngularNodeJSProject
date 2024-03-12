import { Positions } from '../coreui.types';
import * as i0 from "@angular/core";
export declare class FooterComponent {
    /**
     * Place footer in non-static positions. [docs]
     * @type Positions
     */
    position?: Positions;
    /**
     * Default role for footer. [docs]
     * @type string
     * @default 'footer'
     */
    role: string;
    get getClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<FooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FooterComponent, "c-footer, [cFooter]", never, { "position": { "alias": "position"; "required": false; }; "role": { "alias": "role"; "required": false; }; }, {}, never, ["*"], true, never>;
}
