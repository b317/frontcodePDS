<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-button type="primary" @click="handleAdd">新增</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="bannerList" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column type="index" width="60">
			</el-table-column>
			<el-table-column prop="id" label="系统编号" width="120" sortable>
			</el-table-column>
			<el-table-column prop="title" label="标题" width="200">
			</el-table-column>
			<el-table-column prop="url" label="连接地址" width="200">
			</el-table-column>
			<el-table-column prop="order" label="顺序" min-width="180" sortable>
			</el-table-column>
			<el-table-column prop="cli_num" label="点击次数" min-width="180" sortable>
			</el-table-column>
			<el-table-column label="操作" width="300">
				<template scope="scope">
					<el-button type="info" size="small" @click="handlecheck(scope.$index, scope.row)">查看图片</el-button>
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="10" :total="total" style="float:right;">
			</el-pagination>
		</el-col>
		<!--查看界面-->
		<el-dialog title="图片" v-model="checkVisible" :close-on-click-modal="true">
			<img  :src="checkimage" style="width:100%;height:100%;">
		</el-dialog>
		<!--编辑界面-->
		<el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="系统编号" prop="id">
					<el-input v-model="editForm.id" readonly auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="标题">
					<el-input v-model="editForm.title" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="连接地址">
					<el-input v-model="editForm.url" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="顺序">
					<el-input v-model="editForm.order" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="图片">
					<input type="file" ref="editfile">
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>

		<!--新增界面-->
		<el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
				<el-form-item label="标题">
					<el-input v-model="addForm.title" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="连接地址">
					<el-input v-model="addForm.url" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="顺序">
					<el-input v-model="addForm.order" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="图片">
					<input type="file" ref="addfile">
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog>
	</section>
</template>

<script>
	import util from '../../common/js/util'
	//import NProgress from 'nprogress'
	import { addbanner,bannerList,updatebanner,delbanner,updatebannerpic,checkbanner  } from '../../api/api';

	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				bannerList: [{id:123,title:"asd",}],
				total: 0,
				page: 1,
				listLoading: false,
				sels: [],//列表选中列
 				imageUrl: '',
				editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//编辑界面数据
				editForm: {
				},

				addFormVisible: false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//新增界面数据
				addForm: {
				},
				addimage:"",
				editpicid:"",
				checkimage:"",
				url:"http://134.175.113.58/",
				checkVisible:false
			}
		},
		methods: {
			handleCurrentChange(val) {
				this.page = val;
				this.getUsers();
			},
			//获取用户列表
			getUsers() {
				let para = {
					offset: this.page,
				};
				this.listLoading = true;
				bannerList(para).then((res) => {
					this.total = res.data.data.totalCount;
					this.bannerList = res.data.data.bannerList;
					this.listLoading = false;
				});
			},
			//删除
			handleDel: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					delbanner(row.id).then((res) => {
						this.listLoading = false;
						console.log(res)
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			},
			handlecheck: function(index, row){
				this.checkVisible = true
				checkbanner({id:row.id}).then(res => {
					console.log(res)
					this.checkimage = this.url+res.data.data.image
				})
			},
			//显示编辑界面
			handleEdit: function (index, row) {
				this.editFormVisible = true;
				checkbanner(row.id).then(res => {
					this.imageUrl = res.data.image 
				})
				this.editpicid = row.id
				this.editForm = Object.assign({}, row);
			},
			//编辑
			editSubmit: function () {
				this.editLoading = true;
				let l = new FormData
				l.append("title",this.editForm.title)
				l.append("url",this.editForm.url)
				l.append("order",this.editForm.order)
				updatebanner(l,this.editForm.id).then((res) => {
					let a = new FormData()
					a.append("file",this.$refs.editfile.files[0])
					return updatebannerpic(a,this.editForm.id)
				}).then((res) => {
					console.log(res)
					this.editLoading = false;
					this.$message({
						message: '提交成功',
						type: 'success'
					});
					this.editFormVisible = false;
					this.getUsers();
				});
			},
			//显示新增界面
			handleAdd: function () {
				this.addFormVisible = true;
				this.addForm = {
					title: '',
					url: '',
					order: '',
				};
			},
			//新增
			addSubmit: function () {
				let l = new FormData
				l.append("title",this.addForm.title)
				l.append("url",this.addForm.url)
				l.append("order",this.addForm.order)
				l.append("image",this.$refs.addfile.files[0])
				addbanner(l).then((res) => {
					console.log(res)
					this.addLoading = false;
					if(res.data.code == 0){
						this.$message({
							message: '提交成功',
							type: 'success'
						});
					}else{
						this.$message({
							message: '提交失败',
							type: 'error'
						});
					}
					
					this.addFormVisible = false;
					this.getUsers();
				});
			},
			
			
			selsChange: function (sels) {
				this.sels = sels;
			},
		},
		mounted() {
			this.getUsers();
		}
	}

</script>

<style scoped>
 .avatar-uploader .el-upload {
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
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    display: block;
  }
</style>