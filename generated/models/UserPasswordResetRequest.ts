/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 用户密码重置Request
 */
export type UserPasswordResetRequest = {
    /**
     * 第二遍输入的密码
     */
    checkPassword: string;
    /**
     * 邮箱验证码
     */
    emailCaptcha: string;
    /**
     * 用户账号
     */
    userAccount: string;
    /**
     * 邮箱
     */
    userEmail: string;
    /**
     * 密码
     */
    userPassword: string;
};

