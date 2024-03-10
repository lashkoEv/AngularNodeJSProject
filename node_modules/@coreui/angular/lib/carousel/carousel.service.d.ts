import * as i0 from "@angular/core";
export interface ICarouselIndex {
    active?: number;
    interval?: number;
    lastItemIndex?: number;
}
export declare class CarouselService {
    private carouselIndex;
    carouselIndex$: import("rxjs").Observable<ICarouselIndex>;
    constructor();
    setIndex(index: ICarouselIndex): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CarouselService>;
}
