import * as i0 from "@angular/core";
export interface IDropdownState {
    visible?: boolean | 'toggle';
    dropdown?: any;
}
export declare class DropdownService {
    private dropdownState;
    dropdownState$: import("rxjs").Observable<any>;
    constructor();
    toggle(state: IDropdownState): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DropdownService>;
}
