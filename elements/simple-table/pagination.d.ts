import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { NovoSimplePaginationEvent } from './interfaces';
import { NovoLabelService } from '../../services/novo-label-service';
import { NovoActivityTableState } from './state';
export declare class NovoSimpleTablePagination implements OnInit, OnDestroy {
    private changeDetectorRef;
    labels: NovoLabelService;
    private state;
    private _initialized;
    page: number;
    _page: number;
    length: number;
    _length: number;
    pageSize: number;
    private _pageSize;
    pageSizeOptions: number[];
    private _pageSizeOptions;
    pageChange: EventEmitter<NovoSimplePaginationEvent>;
    displayedPageSizeOptions: number[];
    longRangeLabel: string;
    shortRangeLabel: string;
    private resetSubscription;
    constructor(changeDetectorRef: ChangeDetectorRef, labels: NovoLabelService, state: NovoActivityTableState);
    ngOnInit(): void;
    ngOnDestroy(): void;
    nextPage(): void;
    previousPage(): void;
    hasPreviousPage(): boolean;
    hasNextPage(): boolean;
    changePageSize(pageSize: number): void;
    private updateDisplayedPageSizeOptions();
    private emitPageEvent();
}