// initial state
// shape: [{ id, quantity }]
const state = {
    username: "",
    id:"",
    role_id:"",
    headpic:""
}
  
// getters
const getters = {
    username:state=>state.username,
    id:state=>state.id,
    role_id:state=>state.role_id,
    headpic:state=>state.headpic
}
// mutations
const mutations = {
    setUserName: (state,username) => {
        state.username = username
    },
    setRoleId: (state,role_id) => {
        state.role_id = role_id
    },
    setId: (state,id) => {
        state.id = id
    },
    setpic: (state,str) => {
        console.log(str)
        state.headpic = str
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