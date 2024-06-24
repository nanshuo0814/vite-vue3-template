/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponse_Map_string_string_ } from '../models/ApiResponse_Map_string_string_';
import type { ApiResponse_string_ } from '../models/ApiResponse_string_';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CaptchaControllerService {
    /**
     * 获取图片验证码
     * @returns ApiResponse_Map_string_string_ OK
     * @throws ApiError
     */
    public static getImageCaptchaUsingGet(): CancelablePromise<ApiResponse_Map_string_string_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/captcha/getImageCaptcha',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * 发送电子邮件验证码
     * @param email 目标电子邮件
     * @param emailCaptchaType 邮箱类型
     * @returns ApiResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static sendEmailCaptchaUsingPost(
        email: string,
        emailCaptchaType: string,
    ): CancelablePromise<ApiResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/captcha/sendEmailCaptcha',
            query: {
                'email': email,
                'emailCaptchaType': emailCaptchaType,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
