<template>
  <div>
    <div class="bread_crumbs" id="ProductUpdate">
      <span>商品管理&nbsp;<i class="present">--&nbsp;{{msg}}</i></span>
    </div>
    <div class="update_product">
      <div class="step">
        <el-steps :active="step_present" simple>
          <el-step title="选择商品分类标签" icon="el-icon-edit"></el-step>
          <el-step title="填写商品信息" icon="el-icon-upload"></el-step>
          <el-step title="上传商品图片" icon="el-icon-picture"></el-step>
          <el-step title="其他信息" icon="el-icon-picture"></el-step>
        </el-steps>
      </div>
      <div class="step_one" v-show="step_present==0" >
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>当前选择的商品标签类别是：</el-breadcrumb-item>
          <el-breadcrumb-item><strong style="color: #2FBC5E;">一级标签</strong></el-breadcrumb-item>
          <el-breadcrumb-item><strong style="color: #2FBC5E;">二级标签</strong></el-breadcrumb-item>
        </el-breadcrumb>
        <div style="width: 100%;text-align: center;margin-top: 20px">
          <div class="step_one_left">
            <header>请选择一级商品标签</header>
            <ul>
              <li @click="index=0" :class="{'active':index==0}">电子产品</li>
              <li @click="index=1" :class="{'active':index==1}">家具电器</li>
            </ul>
          </div>
          <span class="right_icon"><img src="/static/right.png"></span>
          <div class="step_one_right">
            <header>请选择二级商品标签</header>
            <ul>
              <li>电脑</li>
              <li>苹果手机</li>
            </ul>
            <ul v-if="false">
              <li>电饭煲</li>
              <li>电冰箱</li>
            </ul>
          </div>
          <div class="step_btn">
            <el-button :disabled="step_present==0">上一步</el-button>
            <el-button type="primary" @click="step_present=1"><a href="#ProductUpdate">下一步</a></el-button>
          </div>
        </div>
      </div>
      <div class="step_two" v-show="step_present==1" >
        <div class="step_two_top">
          <el-breadcrumb separator-class="el-icon-arrow-right" style="display: inline-block">
            <el-breadcrumb-item>商品分类<strong style="color: #2FBC5E;margin-left: 25px">一级标签</strong></el-breadcrumb-item>
            <el-breadcrumb-item><strong style="color: #2FBC5E;">二级标签</strong></el-breadcrumb-item>
          </el-breadcrumb>
          <span><i class="el-icon-edit-outline"></i></span>
        </div>
        <div class="step_two_input">
          <div>
            <span>商品名称</span><el-input placeholder="请输入商品名称"></el-input>
          </div>
          <div class="">
            <span>商品ID</span><el-input placeholder="请输入商品ID"></el-input><br>
            <div style="display: inline-block;width: 16%;padding-right: 25px;"></div>
            <div class=" remind">系统自动生成，商家可用此编号管理商品</div>
          </div>
          <div class="">
            <span>商品售价</span><el-input placeholder="请输入商品售价"></el-input>
          </div>
          <div class="">
            <span>商品成本价</span><el-input placeholder="请输入成本价"></el-input><br>
            <div style="display: inline-block;width: 16%;padding-right: 25px;"></div>
            <div class=" remind">商家自己管理计算成本利润，对普通买家不可见</div>
          </div>
          <div class="">
            <span>商品库存</span><el-input placeholder="请输入库存数量"></el-input>
          </div>
          <div class="">
            <span>库存警告</span><el-input placeholder="请输入库存警告数量"></el-input><br>
            <div style="display: inline-block;width: 16%;padding-right: 25px;"></div>
            <div class=" remind">设置最低库存预警值。当库存低于预警值时商家中心商品列表页库存列红字提醒，请填写0~255的数字，0为不预警。</div>
          </div>
          <div class="">
            <span>商品描述</span>
            <el-input type="textarea" :rows="3" placeholder="请输入商品描述" style="width: 40%;vertical-align: middle"></el-input>
          </div>
        </div>
        <div class="step_btn">
          <el-button @click="step_present=0"><a href="#ProductUpdate">上一步</a></el-button>
          <el-button type="primary" @click="step_present=2"><a href="#ProductUpdate">下一步</a></el-button>
        </div>
      </div>
      <div class="step_three" v-show="step_present==2">
        <div class="uploadImg">
          <div class="product_main_img">
            <span>上传商品主图</span>
            <el-upload
              class="avatar-uploader" style="display: inline-block"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <div class="img_link">
              <span>主图片外部链接</span><el-input placeholder="输入图片外部链接地址" size="small"></el-input><br/>
              <div></div>
              <div>外链地址必须带有http://格式</div>
            </div>
          </div>
          <div class="product_vice_img">
            <div>上传商品幅图</div>
            <div>
              <el-upload style="display: inline-block !important ;vertical-align: middle !important;"
                         action="https://jsonplaceholder.typicode.com/posts/"
                         list-type="picture-card">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </div>
          </div>
        </div>
        <div class="step_btn">
          <el-button @click="step_present=1"><a href="#ProductUpdate">上一步</a></el-button>
          <el-button type="primary" @click="step_present=3"><a href="#ProductUpdate">下一步</a></el-button>
        </div>
      </div>
      <div class="step_four" v-show="step_present==3">
        <div class="step_four_input">
          <div class="">
            <span>商品重量</span><el-input placeholder="请输入商品重量"></el-input><br>
            <div style="display: inline-block;width: 16%;padding-right: 25px;"></div>
            <div class=" remind">注意以kg作为单位</div>
          </div>
          <div class="">
            <span>是否免运费</span><el-switch v-model="carriage"></el-switch>
          </div>
          <div class="">
            <span>商品运费</span><el-input placeholder="请输入商品运费" :disabled="carriage"></el-input><br>
          </div>
          <div class="">
            <span>拼团优惠人数</span><el-input placeholder="请输入团购人数"></el-input><br>
            <div style="display: inline-block;width: 16%;padding-right: 25px;"></div>
            <div class=" remind">设置团购优惠的人数。当满足人数的时候普通买家能享受拼团优惠</div>
          </div>
          <div class="">
            <span>拼团优惠金额</span><el-input placeholder="团购优惠金额"></el-input><br>
            <div style="display: inline-block;width: 16%;padding-right: 25px;"></div>
            <div class=" remind">拼团完成时个人能优惠的金额</div>
          </div>
          <div class="">
            <span>拼团时效</span><el-input style="width: 10%"></el-input>
            <i style="padding-left: 5px;">小时</i><br>
            <div style="display: inline-block;width: 16%;padding-right: 25px;"></div>
            <div class=" remind">团长开团成功后开始倒计时，超过时效拼团将取消</div>
          </div>
          <!--<div class="">-->
            <!--<span>是否发放优惠券</span><el-switch v-model="coupon"></el-switch>-->
          <!--</div>-->
          <!--<div class="">-->
            <!--<span>商品运费</span><el-input placeholder="请输入商品运费" :disabled="carriage"></el-input><br>-->
          <!--</div>-->
        </div>
        <div class="step_btn">
          <el-button @click="step_present=2"><a href="#ProductUpdate">上一步</a></el-button>
          <el-button type="primary">立即上新</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
</style>
<script>
  export default {
    data() {
      return {
        msg: '商品上新',
        index:null,
        step_present:0,
        imageUrl: '/static/update_images.jpg',
        dialogImageUrl: '',
        dialogVisible: false,
        carriage:true,
        coupon:false
      }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
//        const isJPG = file.type === 'image/jpeg';
//        const isLt2M = file.size / 1024 / 1024 < 2;
//
//        if (!isJPG) {
//          this.$message.error('上传头像图片只能是 JPG 格式!');
//        }
//        if (!isLt2M) {
//          this.$message.error('上传头像图片大小不能超过 2MB!');
//        }
//        return isJPG && isLt2M;
      }
    }
  }
</script>
