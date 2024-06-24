/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponse_boolean_ } from '../models/ApiResponse_boolean_';
import type { ApiResponse_long_ } from '../models/ApiResponse_long_';
import type { ApiResponse_Page_Post_ } from '../models/ApiResponse_Page_Post_';
import type { ApiResponse_Page_PostVO_ } from '../models/ApiResponse_Page_PostVO_';
import type { ApiResponse_PostVO_ } from '../models/ApiResponse_PostVO_';
import type { IdRequest } from '../models/IdRequest';
import type { PostAddRequest } from '../models/PostAddRequest';
import type { PostEditRequest } from '../models/PostEditRequest';
import type { PostQueryRequest } from '../models/PostQueryRequest';
import type { PostUpdateRequest } from '../models/PostUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostControllerService {
    /**
     * 添加帖子
     * @param postAddRequest postAddRequest
     * @returns ApiResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addPostUsingPost(
        postAddRequest: PostAddRequest,
    ): CancelablePromise<ApiResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/add',
            body: postAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 删除帖子
     * @param idRequest idRequest
     * @returns ApiResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deletePostUsingPost(
        idRequest: IdRequest,
    ): CancelablePromise<ApiResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/delete',
            body: idRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 编辑帖子
     * @param postEditRequest postEditRequest
     * @returns ApiResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static editPostUsingPost(
        postEditRequest: PostEditRequest,
    ): CancelablePromise<ApiResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/edit',
            body: postEditRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 根据 id 获取
     * @param id
     * @returns ApiResponse_PostVO_ OK
     * @throws ApiError
     */
    public static getPostVoByIdUsingGet(
        id?: number,
    ): CancelablePromise<ApiResponse_PostVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/post/get/vo',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 分页获取列表（仅管理员）
     * @param postQueryRequest postQueryRequest
     * @returns ApiResponse_Page_Post_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listPostByPageUsingPost(
        postQueryRequest: PostQueryRequest,
    ): CancelablePromise<ApiResponse_Page_Post_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/list/page',
            body: postQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 分页获取列表（封装类）
     * @param postQueryRequest postQueryRequest
     * @returns ApiResponse_Page_PostVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listPostVoByPageUsingPost(
        postQueryRequest: PostQueryRequest,
    ): CancelablePromise<ApiResponse_Page_PostVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/list/page/vo',
            body: postQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 分页获取用户创建的帖子
     * @param postQueryRequest postQueryRequest
     * @returns ApiResponse_Page_PostVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listMyPostVoByPageUsingPost(
        postQueryRequest: PostQueryRequest,
    ): CancelablePromise<ApiResponse_Page_PostVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/my/list/page/vo',
            body: postQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 分页搜索帖子
     * @param postQueryRequest postQueryRequest
     * @returns ApiResponse_Page_PostVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static searchPostVoByPageUsingPost(
        postQueryRequest: PostQueryRequest,
    ): CancelablePromise<ApiResponse_Page_PostVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/search/page/vo',
            body: postQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 更新帖子（仅管理员）
     * @param postUpdateRequest postUpdateRequest
     * @returns ApiResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updatePostUsingPost(
        postUpdateRequest: PostUpdateRequest,
    ): CancelablePromise<ApiResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post/update',
            body: postUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
