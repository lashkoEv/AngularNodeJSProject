import { AfterContentInit, OnDestroy, OnInit, QueryList } from '@angular/core';
import { TemplateIdDirective } from '../../shared';
import { AccordionService } from '../accordion.service';
import * as i0 from "@angular/core";
export declare class AccordionItemComponent implements OnInit, OnDestroy, AfterContentInit {
    private accordionService;
    constructor(accordionService: AccordionService);
    /**
     * Toggle an accordion item programmatically
     * @type boolean
     * @default false
     */
    visible: string | boolean;
    set open(value: boolean);
    get open(): boolean;
    get hostClasses(): any;
    contentId: string;
    itemContext: {
        $implicit: boolean;
    };
    templates: any;
    contentTemplates: QueryList<TemplateIdDirective>;
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleItem(): void;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionItemComponent, "c-accordion-item", ["cAccordionItem"], { "visible": { "alias": "visible"; "required": false; }; "open": { "alias": "open"; "required": false; }; }, {}, ["contentTemplates"], ["*", "*"], true, never>;
    static ngAcceptInputType_visible: unknown;
}
