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
		<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column type="index" label="页表编号" width="100">
			</el-table-column>
            <el-table-column prop="id" label="系统编号" width="120" sortable>
			</el-table-column>
			<el-table-column prop="username" label="姓名" width="120" sortable>
			</el-table-column>
			<el-table-column label="操作">
				<template scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">修改密码</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<!-- <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button> -->
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="10" :total="total" style="float:right;">
			</el-pagination>
		</el-col>

		<!--编辑界面-->
		<el-dialog title="修改密码" v-model="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="100px" :rules="editFormRules" ref="editForm">
                <el-form-item label="系统编号">
					<el-input v-model="editForm.id" readonly auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="管理员名称">
					<el-input v-model="editForm.username" readonly auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item label="旧密码" prop="oldpassword">
					<el-input v-model="editForm.oldpassword" type="password" auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item label="新密码" prop="newpassword">
					<el-input v-model="editForm.newpassword" type="password" auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item label="重复密码" prop="newpassword2">
					<el-input v-model="editForm.newpassword2" type="password" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交更改</el-button>
			</div>
		</el-dialog>

		<!--新增界面-->
		<el-dialog title="新增管理员" v-model="addFormVisible" :close-on-click-modal="false">
            <el-form :model="addForm" label-width="100px" :rules="addFormRules" ref="addForm">
				<el-form-item label="管理员名称" prop="username">
					<el-input v-model="addForm.username" auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item label="输入密码" prop="password">
					<el-input v-model="addForm.password" type="password" auto-complete="off"></el-input>
				</el-form-item>
                <el-form-item label="重复密码" prop="password2">
					<el-input v-model="addForm.password2" type="password" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交更改</el-button>
			</div>
		</el-dialog>
	</section>
</template>

<script>
	import util from '../../common/js/util'
	//import NProgress from 'nprogress'
	import { getadminListPage,register,updatePass,getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';

	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				users: [],
				total: 0,
				page: 1,
				listLoading: false,
				sels: [],//列表选中列

				editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				editFormRules: {
					oldpassword: [
						{ required: true, message: '必填信息，请输入', trigger: 'blur' }
					],newpassword: [
						{ required: true, message: '必填信息，请输入', trigger: 'blur' }
					],newpassword2: [
						{ required: true, message: '必填信息，请输入', trigger: 'blur' }
					]
                },
                addFormRules:{
                    username: [
						{ required: true, message: '必填信息，请输入', trigger: 'blur' }
					],password: [
						{ required: true, message: '必填信息，请输入', trigger: 'blur' }
					],password2: [
						{ required: true, message: '必填信息，请输入', trigger: 'blur' }
					]
                },
				//编辑界面数据
				editForm: {
                    id:"",
					username: '',
					oldpassword: "",
					newpassword: "",
					newpassword2: '',
				},

				addFormVisible: false,//新增界面是否显示
				addLoading: false,
				//新增界面数据
				addForm: {
					username: '',
					password: "",
					password2: "",
				}

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
					offset: this.page
				};
				this.listLoading = true;
                //NProgress.start();
                getadminListPage(para).then(res => {
                    console.log(res)
                    if(res.data.code == 0){
                        this.total = res.data.data.totalCount;
					    this.users = res.data.data.adminList;
					    this.listLoading = false;
                    }
                })
			},
			//删除
			handleDel: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { id: row.id };
					removeUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			},
			//显示编辑界面
			handleEdit: function (index, row) {
                this.editFormVisible = true;
                console.log(row)
				this.editForm = {
                    id:row.id,
                    username: row.username,
					oldpassword: "",
					newpassword: "",
					newpassword2: '',
                }
			},
			//显示新增界面
			handleAdd: function () {
				this.addFormVisible = true;
				this.addForm = {
					username: '',
					password: "",
					password2: "",
				};
			},
			//编辑
			editSubmit: function () {
                let data = new FormData
                data.append("password",this.editForm.oldpassword)
                data.append("newpassword",this.editForm.newpassword)
                updatePass(data,this.editForm.id).then(res => {
					console.log(res)
					if(res.data.code == 0){
						this.$message({
								message: '修改成功',
								type: 'success'
						});
					}else{
						this.$message({
								message: '修改失败',
								type: 'error'
						});
					}
                    
                })
			},
			//新增
			addSubmit: function () {
                let data = {
					"username":this.addForm.username,
					"password":this.addForm.password
				}
                register(data).then(res => {
                    this.$message({
							message: '修改成功',
							type: 'success'
                    });
					this.addFormVisible = false
					this.getUsers()
                })
				
			},
			selsChange: function (sels) {
				this.sels = sels;
			},
			//批量删除
			batchRemove: function () {
				var ids = this.sels.map(item => item.id).toString();
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { ids: ids };
					batchRemoveUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			}
		},
		mounted() {
			this.getUsers();
		}
	}

</script>

<style scoped>

</style>