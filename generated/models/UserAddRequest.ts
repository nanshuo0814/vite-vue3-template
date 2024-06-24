/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 用户添加信息Request
 */
export type UserAddRequest = {
    /**
     * 账号
     */
    userAccount: string;
    /**
     * 用户头像
     */
    userAvatar?: string;
    /**
     * 邮箱
     */
    userEmail?: string;
    /**
     * 用户性别
     */
    userGender?: number;
    /**
     * 用户昵称
     */
    userName?: string;
    /**
     * 密码
     */
    userPassword?: string;
    /**
     * 用户简介
     */
    userProfile?: string;
    /**
     * 用户角色
     */
    userRole?: string;
};

