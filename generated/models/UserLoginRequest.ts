/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 用户登录信息Request
 */
export type UserLoginRequest = {
    /**
     * 图片验证码key
     */
    captchaKey?: string;
    /**
     * 图片验证码
     */
    imageCaptcha?: string;
    /**
     * 账号
     */
    userAccount: string;
    /**
     * 密码
     */
    userPassword: string;
};

