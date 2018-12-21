<template>
  <div class="product_sort">
    <div class="bread_crumbs">
      <span>
        商品管理&nbsp;<i :class="[$route.query.add_label || $route.query.check_next ? '':'present']">--&nbsp;商品分类</i>
        <i v-if="$route.query.add_label==0" class="present">&nbsp;--&nbsp;添加分类</i>
        <i v-if="$route.query.add_label>0" class="present">&nbsp;--&nbsp;添加二级分类</i>
        <i v-if="$route.query.check_next" class="present">&nbsp;--&nbsp;商品二级分类</i>
      </span>
    </div>
    <div class="sort_list" v-if="$route.query.add_label==null && $route.query.check_next==null">
      <div><el-button size="small" @click="addLabel"><i class="el-icon-plus"></i>添加分类标签</el-button></div>
      <table>
        <thead>
        <tr>
          <th class="">所属级别</th>
          <th class="">分类标签名称</th>
          <th class="">下级标签数量</th>
          <th class="">商品总数量</th>
          <th>设置</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) of sortlist">
          <td><i v-show="item.isLevelOne">Level one</i></td>
          <td>{{item.levelOneLabel}}</td>
          <td>{{item.LevelTwoLabel.length}}</td>
          <td>{{allProductNumArray[index]}}</td>
          <td>
            <div style="margin-bottom: 8px">
              <el-button type="primary" size="mini" @click="checkNextLevel(item,index)">查看下一级</el-button>
            </div>
            <div><el-button type="info" size="mini" @click="addNextLevel(item,index)">添加下一级</el-button></div>
          </td>
          <td>
            <div style="margin-bottom: 8px">
              <el-button type="success" size="mini">修改<i class="el-icon-edit"></i></el-button>
            </div>
            <div>
              <el-button size="mini">删除<i class="el-icon-delete"></i></el-button>
            </div>
          </td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="24" v-if="totalProduct==0 || noneProduct">
            <el-alert
              style="width: 100%"
              title="当前没有数据"
              type="info"
              center
              :closable="false"
              show-icon>
            </el-alert>
          </td>
        </tr>
        </tfoot>
      </table>
      <div style="margin-bottom: 50px">
        <el-pagination
        background
        layout="prev, pager, next"
        :total="totalProduct"
        :page-size="limit"
        @current-change="pageChange"
        @prev-click="preClick"
        @next-click="nextClick"
        v-if="showPading"
        >
        </el-pagination>
      </div>
    </div>
    <div v-if="$route.query.add_label>=0" class="add_label">
      <div><el-button size="small" @click="$router.push('/ProductSort')"><img src="/static/back.png"></img>返回商品分类</el-button></div>
      <el-form :model="ruleForm" ref="ruleForm" label-width="150px" class="demo-ruleForm">
        <!--<el-form-item label="新增一级标签" prop="addLevelOne">-->
          <!--<el-input v-model="ruleForm.addLevelOne" placeholder="请输入新增标签名称"-->
                    <!--class="input-with-select" style="width: 40%" :disabled="$route.query.add_label>0">-->
          <!--</el-input><span class="caution">*(如已有需要的一级标签，无需再添加)</span>-->
        <!--</el-form-item>-->
        <el-form-item label="一级商品标签" prop="LevelOneLabel" required>
          <el-select v-model="ruleForm.LevelOneLabel" clearable  placeholder="选择一级标签">
            <el-option label="电子产品" value="生活用品"></el-option>
            <el-option label="家具电器" value="家具电器"></el-option>
            <el-option label="零食" value="零食"></el-option>
            <el-option label="服装衣服" value="服装衣服"></el-option>
            <el-option label="学习提升" value="学习提升"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="查看二级商品标签" prop="LevelTwoLabel">
          <el-select v-model="ruleForm.LevelTwoLabel" clearable placeholder="查看二级标签">
            <el-option disabled label="生活用品" value="生活用品"></el-option>
            <el-option disabled label="家具电器" value="家具电器"></el-option>
            <el-option disabled label="零食" value="零食"></el-option>
            <el-option disabled label="服装衣服" value="服装衣服"></el-option>
            <el-option disabled label="学习提升" value="学习提升"></el-option>
          </el-select><span class="caution">*(可查看一级标签下有哪些已经存在的二级标签)</span>
        </el-form-item>
        <el-form-item label="新增二级标签" prop="addLevelTwo">
          <el-input placeholder="请输入新增标签名称" v-model="ruleForm.addLevelTwo" class="input-with-select"  style="width: 40%">
          </el-input><span  class="caution">*(如已有需要的二级标签，无需再添加)</span>
        </el-form-item>
        <el-form-item label="标签描述" prop="sortDesc">
          <el-input type="textarea" v-model="ruleForm.sortDesc" :rows="4" style="width: 40%;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="levelTwo" v-if="$route.query.check_next>=0">
      <div>
        <el-button size="small" @click="$router.push('/ProductSort')"><img src="/static/back.png"/>返回上一级</el-button>
        <el-button size="small" @click="addLabel"><i class="el-icon-plus"></i>添加分类标签</el-button>
      </div>
      <table>
        <thead>
        <tr>
          <th class="">所属级别</th>
          <th class="">分类标签名称</th>
          <th class="">所属上级标签</th>
          <th class="">商品总类别</th>
          <th class="">商品总数量</th>
          <th>查看商品</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Level two</td>
          <td>电饭煲</td>
          <td>家具电器</td>
          <td>5</td>
          <td>250</td>
          <td>
            <el-button type="primary" size="mini">查看</el-button>
          </td>
          <td>
            <div style="margin-bottom: 8px">
              <el-button type="success" size="mini">修改<i class="el-icon-edit"></i></el-button>
            </div>
            <div>
              <el-button size="mini">删除<i class="el-icon-delete"></i></el-button>
            </div>
          </td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="24" v-if="totalProduct==0 || noneProduct">
            <el-alert
              style="width: 100%"
              title="当前没有数据"
              type="info"
              center
              :closable="false"
              show-icon>
            </el-alert>
          </td>
          <td colspan="3"></td>
          <td colspan="9" style="position: relative">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalProduct"
              :pager-count="7"
              :page-size="limit"
              @current-change="pageChange"
              @prev-click="preClick"
              @next-click="nextClick"
              v-if="showPading"
            >
            </el-pagination>
          </td>
        </tr>
        </tfoot>
      </table>
    </div>
  </div>


</template>
<style>
  .add_btn:hover{
    color:#409EFF !important;
  }
  textarea{resize: none !important;}
</style>
<script>
  import {getCookie} from "@/common/auth";
  export default {
    data() {
      return {
        msg: '商品分类',
        add_label:null,
        allProductNumArray:[],
        totalProduct:100,
        page:1,
        limit:6,
        showPading:true,
        noneProduct:false,
        sortlist:[],
        datalist:[
          {
            isLevelOne:1,
            levelOneLabel:"电子产品",
            isLevelTwo:1,
            LevelTwoLabel:[
              {
                LevelTwoLabelId:'1000',
                LevelTwoLabelName:'电脑',
                productNum:100
              },
              {
                LevelTwoLabelId:'1001',
                LevelTwoLabelName:'手机',
                productNum:100
              },
              {
                LevelTwoLabelId:'1002',
                LevelTwoLabelName:'平板',
                productNum:100
              },
            ]
          },
          {
            isLevelOne:1,
            levelOneLabel:"家具电器",
            isLevelTwo:1,
            LevelTwoLabel:[
              {
                LevelTwoLabelId:'2000',
                LevelTwoLabelName:'电磁炉',
                productNum:100
              },
              {
                LevelTwoLabelId:'2001',
                LevelTwoLabelName:'电饭煲',
                productNum:50
              },
              {
                LevelTwoLabelId:'2002',
                LevelTwoLabelName:'平底锅',
                productNum:200
              },
              {
                LevelTwoLabelId:'2003',
                LevelTwoLabelName:'冰箱',
                productNum:100
              },
              {
                LevelTwoLabelId:'2004',
                LevelTwoLabelName:'烤箱',
                productNum:100
              }
            ]
          },
          {
            isLevelOne:1,
            levelOneLabel:"零食",
            isLevelTwo:1,
            LevelTwoLabel:[
              {
                LevelTwoLabelId:'3000',
                LevelTwoLabelName:'鸭脖',
                productNum:500
              },
              {
                LevelTwoLabelId:'3001',
                LevelTwoLabelName:'辣条',
                productNum:400
              }
            ]
          },
          {
            isLevelOne:1,
            levelOneLabel:"服装衣服",
            isLevelTwo:1,
            LevelTwoLabel:[
              {
                LevelTwoLabelId:'4000',
                LevelTwoLabelName:'裙子',
                productNum:100
              },
              {
                LevelTwoLabelId:'4001',
                LevelTwoLabelName:'风衣',
                productNum:200
              },
              {
                LevelTwoLabelId:'4002',
                LevelTwoLabelName:'夹克',
                productNum:100
              },
              {
                LevelTwoLabelId:'4003',
                LevelTwoLabelName:'牛仔裤',
                productNum:300
              }
            ]
          },
          {
            isLevelOne:1,
            levelOneLabel:"学习提升",
            isLevelTwo:1,
            LevelTwoLabel:[
              {
                LevelTwoLabelId:'5001',
                LevelTwoLabelName:'四六级英语',
                productNum:100
              },
              {
                LevelTwoLabelId:'5002',
                LevelTwoLabelName:'计算机语言',
                productNum:50
              }
              ,
              {
                LevelTwoLabelId:'5002',
                LevelTwoLabelName:'考研专题',
                productNum:80
              }
            ]
          },
        ],
        ruleForm: {
          LevelOneLabel: '',
          LevelTwoLabel: '',
          addLevelTwo: '',
          sortDesc: ''
        }
      }
    },
    mounted() {
      this.datalist.forEach((item)=>{
        var allProductNum=0;
        item.LevelTwoLabel.forEach((item1)=>{
          allProductNum+=item1.productNum;
        });
        this.allProductNumArray.push(allProductNum);
      });
      this.findAllMainSort({'offset':this.page,'limit':this.limit});
    },
    methods:{
      findAllMainSort(params){
        this.axios.get('/v1/merchant/mainsort/?offset='+params.offset+'&limit='+params.limit,{
          headers:{
            "Authorization":"Bearer "+ getCookie('token')
          }
        }).then((res)=>{
          let data =res.data.data;
          this.sortlist =data.categoryList;
        }).catch((err)=>{
          console.log(err)
        })
      },
      pageChange(val){
//        console.log(`当前页: ${val}`);
        this.page=val;
        this.findAllMainSort({'offset':this.page,'limit':this.limit});
      },
      preClick(val){
//        console.log(`上一页: ${val}`);
        this.page=val;
        this.findAllMainSort({'offset':this.page,'limit':this.limit});
      },
      nextClick(val){
//        console.log(`下一页: ${val}`);
        this.page=val;
        this.findAllMainSort({'offset':this.page,'limit':this.limit});
      },
      addLabel(){
        this.add_label=0;
        this.$router.push({
          path:"/ProductSort",
          query:{
            add_label:this.add_label
          }
        });
      },
      submitForm(formName) {
        console.log(this.$refs[formName]);
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      addNextLevel(item,index){
        this.$router.push({
          path:'/ProductSort',
          query:{
            add_label:index+1,
          }
        });
        this.ruleForm.LevelOneLabel=item.levelOneLabel;
      },
      checkNextLevel(item,index){
        this.$router.push({
          path:'/ProductSort',
          query:{
            check_next:index+1
          }
        })
      }
    }
  }
</script>
