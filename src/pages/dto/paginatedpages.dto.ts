import { Page } from "../entities/page.entity";

export class PaginatedPages{
    docs?: Array<Page>;

    totalDocs?: number;

    limit?: number;

    hasPrevPage?: boolean;

    hasNextPage?: boolean;

    page?: number;

    totalPages?: number;

    offset?: number;

    prevPage?: number;

    nextPage?: number;

    pagingCounter?: number;

    meta?: Record<string, unknown>;
}