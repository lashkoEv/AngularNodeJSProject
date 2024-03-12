import { AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { CarouselState } from '../carousel-state';
import * as i0 from "@angular/core";
export declare class CarouselControlComponent implements AfterViewInit {
    private changeDetectorRef;
    private carouselState;
    constructor(changeDetectorRef: ChangeDetectorRef, carouselState: CarouselState);
    private _caption?;
    /**
     * Carousel control caption. [docs]
     * @type string
     */
    set caption(value: string);
    get caption(): string;
    /**
     * Carousel control direction. [docs]
     * @type {'next' | 'prev'}
     */
    direction: 'prev' | 'next';
    get hostRole(): string;
    get hostClasses(): string;
    get carouselControlIconClass(): string;
    content?: ElementRef;
    hasContent: boolean;
    onKeyUp($event: KeyboardEvent): void;
    onClick($event: MouseEvent): void;
    ngAfterViewInit(): void;
    private play;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CarouselControlComponent, "c-carousel-control", never, { "caption": { "alias": "caption"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; }, {}, never, ["*"], true, never>;
}
