import { BooleanInput } from '@angular/cdk/coercion';
import { AccordionService } from '../accordion.service';
import * as i0 from "@angular/core";
export declare class AccordionComponent {
    private accordionService;
    static ngAcceptInputType_alwaysOpen: BooleanInput;
    /**
     * Removes the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.
     * @type boolean
     */
    flush?: boolean;
    /**
     * Make accordion items stay open when another item is opened
     * @type boolean
     */
    set alwaysOpen(value: boolean);
    get alwaysOpen(): boolean;
    get hostClasses(): any;
    constructor(accordionService: AccordionService);
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionComponent, "c-accordion", ["cAccordionItem"], { "flush": { "alias": "flush"; "required": false; }; "alwaysOpen": { "alias": "alwaysOpen"; "required": false; }; }, {}, never, ["*"], true, never>;
}
