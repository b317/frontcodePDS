// initial state
// shape: [{ id, quantity }]
const state = {
    userName: "",
    id:"",
    role_id:""
}
  
// getters
const getters = {
    username:state=>state.userName,
    id:state=>state.id,
    role_id:state=>state.role_id
}
// mutations
const mutations = {
    setUserName: (state,{userName}) => {
        state.userName = userName
        console.log(userName)
    },
    setRoleId: (state,{role_id}) => {
        state.role_id = role_id
        console.log(role_id)
    },
    setId: (state,{id}) => {
        state.id = id
        console.log(id)
    },
}
// actions
const actions = {

}



export default {
namespaced: true,
state,
getters,
actions,
mutations
}