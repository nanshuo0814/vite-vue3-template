/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponse_int_ } from '../models/ApiResponse_int_';
import type { PostThumbAddRequest } from '../models/PostThumbAddRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostThumbControllerService {
    /**
     * 点赞/取消点赞
     * @param postThumbAddRequest postThumbAddRequest
     * @returns ApiResponse_int_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static doThumbUsingPost(
        postThumbAddRequest: PostThumbAddRequest,
    ): CancelablePromise<ApiResponse_int_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post_thumb/',
            body: postThumbAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
