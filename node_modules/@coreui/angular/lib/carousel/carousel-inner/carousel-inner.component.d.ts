import { AfterContentChecked, AfterContentInit } from '@angular/core';
import { CarouselState } from '../carousel-state';
import * as i0 from "@angular/core";
export declare class CarouselInnerComponent implements AfterContentInit, AfterContentChecked {
    private carouselState;
    constructor(carouselState: CarouselState);
    carouselInnerClass: boolean;
    activeIndex?: number;
    animate?: boolean;
    slide: {
        left: boolean;
    };
    transition: string;
    private contentItems;
    private prevContentItems;
    ngAfterContentInit(): void;
    ngAfterContentChecked(): void;
    setItems(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselInnerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CarouselInnerComponent, "c-carousel-inner", never, {}, {}, ["contentItems"], ["*"], true, never>;
}
