import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { TabContentComponent } from '../tab-content/tab-content.component';
import { TabService } from '../tab.service';
import * as i0 from "@angular/core";
export declare class TabPaneComponent implements OnDestroy {
    private changeDetectorRef;
    private tabService;
    constructor(changeDetectorRef: ChangeDetectorRef, tabService: TabService);
    tabPaneIdx: number;
    tabContent: TabContentComponent;
    private tabServiceSubscription;
    set active(value: boolean);
    get active(): boolean;
    private _active;
    get hostClasses(): {
        'tab-pane': boolean;
        fade: boolean;
        show: boolean;
        active: boolean;
    };
    ngOnDestroy(): void;
    subscribeTabService(subscribe?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabPaneComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabPaneComponent, "c-tab-pane", ["cTabPane"], {}, {}, never, ["*"], true, never>;
}
