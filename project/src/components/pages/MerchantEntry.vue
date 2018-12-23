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
        <el-form ref="form" :model="form" :rules="addFormRules"  label-width="80px">
          <el-form-item label="商铺图标">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="商铺名称" prop="shopName">
            <el-input v-model="form.shopName" style="width: 380px;"></el-input>
          </el-form-item>
          <el-form-item label="身份证码" prop="shopperID">
            <el-input v-model="form.shopperID" style="width: 380px;"></el-input>
          </el-form-item>
          <el-form-item label="营业执照" prop="licenseID">
            <el-input v-model="form.licenseID" style="width: 380px;"></el-input>
          </el-form-item>
          <el-form-item label="商铺QQ" prop="numberQQ">
            <el-input v-model="form.numberQQ" style="width: 380px;"></el-input>
          </el-form-item>
          <el-form-item label="商铺电话" prop="shopPhone">
            <el-input v-model="form.shopPhone" style="width: 380px;"></el-input>
          </el-form-item>
          <el-form-item label="商铺地址" prop="address">
            <v-distpicker @selected="selected" style="width: 380px;display: inline-block;"></v-distpicker>
          </el-form-item>
          <el-form-item label="商铺简介">
            <el-input type="textarea" v-model="form.shopIntro" style="width: 380px;" :rows="3" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="申请时间">
            <span style="margin-left: 5px">{{NOWTIME}}</span>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" v-if="isSubmit==true">申请认证</el-button>
            <el-button type="primary" :loading="true" v-if="isSubmit==false">在审核中...</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>
<script>
  import {getCookie} from '@/util/auth';
  import {isPhone, isIdNo} from '../../store/validate'; //导入验证规则
    export default {
      data() {
        return {
          msg: 'hello world',
          form:{
            imageUrl: '',
            shopName: '',
            realName: '',
            shopperID: '',
            licenseID: '',
            numberQQ: '',
            shopPhone: '',
            address: '',
            shopIntro: '',
          },
          authTime: '',
          NOWTIME: '',
          formData: '', //提交数据暂存
          addFormRules: {
            shopName: [
              {required: true, message: '请输入商家名称', trigger: 'blur'}
            ],
            shopperID: [
              { required: true, message: '请输入身份证号', trigger: 'blur'},
              {validator: isIdNo, trigger: 'blur'}
            ],
            licenseID: [
              {required: true, message: '请输入营业执照号', trigger: 'blur'}
            ],
            numberQQ: [
              {required: true, message: '请输入商铺QQ', trigger: 'blur'}
            ],
            shopPhone: [
              {required: true, message: '请输入商铺客服电话', trigger: 'blur'},
              {validator: isPhone, trigger: 'blur' }
            ],
            address: [
              {required: true, message: '请选择商铺地址', trigger: 'blur'},
            ],
          }, //验证
          isSubmit: true,
        }
      },
      methods: {
        //提交认证
        onSubmit() {
          if(this.imageUrl!=''&&this.form.shopName!=''&&this.form.shopperID!=''&&this.form.licenseID!=''
            &&this.form.numberQQ!=''&&this.form.shopPhone!=''&&this.form.address!=''){
            this.formData.append("shop_name",this.form.shopName);
            this.formData.append("shop_phone",this.form.shopPhone);
            this.formData.append("shop_cert",this.form.licenseID);
            this.formData.append("shop_qq",this.form.numberQQ);
            this.formData.append("shop_intro",this.form.shopIntro);
            this.formData.append("shop_addr",this.form.address);
            this.formData.append("owner_cert",this.form.shopperID);
            this.$confirm('确定提交申请吗？', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$http.post('/v1/user/merchant/',this.formData,{
                headers:{
                  "Authorization":"Bearer "+ getCookie("token"),
                  'Content-Type': 'multipart/form-data'
                }
              });
              this.$message({
                type: 'success',
                message: '申请提交成功!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消申请'
              });
            });
            this.isSubmit = false;
          }else{
            this.$message.error('错了哦，信息输入有误哦，请重新检查！');
            this.isSubmit = true;
          }
        },
        //商标
        handleAvatarSuccess(res, file) {
          this.form.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
          let windowURL = window.URL || window.webkitURL;
          console.log(windowURL.createObjectURL(file));
          this.form.imageUrl= windowURL.createObjectURL(file);
          this.formData.append('shop_logo',file);
          return false;
        },
        //地址
        selected(e) {
          this.form.address = `${e.province.value}${e.city.value}${e.area.value}`;
          console.log(this.form.address);
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
      },
      // 创建完成时
      created() {
        this.nowTimes();
      },
      // 挂载完成时
      mounted() {
        this.nowTimes();
        this.formData = new FormData();
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
</style>
