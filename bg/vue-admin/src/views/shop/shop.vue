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
			<el-table-column type="index" width="60">
			</el-table-column>
			<el-table-column prop="shop_name" label="商铺名" width="100" sortable>
			</el-table-column>
			<el-table-column prop="shop_phone" label="商铺电话" width="180" sortable>
			</el-table-column>
			<el-table-column prop="shop_cert" label="营业执照编号" width="180" sortable>
			</el-table-column>
			<el-table-column prop="shop_qq" label="商铺号qq" width="120" sortable>
			</el-table-column>
			<el-table-column prop="is_review" label="审核状态" min-width="140" sortable>
			</el-table-column>
			<el-table-column label="商铺头像" width="100">
				<template scope="scope">
					<img style="width:60px;height:60px;" :src="'http://134.175.113.58/'+scope.row.shop_logo">
				</template>
			</el-table-column>
			<el-table-column label="审核" width="160">
				<template scope="scope">
					<el-button size="small" @click="handlere(scope.$index, scope.row)">通过</el-button>
					<el-button type="danger" size="small" @click="handleunre(scope.$index, scope.row)">不通过</el-button>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="140">
				<template scope="scope">
					<el-button size="small" @click="handlecheck(scope.$index, scope.row)">查看</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="10" :total="total" style="float:right;">
			</el-pagination>
		</el-col>
		<!--新增界面-->
		<el-dialog title="新增" v-model="addV" :close-on-click-modal="true">
			<el-form :model="addForm" label-width="100px"  ref="addForm">
				<el-form-item label="商铺头像">
					<input type="file" ref="file">
				</el-form-item>
				<el-form-item label="商铺名称" prop="shop_name">
					<el-input v-model="addForm.shop_name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="商铺电话" prop="shop_phone">
					<el-input v-model="addForm.shop_phone" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="营业执照编号" prop="shop_cert">
					<el-input v-model="addForm.shop_cert" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="商铺号qq" prop="shop_qq">
					<el-input v-model="addForm.shop_qq" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="商铺简介" prop="shop_intro">
					<el-input v-model="addForm.shop_intro" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="商铺地址" prop="shop_addr">
					<el-input v-model="addForm.shop_addr" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="店主编号" prop="owner_id">
					<el-input v-model="addForm.owner_id" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="店主身份证" prop="owner_cert">
					<el-input v-model="addForm.owner_cert" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="submitadd">确认</el-button>
			</div>
		</el-dialog>
		<!--查看界面-->
		<el-dialog title="查看" v-model="checkV" :close-on-click-modal="true">
			<el-form :model="checkform" label-width="100px"  ref="checkform">
				<el-form-item label="商铺头像">
					<img style="width:60px;height:60px;" :src="'http://134.175.113.58/'+checkform.shop_logo">
				</el-form-item>
				<el-form-item label="商铺名称" prop="shop_name">
					<el-input readonly v-model="checkform.shop_name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="商铺电话" prop="shop_phone">
					<el-input readonly v-model="checkform.shop_phone" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="营业执照编号" prop="shop_cert">
					<el-input readonly v-model="checkform.shop_cert" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="商铺号qq" prop="shop_qq">
					<el-input readonly v-model="checkform.shop_qq" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="商铺简介" prop="shop_intro">
					<el-input readonly v-model="checkform.shop_intro" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="商铺地址" prop="shop_addr">
					<el-input readonly v-model="checkform.shop_addr" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="店主编号" prop="owner_id">
					<el-input readonly v-model="checkform.owner_id" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="店铺状态" prop="is_review">
					<el-input readonly v-model="checkform.is_review" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="checkV = false">确认</el-button>
			</div>
		</el-dialog>

	</section>
</template>

<script>
	import util from '../../common/js/util'
	//import NProgress from 'nprogress'
	import {getshop,addshop,delshop,checkshop} from '../../api/api';

	export default {
		data() {
			return {
				checkV:false,
				checkform:{},
				filters: {
					name: ''
				},
				revalue:[],
				users: [],
				total: 0,
				page: 1,
				listLoading: false,
				sels: [],//列表选中列

				editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				addV: false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//新增界面数据
				addForm: {
				}

			}
		},
		methods: {
			//性别显示转换
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
				getshop(para).then((res) => {
                    console.log(res)
					this.total = res.data.data.totalCount;
					this.users = res.data.data.merchantList;	
					this.users.map((item,index) => {
						this.revalue[index] = item.is_review == "审核通过" ?true :false;
					})
					this.listLoading = false;
				});
			},
			handlecheck(index, row){
				this.checkV = true
				this.checkform = Object.assign({}, row);
			},
			handlere(index,row){
				checkshop({is_review:"审核通过"},row.id).then(res => {
					if(res.data.code == 0){
							this.$message({
								message: '操作成功',
								type: 'success'
							});
						this.getUsers();
						}else{
							this.$message({
								message: '操作失败',
								type: 'error'
							});
						}
				})
			},
			handleunre(index,row){
				this.$prompt('请输入原因(可不写)', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				}).then(({ value }) => {
					checkshop({is_review:"审核不通过",mark:value},row.id).then(Response => {
						console.log(Response)
						if(Response.data.code == 0){
								this.$message({
									message: '操作成功',
									type: 'success'
								});
							this.getUsers();
							}else{
								this.$message({
									message: '操作失败',
									type: 'error'
								});
							}
					})
				})
			},
			//删除
			handleDel: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then((res) => {
					this.listLoading = true;
					console.log(row)
					delshop(row.id).then((res) => {
						console.log(res)
						this.listLoading = false;
						if(res.data.code == 0){
							this.$message({
								message: '删除成功',
								type: 'success'
							});
						this.getUsers();
						}else{
							this.$message({
								message: '删除失败',
								type: 'error'
							});
						}
						
					});
				}).catch(() => {

				});
			},
			//显示编辑界面
			handleEdit: function (index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
			},
			//显示新增界面
			handleAdd: function () {
				this.addV = true
				this.addForm = {
				}
			},
			//编辑
			submitadd: function () {
				var data = new FormData();
				data.append("shop_name",this.addForm.shop_name)
				data.append("shop_phone",this.addForm.shop_phone)
				data.append("shop_cert",this.addForm.shop_cert)
				data.append("shop_qq",this.addForm.shop_qq)
				data.append("shop_intro",this.addForm.shop_intro)
				data.append("shop_addr",this.addForm.shop_addr)
				data.append("owner_cert",this.addForm.owner_cert)
				data.append("owner_id",this.addForm.owner_id)
				data.append("shop_logo",this.$refs.file.files[0])
				addshop(data).then((res) => {
					this.editLoading = false;
					console.log(res)
					this.$message({
						message: '提交成功',
						type: 'success'
					});
					this.editFormVisible = false;
					this.getUsers();
				});
			},
			//新增
			selsChange: function (sels) {
				this.sels = sels;
			},
		},
		computed:{
		},
		mounted() {
			this.getUsers();
		}
	}

</script>

<style scoped>

</style>