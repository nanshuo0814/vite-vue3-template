/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 用户实体类
 */
export type User = {
    /**
     * 创建时间
     */
    createTime?: string;
    /**
     * 用户ID
     */
    id?: number;
    /**
     * 是否删除，0:默认，1:删除
     */
    isDelete?: number;
    /**
     * 公众号openId
     */
    mpOpenId?: string;
    /**
     * 开放平台id
     */
    unionId?: string;
    /**
     * 更新时间
     */
    updateTime?: string;
    /**
     * 用户账号
     */
    userAccount?: string;
    /**
     * 用户头像
     */
    userAvatar?: string;
    /**
     * 邮箱
     */
    userEmail?: string;
    /**
     * 0-女，1-男，2-未知
     */
    userGender?: number;
    /**
     * 用户昵称
     */
    userName?: string;
    /**
     * 用户密码
     */
    userPassword?: string;
    /**
     * 用户简介
     */
    userProfile?: string;
    /**
     * 用户角色：user/admin/ban
     */
    userRole?: string;
};

