/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponse_int_ } from '../models/ApiResponse_int_';
import type { ApiResponse_Page_PostVO_ } from '../models/ApiResponse_Page_PostVO_';
import type { IdRequest } from '../models/IdRequest';
import type { PostFavourQueryRequest } from '../models/PostFavourQueryRequest';
import type { PostQueryRequest } from '../models/PostQueryRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostFavourControllerService {
    /**
     * 收藏/取消收藏
     * @param idRequest idRequest
     * @returns ApiResponse_int_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static doPostFavourUsingPost(
        idRequest: IdRequest,
    ): CancelablePromise<ApiResponse_int_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post_favour/',
            body: idRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 获取用户收藏的帖子
     * @param postFavourQueryRequest postFavourQueryRequest
     * @returns ApiResponse_Page_PostVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listFavourPostByPageUsingPost(
        postFavourQueryRequest: PostFavourQueryRequest,
    ): CancelablePromise<ApiResponse_Page_PostVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post_favour/list/page',
            body: postFavourQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 获取自己收藏的帖子
     * @param postQueryRequest postQueryRequest
     * @returns ApiResponse_Page_PostVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listMyFavourPostByPageUsingPost(
        postQueryRequest: PostQueryRequest,
    ): CancelablePromise<ApiResponse_Page_PostVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post_favour/my/list/page',
            body: postQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
