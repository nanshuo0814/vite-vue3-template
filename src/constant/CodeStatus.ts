const CodeStatus = {
  // 注册验证码
  SUCCESS: 20000,
  // 重置密码验证码
  PARAMS_ERROR: 40000,
  // 请求参数为空
  PARAMS_NULL: 40001,
  // 请求参数长度不符合要求
  PARAMS_LENGTH_ERROR: 40002,
  //请求参数格式不符合要求
  PARAMS_FORMAT_ERROR: 40003,
  //请求参数值不符合要求
  PARAMS_VALUE_ERROR: 40004,
  //未登录
  NOT_LOGIN_ERROR: 40100,
  //无权限
  NO_AUTH_ERROR: 40101,
  //请求数据不存在
  NOT_FOUND_ERROR: 40400,
  //禁止访问
  FORBIDDEN_ERROR: 40300,
  //系统内部异常
  SYSTEM_ERROR: 50000,
  //操作失败
  OPERATION_ERROR: 50001
}
export default CodeStatus
