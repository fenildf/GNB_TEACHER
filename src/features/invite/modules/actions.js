import Vue from 'vue'
import * as types from './mutationTypes'
import axios from '@/components/axios/'

/** 邀请信息获取 */
export const getInvite = ({ rootState, commit }) => {
  Vue.$vux.loading.show({text: '请稍候'})
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'invite',
      params: {
        token: rootState.common.user.token
      }
    }).then(response => {
      Vue.$vux.loading.hide()
      commit(types.INVITE, response.data.data)
      resolve(response)
    }).catch((err) => {
      Vue.$vux.loading.hide()
      reject(err)
    })
  })
}

/** 邀请列表 */
export const getInviteList = ({ rootState, commit }) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: 'invite/list',
      data: {
        token: rootState.common.user.token
      }
    }).then(response => {
      commit(types.INVITE_LIST, response.data.data)
      resolve(response)
    })
  })
}

/** 清空邀请好友列表 */
export const setInviteListClear = ({ commit }) => {
  commit(types.INVITE_LIST_RESET)
}

/** 填写邀请码 */
export const setInviteCode = ({ rootState, commit, dispatch }, params) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: 'invite/code',
      params: {
        code: params.code,
        token: rootState.common.user.token
      }
    }).then(response => {
      dispatch('getInvite')
      resolve(response)
    })
  })
}
