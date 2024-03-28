import { TabContentComponent } from './tab-content/tab-content.component';
import * as i0 from "@angular/core";
export interface ITabContentState {
    activeIdx: number;
    tabContent: TabContentComponent;
}
export declare class TabService {
    private activeTabPaneIdx;
    activeTabPaneIdx$: import("rxjs").Observable<ITabContentState>;
    constructor();
    setActiveTabIdx(tabContentState: ITabContentState): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TabService>;
}
