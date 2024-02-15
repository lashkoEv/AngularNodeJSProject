import { AfterContentInit, ElementRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CollapseDirective } from '../collapse';
import { Colors } from '../coreui.types';
import * as i0 from "@angular/core";
export declare class NavbarComponent implements AfterContentInit {
    private hostElement;
    private breakpointObserver;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     * @type Colors
     */
    color?: Colors;
    /**
     * Sets if the color of text should be colored for a light or dark dark background.
     */
    colorScheme?: 'dark' | 'light';
    /**
     * Defines optional container wrapping children elements.
     */
    container?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';
    /**
     * Defines the responsive breakpoint to determine when content collapses.
     */
    expand?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    /**
     * Place component in non-static positions.
     */
    placement?: 'fixed-top' | 'fixed-bottom' | 'sticky-top';
    collapse: CollapseDirective;
    role: string;
    constructor(hostElement: ElementRef, breakpointObserver: BreakpointObserver);
    get hostClasses(): any;
    get containerClass(): string;
    get breakpoint(): string | boolean;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavbarComponent, "c-navbar", never, { "color": { "alias": "color"; "required": false; }; "colorScheme": { "alias": "colorScheme"; "required": false; }; "container": { "alias": "container"; "required": false; }; "expand": { "alias": "expand"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "role": { "alias": "role"; "required": false; }; }, {}, ["collapse"], ["*", "*"], true, never>;
}
