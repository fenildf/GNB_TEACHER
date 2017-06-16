import * as types from './mutationTypes'
import * as getters from './getters'
import * as actions from './actions'

const state = {
  search: {
    subject: 2,
    grade: 'high',
    textbook: 1
  },
  gaokao: {
    list: [],
    offset: '',
    scroll: 0
  },
  sync: {
    list: [],
    offset: '',
    scroll: 0
  },
  example: {
    list: [],
    offset: '',
    scroll: 0
  },
  choice: {
    list: [],
    offset: '',
    scroll: 0
  }
}

const mutations = {
  [types.ASSEMBLE_SEARCH] (state, data) {
    state.search = { subject: data.subject, grade: data.grade, textbook: data.textbook }
    state.gaokao = { list: [], offset: '', scroll: 0 }
    state.sync = { list: [], offset: '', scroll: 0 }
  },
  [types.ASSEMBLE_SYNC] (state, data) {
    state.choice.list = state.choice.list ? state.choice.list.concat(data.list) : data.list
    state.choice.offset = data.offset
  },
  [types.ASSEMBLE_SYNC_SCROLL] (state, height) {
    state.choice.scroll = height
  },
  [types.ASSEMBLE_GAOKAO] (state, data) {
    state.gaokao.list = state.gaokao.list ? state.gaokao.list.concat(data.list) : data.list
    state.gaokao.offset = data.offset
  },
  [types.ASSEMBLE_GAOKAO_SCROLL] (state, height) {
    state.gaokao.scroll = height
  },
  [types.ASSEMBLE_EXAMPLE] (state, data) {
    state.example.list = state.example.list ? state.example.list.concat(data.list) : data.list
    state.example.offset = data.offset
  },
  [types.ASSEMBLE_EXAMPLE_SCROLL] (state, height) {
    state.example.scroll = height
  },
  [types.ASSEMBLE_EXAMPLE_CLEAR] (state) {
    state.example = { list: [], offset: '', scroll: 0 }
  },
  [types.ASSEMBLE_CHOICE] (state, data) {
    state.choice.list = state.choice.list ? state.choice.list.concat(data.list) : data.list
    state.choice.offset = data.offset
  },
  [types.ASSEMBLE_CHOICE_SCROLL] (state, height) {
    state.choice.scroll = height
  },
  [types.ASSEMBLE_CHOICE_CLEAR] (state) {
    state.choice = { list: [], offset: '', scroll: 0 }
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
