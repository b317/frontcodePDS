<template>
    <div class="container">
      <div class="fontwarn" :class="{ 'Invisible': showWarn }" >注:真实姓名即收货人姓名，请谨慎填写<i class="el-icon-close warn-icon"  @click="wIconClick"></i></div>
      <div class="form-group">
        <div class="pic-group">
          <div class="input-font picfont">用户头像</div>
          <el-upload
            class="avatar-uploader"
            action=""
            :show-file-list="false"
            :http-request="beforeAvatarUpload"
            >
            <img v-if="imageUrl" :src="src" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <el-button class="picbtn" size="small" type="primary">点击上传</el-button>
          </el-upload>
        </div>
        <div class="input-group"><div class="input-font">用户昵称</div><input  v-model="nickname"/></div>
        <div class="input-group"><div class="input-font">真实姓名</div><input  v-model="name"/><div class="warn">{{msg1}}</div></div>
        <div class="input-group"><div class="input-font">绑定手机</div><input readonly class="readonly" v-model="phone"/></div>
        <!-- <div class="input-group"><div class="input-font bday-font">用户生日</div>
          <el-date-picker
            v-model="bDay"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div> -->
        <button @click="clickbtn">保存</button>
      </div>
    </div>
</template>

<script>
import {updateUser,getUserInfo,upuserpic} from "@/api/http";
import { mapState,mapGetters,mapMutations } from 'vuex'
import {getId,getName,setName} from "@/util/auth";

export default {

  mounted() {
    getUserInfo({id:getId()}).then(res => {
      let data = res.data.data
      this.nickname = data.username
      if(data.nick_name != ""){
        this.nickname = data.nick_name
      }
      this.name = data.name
      this.phone = data.username
    })
  },
  data () {
    return {
        imageUrl:"",
        pic:"",
        nickname:"",
        name:"",
        bDay:"",
        phone:"10086",
        msg1:"",
        canS:false,
        showWarn:false,
        headPicSuccess:false
    }
  },
  computed:{
    url(){
      return "/v1/user/upload/"+getId()
    },
    ...mapGetters({
      src:'user/headpic',
      username:'user/username',
    }),
  },
  methods:{
    ...mapMutations({
      setuserName:'user/setUserName', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      setpic:'user/setpic'
    }),
     wIconClick(){
      this.showWarn = true
    },
    handleAvatarSuccess(res, file) {
      console.log(file)
      if(this.headPicSuccess){
        this.imageUrl = URL.createObjectURL(file.raw);
      }
    },
    beforeAvatarUpload(file) {
      let commit = new FormData()
      commit.append("file",file.file)
      console.log(file.file)
      upuserpic(getId(),commit).then(res=>{
        this.setpic("http://134.175.113.58/"+res.data.data.head_image)
        this.imageUrl = "http://134.175.113.58/"+res.data.data.head_image
      })
    },
    clickbtn(){
      if(!this.name){
        this.msg1 = "必填信息"
        return
      }else{
        this.msg1 = ""
      }
      let commit = new FormData()
      commit.append("nick_name",this.nickname)
      commit.append("name",this.name)
      updateUser(
        getId(),
        commit
      ).then(res => {
        if(res.data.code == 0){
          this.setuserName(this.nickname)
          this.$message({
							message: '修改成功',
							type: 'success'
						});
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../css/set.scss';
.Invisible{
  visibility: hidden;
}
.container{
  height: 300px;
  position: relative;
}
.bday-font{
  height: 29px !important;
  line-height: 29px !important;
}
.pic-group{
  display: flex;
  flex: row;
  height: 60px !important;
  font-size: 13px;
  margin-top: 10px;
  .picfont{
    height: 60px !important;
    line-height: 60px !important;
    margin-left: 10%;
    margin-right: 5px;
  }
  .picbtn{
    position: absolute;
    top: 50px;
    left: 0px;
  }
}
.blue{
  height: 60px !important;
  line-height: 60px !important;
}

.avatar-uploader .el-upload {
  width: 20% !important;
  height: 60px !important;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    border-radius: 50%;
    text-align: center;
  }
  .avatar {
    width: 60px;
    border-radius: 50%;
    height: 60px;
    display: block;
  }
</style>
