/* 是否手机号码*/
export function isPhone(rule, value,callback) {
  const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
  console.log('isPhone:value='+value);
  if (value == '' || value == undefined || value == null) {
    return callback(new Error('商铺客服电话不能为空'));
  }
  if(reg.test(value)){
    return callback();
  }
  return callback(new Error('请输入正确的电话号码'));
}


/* 是否身份证号码*/
export function isIdNo(rule, value,callback) {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  console.log('isIdNo:value='+value);
  if(value==''||value==undefined||value==null){
    callback();
  }else {
    if ((!reg.test(value)) && value != '') {
      callback(new Error('请输入正确的身份证号码'));
    } else {
      callback();
    }
  }
}
