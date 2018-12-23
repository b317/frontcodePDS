<template>
    <div>
      <!--位置-->
      <div class="authenticate-top" style="min-width: 1079px;">
        <span>您的位置：</span><span class="">
        <a class="" title="首页" href="#" target="_blank">首页</a>&gt;</span><span class="">
        <a class="" title="商家认证" href="#" style="color: #f65d29;font-weight: bolder;">商家认证</a></span>
        <div class="trade-detail-hotline" style="float: right;">
          <span>服务热线：</span><em><span class="ui-trade-label ">0000 000 000</span></em>
        </div>
      </div>
      <!--步骤-->
      <div class="authenticate-step">
        <!--<el-steps :active="1" finish-status="success" simple style="margin-top: 20px">-->
          <!--<el-step title="完善商家信息" ></el-step>-->
          <!--<el-step title="填写商铺信息" ></el-step>-->
          <!--<el-step title="完成商家认证" ></el-step>-->
          <!--<el-step title="进入商家后台" ></el-step>-->
        <!--</el-steps>-->
      </div>
      <!--内容-->
      <div class="authenticate-main" style="">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="商铺图标">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="商铺名称">
            <el-input v-model="form.shopName" style="width: 380px;"></el-input>
            <div class="span-alert" style="display: inline">
              <div class="fr-alert" :class="isClass" index="0">
                <i :class="iconAlert"></i><span style="padding-left: 8px;">{{errorTXT.errrorName}}</span>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="负责人">
            <el-input v-model="form.realName" :disabled="true" style="width: 380px;"></el-input>
          </el-form-item>
          <el-form-item label="身份证码">
            <el-input v-model="form.shopperID" style="width: 380px;"></el-input>
            <div class="span-alert" style="display: inline">
              <div class="fr-alert" :class="isClass" index="1">
                <i :class="iconAlert"></i><span style="padding-left: 8px;">{{errorTXT.errrorSID}}</span>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="营业执照">
            <el-input v-model="form.licenseID" style="width: 380px;"></el-input>
            <div class="span-alert" style="display: inline">
              <div class="fr-alert" :class="isClass" index="2">
                <i :class="iconAlert"></i><span style="padding-left: 8px;">{{errorTXT.errrorLID}}</span>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="商铺QQ">
            <el-input v-model="form.numberQQ" style="width: 380px;"></el-input>
            <div class="span-alert" style="display: inline">
              <div class="fr-alert" :class="isClass" index="3">
                <i :class="iconAlert"></i><span style="padding-left: 8px;">{{errorTXT.errrorQQ}}</span>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="商铺电话">
            <el-input v-model="form.shopPhone" style="width: 380px;"></el-input>
            <div class="span-alert" style="display: inline">
              <div class="fr-alert" :class="isClass" index="4">
                <i :class="iconAlert"></i><span style="padding-left: 8px;">{{errorTXT.errrorPhone}}</span>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="商铺地址">
            <v-distpicker @selected="selected" style="width: 380px;display: inline-block;"></v-distpicker>
          </el-form-item>
          <el-form-item label="商铺简介">
            <el-input type="textarea" v-model="form.textarea" style="width: 380px;" :rows="3" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="申请时间">
            <span style="margin-left: 5px">{{NOWTIME}}</span>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">申请认证</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          msg: 'hello world',
          imageUrl: '',
          form:{
            shopName: '',
            realName: '',
            shopperID: '',
            licenseID: '',
            numberQQ: '',
            shopPhone: '',
            textarea: '',
          },
          authTime: '',
          NOWTIME: '',
          iconAlert: '',
          isClass: '',
          indexAlert:'',
          isAlert: false,
          errorTXT:{
            errorName: '',
            errorSID: '',
            errorLID: '',
            errorQQ: '',
            errorPhone: '',
          },
        }
      },
      methods: {
        onSubmit() {
          console.log('submit!');
          this.leaveInput();
        },
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg' || 'image/png';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        },
        selected(e) {
          this.address = `${e.province.value}/${e.city.value}/${e.area.value}`
          console.log(this.address)
        },
        // 获取当前时间函数
        timeFormate(timeStamp) {
          let year = new Date(timeStamp).getFullYear();
          let month = new Date(timeStamp).getMonth() + 1 < 10 ? "0" + (new Date(timeStamp).getMonth() + 1) : new Date(timeStamp).getMonth() + 1;
          let date = new Date(timeStamp).getDate() < 10 ? "0" + new Date(timeStamp).getDate() : new Date(timeStamp).getDate();
          let hh = new Date(timeStamp).getHours() < 10 ? "0" + new Date(timeStamp).getHours() : new Date(timeStamp).getHours();
          let mm = new Date(timeStamp).getMinutes() < 10 ? "0" + new Date(timeStamp).getMinutes() : new Date(timeStamp).getMinutes();
           let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
          this.NOWTIME = year + "-" + month + "-" + date + " " + hh + ":" + mm+ ":" + ss;
//          console.log(this.NOWTIME);
        },
        // 定时器函数
        nowTimes() {
          this.timeFormate(new Date());
          setInterval(this.nowTimes, 1000);
        },
        booleanAlert(boolean){
          if(boolean==true){
            this.isAlert= true;
            this.isClass='success';
            this.iconAlert='el-icon-success';
          }
          if(boolean==false){
            this.isAlert= false;
            this.isClass='error';
            this.iconAlert='el-icon-error';
          }
        },
        leaveInput(){
          if (!this.form.shopName){
            this.booleanAlert(false);
            this.errorTXT.errrorName="请输入商铺名称(必填)"
          }
          if (!this.form.shopperID){
            this.booleanAlert(false);
            this.errorTXT.errrorSID="请输入身份证码(必填)"
          }
          if (!this.form.licenseID){
            this.booleanAlert(false);
            this.errorTXT.errrorLID="请输入营业执照号(必填)"
          }
          if (!this.form.numberQQ){
            this.booleanAlert(false);
            this.errorTXT.errrorQQ="请输入商铺QQ(必填)"
          }
          if (!this.form.shopPhone){
            this.booleanAlert(false);
            this.errorTXT.errrorPhone="请输入商铺客服电话(必填)"
          }else{
            this.booleanAlert(true);
            this.errorTXT.errrorPhone="商铺客服电话输入正确"
          }
        },
      },
      // 创建完成时
      created() {
        this.nowTimes();
      },
      // 挂载完成时
      mounted() {
        this.nowTimes();
      }
    }
</script>
<style scoped>
  .authenticate-top,.authenticate-top a{font-size: 14px;color: #666;}
  .authenticate-top a:hover{color: #f65d29;}
  .authenticate-top{margin-bottom: 15px;padding-top: 10px;border-top: 1px solid #ccc;}
  ul{margin: 0;padding: 0}
  ul,li{list-style: none;}
  /*商标*/
  .avatar-uploader{
    border: 1px dashed #d9d9d9;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 64px;
    height: 64px;
  }
  .avatar-uploader:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 18px;
    color: #8c939d;
    width: 64px;
    height: 64px;
    line-height: 64px;
    text-align: center;
  }
  .avatar {
    width: 64px;
    height: 64px;
    display: block;
  }
  /* 内容 */

  /* 提示 */
  .fr-alert{
    width: 100%;
    padding: 8px 16px;
    margin: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 4px;
    position: relative;
    background-color: #fff;
    overflow: hidden;
    opacity: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: opacity .2s;
    transition: opacity .2s;
  }

  .fr-alert{
    background-color: #fef0f0;
    color: #f56c6c;
    display: none;
  }
  .fr-alert.error{
    background-color: #fef0f0;
    color: #f56c6c;
    display: inline;
  }
  .fr-alert.success{
    background-color: #f0f9eb;
    color: #67c23a;
    display: inline;
  }
</style>
