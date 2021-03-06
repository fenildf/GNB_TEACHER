import Vue from 'vue'
import * as types from './mutationTypes'
import axios from '@/components/axios/'

/** 提交反馈 */
export const updateAdvice = ({rootState, commit}, params) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: 'user/advice',
      data: {
        token: rootState.common.user.token,
        ...params
      }
    }).then((response) => {
      Vue.$vux.toast.show({text: '感谢您的反馈！', type: 'text', time: 1000, position: 'bottom'})
      resolve(response)
    }).catch((e) => {
      reject(e)
    })
  })
}

/** 反馈列表 */
export const adviceHistory = ({rootState, commit}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'user/adviceHistory',
      params: {
        token: rootState.common.user.token
      }
    }).then((response) => {
      commit(types.ADVICE_LIST, response.data.data)
      resolve(response)
    }).catch((e) => {
      reject(e)
    })
  })
}

/** 商城增加积分 */
export const pointsStoreAdd = ({rootState, commit}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: 'points/add',
      data: {
        type: 'store',
        token: rootState.common.user.token
      }
    }).then((response) => {
      // commit(types.ADVICE_LIST, response.data.data)
      resolve(response)
    }).catch((e) => {
      reject(e)
    })
  })
}

/** 清空反馈列表 */
export const clearAdviceHistory = ({commit}) => {
  commit(types.ADVICE_LIST_CLEAR)
}
