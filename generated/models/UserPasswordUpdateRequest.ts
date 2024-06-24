/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 用户密码更新信息Request
 */
export type UserPasswordUpdateRequest = {
    /**
     * 第二遍输入的新密码
     */
    checkPassword: string;
    /**
     * 新密码
     */
    newPassword: string;
    /**
     * 原密码
     */
    oldPassword: string;
};

