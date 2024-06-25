/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponse_boolean_ } from '../models/ApiResponse_boolean_';
import type { ApiResponse_int_ } from '../models/ApiResponse_int_';
import type { ApiResponse_long_ } from '../models/ApiResponse_long_';
import type { ApiResponse_Page_User_ } from '../models/ApiResponse_Page_User_';
import type { ApiResponse_Page_UserSafetyVO_ } from '../models/ApiResponse_Page_UserSafetyVO_';
import type { ApiResponse_string_ } from '../models/ApiResponse_string_';
import type { ApiResponse_User_ } from '../models/ApiResponse_User_';
import type { ApiResponse_UserLoginVO_ } from '../models/ApiResponse_UserLoginVO_';
import type { IdRequest } from '../models/IdRequest';
import type { UserAddRequest } from '../models/UserAddRequest';
import type { UserLoginRequest } from '../models/UserLoginRequest';
import type { UserPasswordResetRequest } from '../models/UserPasswordResetRequest';
import type { UserPasswordUpdateRequest } from '../models/UserPasswordUpdateRequest';
import type { UserQueryRequest } from '../models/UserQueryRequest';
import type { UserRegisterRequest } from '../models/UserRegisterRequest';
import type { UserResetPwdRequest } from '../models/UserResetPwdRequest';
import type { UserUpdateRequest } from '../models/UserUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserControllerService {
    /**
     * 添加用户
     * @param userAddRequest userAddRequest
     * @returns ApiResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addUserUsingPost(
        userAddRequest: UserAddRequest,
    ): CancelablePromise<ApiResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/add',
            body: userAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 用户通过邮箱验证码重置密码
     * @param userResetPwdRequest userResetPwdRequest
     * @returns ApiResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userResetPwdByEmailUsingPost(
        userResetPwdRequest: UserResetPwdRequest,
    ): CancelablePromise<ApiResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/by-email/reset-pwd',
            body: userResetPwdRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 删除用户
     * @param idRequest idRequest
     * @returns ApiResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteUserUsingPost(
        idRequest: IdRequest,
    ): CancelablePromise<ApiResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/delete',
            body: idRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 按id获取用户
     * @param id
     * @returns ApiResponse_User_ OK
     * @throws ApiError
     */
    public static getUserByIdUsingGet(
        id?: number,
    ): CancelablePromise<ApiResponse_User_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/get',
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
     * 获取当前登录用户
     * @returns ApiResponse_UserLoginVO_ OK
     * @throws ApiError
     */
    public static getLoginUserUsingGet(): CancelablePromise<ApiResponse_UserLoginVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/get/login',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 获取用户列表Page
     * @param userQueryRequest userQueryRequest
     * @returns ApiResponse_Page_User_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listUserByPageUsingPost(
        userQueryRequest: UserQueryRequest,
    ): CancelablePromise<ApiResponse_Page_User_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/list/page',
            body: userQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 按页面获取用户vo列表(脱敏)
     * @param userQueryRequest userQueryRequest
     * @returns ApiResponse_Page_UserSafetyVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static getUserVoListByPageUsingPost(
        userQueryRequest: UserQueryRequest,
    ): CancelablePromise<ApiResponse_Page_UserSafetyVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/list/page/vo',
            body: userQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 用户登录
     * @param userLoginRequest userLoginRequest
     * @returns ApiResponse_UserLoginVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userLoginUsingPost(
        userLoginRequest: UserLoginRequest,
    ): CancelablePromise<ApiResponse_UserLoginVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/login',
            body: userLoginRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 用户微信登录
     * @param code code
     * @returns ApiResponse_UserLoginVO_ OK
     * @throws ApiError
     */
    public static userLoginByWxOpenUsingGet(
        code: string,
    ): CancelablePromise<ApiResponse_UserLoginVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/login/wx_open',
            query: {
                'code': code,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 用户注销
     * @returns ApiResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userLogoutUsingPost(): CancelablePromise<ApiResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/logout',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 重置用户密码(管理员)
     * @param idRequest idRequest
     * @returns ApiResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userPasswordResetByAdminUsingPost(
        idRequest: IdRequest,
    ): CancelablePromise<ApiResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/pwd/reset',
            body: idRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 用户密码重置(邮箱验证码)
     * @param userPasswordResetRequest userPasswordResetRequest
     * @returns ApiResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userPasswordResetByEmailUsingPost(
        userPasswordResetRequest: UserPasswordResetRequest,
    ): CancelablePromise<ApiResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/pwd/reset/email',
            body: userPasswordResetRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 修改用户密码
     * @param userPasswordUpdateRequest userPasswordUpdateRequest
     * @returns ApiResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userPasswordUpdateByMyselfUsingPost(
        userPasswordUpdateRequest: UserPasswordUpdateRequest,
    ): CancelablePromise<ApiResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/pwd/update',
            body: userPasswordUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 用户注册
     * @param userRegisterRequest userRegisterRequest
     * @returns ApiResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userRegisterUsingPost(
        userRegisterRequest: UserRegisterRequest,
    ): CancelablePromise<ApiResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/register',
            body: userRegisterRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 修改用户信息
     * @param userUpdateRequest userUpdateRequest
     * @returns ApiResponse_int_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateUserUsingPost(
        userUpdateRequest: UserUpdateRequest,
    ): CancelablePromise<ApiResponse_int_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/update',
            body: userUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
