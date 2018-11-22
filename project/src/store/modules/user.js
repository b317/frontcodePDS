// initial state
// shape: [{ id, quantity }]
const state = {
    userName: ""
}
  
// getters
const getters = {
    username:state=>state.userName,
}
// mutations
const mutations = {
    setUserName: (state,{userName}) => {
        state.userName = userName
        console.log(state)
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