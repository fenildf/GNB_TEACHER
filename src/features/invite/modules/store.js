import * as types from './mutationTypes'
import * as getters from './getters'
import * as actions from './actions'

const state = {
  isInvited: false,
  inviteCode: '',
  list: []
}

const mutations = {
  [types.INVITE_LIST_RESET] (state) {
    state.list = []
  },
  [types.INVITE_LIST] (state, data) {
    state.list = data
  },
  [types.INVITE] (state, data) {
    state.isInvite = data.isInvited
    state.inviteCode = data.inviteCode
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
