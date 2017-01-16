import * as types from '../mutationTypes'

const state = {
  register:{
    mobile:'',
    code:'',
    isTeacher:''
  },
  forget:{
     code:'',
     mobile:''
  },
  token: localStorage.getItem('token')
}

const mutations = {
  [types.REGISTER_MESSAGE](state , data){
    state.register.mobile = data.data.mobile;
    state.register.code = data.data.code;
    state.register.isStudent = data.data.isStudent;
  },
  [types.FORGET_MESSAGE](state , data){
    state.forget.code = data.data.code;
    state.forget.mobile = data.data.mobile;
  },
  [types.LOGIN](state, data){
    state.token = data.token;
    localStorage.setItem('token',data.token);
  },
  [types.SET_PASSWORD](state, data){
    state.token = data.token;
    localStorage.setItem('token',data.token);
  }
}

export default {
  state,
  mutations
}