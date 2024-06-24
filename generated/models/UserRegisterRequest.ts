/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 用户注册信息Request
 */
export type UserRegisterRequest = {
    /**
     * 第二遍输入的密码
     */
    checkPassword: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 邮箱验证码
     */
    emailCaptcha?: string;
    /**
     * 图片验证码
     */
    imageCaptcha?: string;
    /**
     * 图片验证码key
     */
    imageCaptchaKey?: string;
    /**
     * 账号
     */
    userAccount: string;
    /**
     * 用户名
     */
    userName: string;
    /**
     * 密码
     */
    userPassword: string;
};

