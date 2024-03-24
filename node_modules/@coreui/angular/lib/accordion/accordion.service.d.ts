import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import * as i0 from "@angular/core";
export declare class AccordionService {
    items: AccordionItemComponent[];
    alwaysOpen: boolean;
    constructor();
    addItem(item: AccordionItemComponent): void;
    removeItem(item: AccordionItemComponent): void;
    toggleItem(item: AccordionItemComponent): void;
    closeOtherItems(openItem: AccordionItemComponent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AccordionService>;
}
