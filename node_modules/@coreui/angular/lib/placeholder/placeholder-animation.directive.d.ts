import { AfterContentInit } from '@angular/core';
import { PlaceholderDirective } from './placeholder.directive';
import * as i0 from "@angular/core";
export declare class PlaceholderAnimationDirective implements AfterContentInit {
    #private;
    /**
     * Animation type for placeholder
     * @type 'glow' | 'wave'
     * @default undefined
     */
    animation?: 'glow' | 'wave';
    placeholder: PlaceholderDirective;
    get hostClasses(): any;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaceholderAnimationDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PlaceholderAnimationDirective, "[cPlaceholderAnimation]", never, { "animation": { "alias": "cPlaceholderAnimation"; "required": false; }; }, {}, ["placeholder"], never, true, never>;
}
