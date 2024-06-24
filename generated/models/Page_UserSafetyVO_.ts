/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderItem } from './OrderItem';
import type { UserSafetyVO } from './UserSafetyVO';
export type Page_UserSafetyVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: Array<OrderItem>;
    pages?: number;
    records?: Array<UserSafetyVO>;
    searchCount?: boolean;
    size?: number;
    total?: number;
};

