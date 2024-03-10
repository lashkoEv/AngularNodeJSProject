import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, QueryList, SimpleChanges } from '@angular/core';
import { TabPaneComponent } from '../tab-pane/tab-pane.component';
import { TabService } from '../tab.service';
import * as i0 from "@angular/core";
export declare class TabContentComponent implements AfterContentChecked, AfterContentInit, OnChanges, OnDestroy {
    private changeDetectorRef;
    private tabService;
    /**
     * Set active tabPane index
     * @type number
     */
    set activeTabPaneIdx(value: number);
    get activeTabPaneIdx(): number;
    private _activeTabPaneIdx;
    /**
     * Event emitted on the active tab pane index change.
     */
    activeTabPaneIdxChange: EventEmitter<number>;
    panes: QueryList<TabPaneComponent>;
    private tabServiceSubscription;
    constructor(changeDetectorRef: ChangeDetectorRef, tabService: TabService);
    get hostClasses(): {
        'tab-content': boolean;
    };
    ngAfterContentInit(): void;
    ngAfterContentChecked(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    subscribeTabService(subscribe?: boolean): void;
    refreshTabPaneActive(idx: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabContentComponent, "c-tab-content", ["cTabContent"], { "activeTabPaneIdx": { "alias": "activeTabPaneIdx"; "required": false; }; }, { "activeTabPaneIdxChange": "activeTabPaneIdxChange"; }, ["panes"], ["*"], true, never>;
}
