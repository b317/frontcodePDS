<template>
	<section class="container">
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;width:45%;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-button type="primary" @click="handleAdd">新增主类</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;width:54%;margin-left:1%;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					当前主类:{{mainname}}
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleAdd2">新增子类</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<div class="con">
			<!--列表-->
			<el-table :data="shop" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 45%;">
				<el-table-column type="selection">
				</el-table-column>
				<el-table-column type="index" width="60">
				</el-table-column>
				<el-table-column prop="sort" label="名称" width="120" sortable>
				</el-table-column>
				<el-table-column label="操作">
					<template scope="scope">
						<el-button type="info" size="small" @click="handlecheck(scope.$index, scope.row)">查看</el-button>
						<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<!--列表-->
			<el-table :data="subshop" highlight-current-row v-loading="listLoading" @selection-change="selsChange" class="table" style="width: 54%;">
				<el-table-column type="selection">
				</el-table-column>
				<el-table-column type="index" width="60">
				</el-table-column>
				<el-table-column prop="sort" width="160" label="名称" sortable>
				</el-table-column>
				<el-table-column prop="pid" label="父类编号" width="160" sortable>
				</el-table-column>
				<el-table-column label="操作" width="260">
					<template scope="scope">
						<el-button size="small" @click="handleEdit2(scope.$index, scope.row)">编辑</el-button>
						<el-button type="danger" size="small" @click="handleDel2(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
			
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="width: 45%;">
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="10" :total="total" style="float:right;">
			</el-pagination>
		</el-col>
<<<<<<< HEAD
		<el-col :span="24" class="toolbar" style="width: 54%;margin-left:6px;">
=======
		<el-col :span="24" class="toolbar tobar1" style="width: 54%;margin-left:1%;">
>>>>>>> 85de91dd46ff7438d58d6570ce92acc8e3db5c06
			<el-pagination layout="prev, pager, next" @current-change="handlesubCurrentChange" :page-size="10" :total="subtotal" style="float:right;">
			</el-pagination>
		</el-col>
		<!--编辑界面-->
		<el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="名称" prop="sort">
					<el-input v-model="editForm.sort" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>
		<!--编辑界面-->
		<el-dialog title="编辑子类" v-model="editFormVisible2" :close-on-click-modal="false">
			<el-form :model="editForm2" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="名称" prop="sort">
					<el-input v-model="editForm2.sort" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible2 = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit2" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>

		<!--新增界面-->
		<el-dialog title="新增主类" v-model="addFormVisible" :close-on-click-modal="false">
			<el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
				<el-form-item label="名称" prop="name">
					<el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog>
		<!--新增界面-->
		<el-dialog title="新增子类" v-model="addFormVisible2" :close-on-click-modal="false">
			<el-form :model="addForm2" label-width="80px" :rules="addFormRules" ref="addForm">
				<el-form-item label="名称" prop="name">
					<el-input v-model="addForm2.name" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible2 = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit2" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog>
	</section>
</template>

<script>
	import util from '../../common/js/util'
	//import NProgress from 'nprogress'
	import { getmainsort,getsubsort,addmainsort,addsubsort,updatemainsort,updatesubsort,delmainsort,delsubsort } from '../../api/api';

	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				shop: [],
				subshop: [],
				total: 0,
				page: 1,
				subtotal: 0,
				subpage: 1,
				listLoading: false,
				sels: [],//列表选中列

				editFormVisible: false,//编辑界面是否显示
				editFormVisible2: false,//编辑界面是否显示
				editLoading: false,
				editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//编辑界面数据
				editForm: {
					id: 0,
					name: '',
				},
				editForm2: {
					id: 0,
					name: '',
				},
				mainname:"",
				addFormVisible: false,//新增界面是否显示
				addFormVisible2: false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//新增界面数据
				addForm: {
					name: '',
				},
				addForm2: {
					name: '',
				}

			}
		},
		methods: {
			handleCurrentChange(val) {
				this.page = val;
				console.log(val)
				this.getUsers();
			},
			handlesubCurrentChange(val) {
				this.subpage = val;
				this.getsubsort();
			},
			//获取用户列表
			getUsers() {
				let para = {
					page: this.page
				};
				this.listLoading = true;
				//NProgress.start();
				this.getmainsort()
			},
			getmainsort(){
				this.subpage = 1;
				this.listLoading = true;
				getmainsort({offset:this.page}).then((res)=>{
					this.total = res.data.data.totalCount;
					console.log(this.total)
					this.shop = res.data.data.categoryList;
					this.listLoading = false;
				})
			},
			getsubsort(){
				this.listLoading = true;
				console.log(this.subpage)
				getsubsort({offset:this.subpage,id:this.mainid}).then((res)=>{
					console.log(res)
					this.subtotal = res.data.data.totalCount;
					this.subshop = res.data.data.categoryList;
					this.listLoading = false;
				})
			},
			//删除
			handleDel: function (index, row) {
				this.$confirm('删除主类，子类也会一并删除，确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					delmainsort(row.id).then((res) => {
						this.listLoading = false;
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
						this.subshop = []
					});
				}).catch(() => {

				});
			},
			//删除
			handleDel2: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					delsubsort(row.id).then((res) => {
						this.listLoading = false;
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getsubsort();
					});
				}).catch(() => {

				});
			},
			//点击查看
			handlecheck: function (index, row) {
				console.log(row.id)
				this.mainid = row.id
				this.mainname = row.sort
				this.getsubsort()
			},
			//显示编辑界面
			handleEdit: function (index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
			},
			//显示编辑界面
			handleEdit2: function (index, row) {
				this.editFormVisible2 = true;
				this.editForm2 = Object.assign({}, row);
			},
			//显示新增界面
			handleAdd: function () {
				this.addFormVisible = true;
				this.addForm = {
					name: '',
				};
			},
			handleAdd2: function () {
				if(this.mainid){
					this.addFormVisible2 = true;
					this.addForm2 = {
						name: '',
					};
				}else{
					this.$message({
						message: '请选择主类',
						type: 'error'
					});
				}
				
			},
			//编辑
			editSubmit: function () {
				let data = new FormData()
				data.append("sort_name",this.editForm.sort)
				updatemainsort(data,this.editForm.id).then((res) => {
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
			//编辑
			editSubmit2: function () {
				let data = new FormData()
				data.append("sort_name",this.editForm2.sort)
				data.append("pid",this.editForm2.pid)
				updatesubsort(data,this.editForm2.id).then((res) => {
					console.log(res)
					this.editLoading = false;
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
					
					this.editFormVisible2 = false;
					this.getsubsort();
				});
			},
			//新增
			addSubmit: function () {
				this.addLoading = true;
				addmainsort({sort_name:this.addForm.name}).then((res) => {
					console.log(res)
					this.addLoading = false;
					this.$message({
						message: '提交成功',
						type: 'success'
					});
					this.addFormVisible = false;
					this.getUsers();
				});
			},
			//新增
			addSubmit2: function () {
				addsubsort({sort_name:this.addForm2.name,pid:`${this.mainid}`}).then((res) => {
					this.addLoading = false;
					if(res.data.code == 0){
						this.addFormVisible2 = false
						this.$message({
							message: '提交成功',
							type: 'success'
						});
						this.getsubsort()
					}else{
						this.$message({
							message: '提交失败',
							type: 'error'
						});
					}
					this.getUsers();
				}).catch(res=>{
					this.$message({
						message: '提交失败',
						type: 'error'
					});
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
.container{
	position: relative;
}
.table{
	position: absolute;
	right: 0px;
	top: 77px;
}
.con{
<<<<<<< HEAD

=======
	height: 600px;
>>>>>>> 85de91dd46ff7438d58d6570ce92acc8e3db5c06
}
</style>