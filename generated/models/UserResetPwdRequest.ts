/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 用户重置密码Request
 */
export type UserResetPwdRequest = {
    /**
     * 确认密码
     */
    confirmPassword: string;
    /**
     * 邮箱
     */
    email: string;
    /**
     * 新密码
     */
    newPassword: string;
    /**
     * 校验邮箱验证码成功的凭证
     */
    voucher: string;
};

