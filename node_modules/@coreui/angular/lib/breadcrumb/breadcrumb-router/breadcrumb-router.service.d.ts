import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IBreadcrumbItem } from '../breadcrumb-item/breadcrumb-item';
import * as i0 from "@angular/core";
export declare class BreadcrumbRouterService {
    private router;
    private route;
    outlet: string;
    breadcrumbs$: Observable<IBreadcrumbItem[]>;
    private breadcrumbsBehaviorSubject;
    constructor(router: Router, route: ActivatedRoute);
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbRouterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BreadcrumbRouterService>;
}
