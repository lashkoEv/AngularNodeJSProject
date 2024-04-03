import { ElementRef, Renderer2 } from '@angular/core';
import { Triggers } from '../coreui.types';
import * as i0 from "@angular/core";
export interface IListenersConfig {
    hostElement: ElementRef;
    trigger?: Triggers | Triggers[];
    callbackOn?: () => void;
    callbackOff?: () => void;
    callbackToggle?: () => void;
}
export declare class ListenersService {
    private renderer;
    private listeners;
    constructor(renderer: Renderer2);
    setListeners({ hostElement, trigger, callbackOn, callbackOff, callbackToggle }: IListenersConfig): void;
    clearListeners(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListenersService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ListenersService>;
}
