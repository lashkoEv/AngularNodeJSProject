import { ICarouselState } from './carousel-state.type';
import { CarouselService } from './carousel.service';
import * as i0 from "@angular/core";
export declare class CarouselState {
    private carouselService;
    private _state;
    constructor(carouselService: CarouselService);
    get state(): ICarouselState;
    set state(state: ICarouselState);
    setItems(newItems: any): void;
    setNextIndex(nextIndex: any): void;
    direction(direction?: 'next' | 'prev'): number;
    reset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselState, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CarouselState>;
}
