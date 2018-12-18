<template>
    <div>
      <div class="bread_crumbs">
        <span>客户名单管理&nbsp;--&nbsp;<i class="present">客户信息列表</i></span>
      </div>
      <!--工具条-->
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;margin-top: 10px">
        <el-form :inline="true" :model="filters">
          <el-form-item>
            <el-input v-model="inputValue" placeholder="请输入客户姓名/账号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" v-on:click="getUsers">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleAdd">新增</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <!--新增界面-->
      <el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
        <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="addForm.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="addForm.sex">
              <el-radio class="radio" :label="1">男</el-radio>
              <el-radio class="radio" :label="0">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input-number v-model="addForm.age" :min="0" :max="200"></el-input-number>
          </el-form-item>
          <el-form-item label="生日">
            <el-date-picker type="date" placeholder="选择日期" v-model="addForm.birth"></el-date-picker>
          </el-form-item>
          <el-form-item label="地址">
            <el-input type="textarea" v-model="addForm.addr"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="addFormVisible = false">取消</el-button>
          <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
        </div>
      </el-dialog>
      <!--内容-->
      <div class="lists">
        <table>
          <thead>
          <tr>
            <th class="">#</th>
            <th class="">账号</th>
            <th class="">昵称</th>
            <th class="">姓名</th>
            <th class="">性别</th>
            <th class="">联系电话</th>
            <th class="">操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) of clientList" :key="index">
            <td class="" width="4%">
              <span class="client-id">{{item.clientID}}</span>
            </td>
            <td class="" width="19%">
              <span class="client-img"><img :src="item.clientImg"></span>
              <span class="client-account">{{item.clientAccount}}</span>
            </td>
            <td class="" width="16%">
              <span class="nick-name">{{item.nickName}}</span>
            </td>
            <td class="" width="16%">
              <span class="client-name">{{item.clientName}}</span>
            </td>
            <td class="" width="14%">
              <span class="reg-time">{{item.sex}}</span>
            </td>
            <td class="" width="14%">
              <span class="client-phone">{{item.clientPhone}}</span>
            </td>
            <td>
              <div style="margin-bottom: 8px">
                <el-button type="success" size="mini">查看<i class="el-icon-rank"></i></el-button>
              </div>
            </td>
          </tr>
          </tbody>
          <tfoot>
          <tr>
            <td colspan="3"></td>
            <td colspan="6" style="position: relative">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="1000"
                @current-change="pageChange"
                @prev-click="preClick"
                @next-click="nextClick"
              >
              </el-pagination>
            </td>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
              msg: '客户名单管理',
              clientList: [],
              dataList: [
                {
                  clientID: 1,
                  clientImg: '../../../static/headerImg2.png',
                  clientAccount: 'hsad45658dfsd',
                  nickName: '凮易菲菲',
                  clientName: '倾听瑞',
                  sex: '男',
                  clientPhone: '136597*****',
                  status: 0
                },
                {
                  clientID: 2,
                  clientImg: '../../../static/headerImg.jpg',
                  clientAccount: 'hsad45658dfsd',
                  nickName: '凮易菲菲',
                  clientName: '倾听瑞',
                  sex: '男',
                  clientPhone: '136597*****',
                  status: 0
                },
                {
                  clientID: 3,
                  clientImg: '../../../static/touxiang.jpg',
                  clientAccount: 'hsad45658dfsd',
                  nickName: '凮易菲菲',
                  clientName: '倾听瑞',
                  sex: '男',
                  clientPhone: '136597*****',
                  status: 0
                },
                {
                  clientID: 4,
                  clientImg: '../../../static/headerImg2.png',
                  clientAccount: 'hsad45658dfsd',
                  nickName: '凮易菲菲',
                  clientName: '倾听瑞',
                  sex: '男',
                  clientPhone: '136597*****',
                  status: 0
                },
                {
                  clientID: 5,
                  clientImg: '../../../static/headerImg.jpg',
                  clientAccount: 'hsad45658dfsd',
                  nickName: '凮易菲菲',
                  clientName: '倾听瑞',
                  sex: '男',
                  clientPhone: '136597*****',
                  status: 0
                },
                {
                  clientID: 6,
                  clientImg: '../../../static/headerImg2.png',
                  clientAccount: 'hsad45658dfsd',
                  nickName: '凮易菲菲',
                  clientName: '倾听瑞',
                  sex: '男',
                  clientPhone: '136597*****',
                  status: 0
                },
                {
                  clientID: 7,
                  clientImg: '../../../static/headerImg.jpg',
                  clientAccount: 'hsad45658dfsd',
                  nickName: '凮易菲菲',
                  clientName: '倾听瑞',
                  sex: '男',
                  clientPhone: '136597*****',
                  status: 0
                },
                {
                  clientID: 8,
                  clientImg: '../../../static/headerImg2.png',
                  clientAccount: 'hsad45658dfsd',
                  nickName: '凮易菲菲',
                  clientName: '倾听瑞',
                  sex: '男',
                  clientPhone: '136597*****',
                  status: 0
                }
              ],
              inputValue: '',

              addFormVisible: false,//新增界面是否显示
              addLoading: false,
              addFormRules: {
                name: [
                  { required: true, message: '请输入姓名', trigger: 'blur' }
                ]
              },
              //新增界面数据
              addForm: {
                name: '',
                sex: -1,
                age: 0,
                birth: '',
                addr: ''
              }
            }
        },
      mounted(){
        this.clientList = this.dataList;
      },
      methods: {
        pageChange(val){
//        console.log(`当前页: ${val}`);
        },
        preClick(val){
//        console.log(`上一页: ${val}`);
        },
        nextClick(val){
//        console.log(`下一页: ${val}`);
        },
        //显示新增界面
        handleAdd() {
          this.addFormVisible = true;
          this.addForm = {
            name: '',
            sex: -1,
            age: 0,
            birth: '',
            addr: ''
          };
        },
        //新增
        addSubmit() {
          this.$refs.addForm.validate((valid) => {
            if (valid) {
              this.$confirm('确认提交吗？', '提示', {}).then(() => {
                this.addLoading = true;
                //NProgress.start();
                let para = Object.assign({}, this.addForm);
                para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
                addUser(para).then((res) => {
                  this.addLoading = false;
                  //NProgress.done();
                  this.$message({
                    message: '提交成功',
                    type: 'success'
                  });
                  this.$refs['addForm'].resetFields();
                  this.addFormVisible = false;
                  this.getUsers();
                });
              });
            }
          });
        },
      }
    }
</script>
<style>
  table{border:1px solid #DDD;width: 100%;border-collapse: collapse;margin-top: 25px}
  table thead{
    border-bottom: 1px solid #ddd;
    vertical-align: middle;font-size: 13px;line-height: 40px;
    background: #e5e5e5; font-weight: bold;;opacity: 0.7;
  }
  table thead th:last-child{border-right: 1px solid #ddd !important;}
  table tbody{
    font-size:13px ;color:gray;text-align: center;
  }
  table tbody tr{border-bottom: 1px solid #ddd}
  table tbody td{padding: 10px 10px;}
  table tbody td:last-child{border-right: 1px solid #ddd}
  table tbody td .client-img img{
    width: 32px;height: 32px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  table tbody td .client-account{
    vertical-align: top;
  }
  table tfoot tr td{padding: 10px 0 !important;height: 22px}
  table tfoot .el-pagination{
    position: absolute;right: 0;
    top: 5px;
  }
</style>
