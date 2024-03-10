import * as i0 from "@angular/core";
export declare class PaginationComponent {
    /**
     * Set the alignment of pagination components.
     * @values 'start', 'center', 'end'
     */
    align: 'start' | 'center' | 'end' | '';
    /**
     * Size the component small or large.
     * @values 'sm', 'lg'
     */
    size?: 'sm' | 'lg';
    /**
     * Default role for pagination. [docs]
     * @type string
     * @default 'navigation'
     */
    role: string;
    get paginationClass(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginationComponent, "c-pagination", never, { "align": { "alias": "align"; "required": false; }; "size": { "alias": "size"; "required": false; }; "role": { "alias": "role"; "required": false; }; }, {}, never, ["*"], true, never>;
}
