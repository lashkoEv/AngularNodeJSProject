import { AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { CarouselService } from '../carousel.service';
import * as i0 from "@angular/core";
export declare class CarouselItemComponent implements OnDestroy, AfterViewInit {
    private carouselService;
    private changeDetectorRef;
    static ngAcceptInputType_active: BooleanInput;
    index?: number;
    private carouselIndexSubscription?;
    /**
     * @ignore
     */
    set active(value: boolean);
    get active(): boolean;
    private _active;
    /**
     * Time delay before cycling to next item. If -1, uses carousel interval value.
     * @type number
     * @default -1
     */
    interval: number;
    get hostClasses(): any;
    constructor(carouselService: CarouselService, changeDetectorRef: ChangeDetectorRef);
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    private carouselStateSubscribe;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CarouselItemComponent, "c-carousel-item", never, { "active": { "alias": "active"; "required": false; }; "interval": { "alias": "interval"; "required": false; }; }, {}, never, ["*"], true, never>;
}
