import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class HtmlAttributesDirective implements OnInit {
    private renderer;
    private el;
    cHtmlAttr?: {
        [key: string]: any;
    };
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
    private setStyle;
    private addClass;
    private setAttrib;
    static ɵfac: i0.ɵɵFactoryDeclaration<HtmlAttributesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HtmlAttributesDirective, "[cHtmlAttr]", ["cHtmlAttr"], { "cHtmlAttr": { "alias": "cHtmlAttr"; "required": false; }; }, {}, never, never, true, never>;
}
