import * as types from './mutationTypes'
import axios from '@/components/axios/'

/** 获取下载列表 */
export const getDownload = ({ rootState, commit }) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'download',
      params: {
        token: rootState.common.user.token
      }
    }).then(response => {
      commit(types.DOWNLOAD, response.data.data)
      resolve(response)
    })
  })
}

/** 获取下载试题列表 */
export const getDownloadList = ({ rootState, commit }) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'download/list',
      params: {
        token: rootState.common.user.token,
        downloadId: rootState.route.params.downloadId
      }
    }).then(response => {
      commit(types.DOWNLOAD_PAPER, response.data.data)
      resolve(response)
    })
  })
}

/** 题目上移 */
export const setMyDownloadPaperUp = ({commit}, index) => {
  commit(types.DOWNLOAD_PAPER_UP, index)
}
/** 题目下移 */
export const setMyDownloadPaperDown = ({commit}, index) => {
  commit(types.DOWNLOAD_PAPER_DOWN, index)
}

/** 题目删除 */
export const setMyDownloadPaperDel = ({commit}, index) => {
  commit(types.DOWNLOAD_PAPER_DEL, index)
}

/** 试卷高度保存 */
export const setMyDownloadPaperScroll = ({commit}, height) => {
  commit(types.DOWNLOAD_PAPER_SCROLL, height)
}

/** 清空试卷 */
export const clearMyDownloadPaper = ({rootState, commit}) => {
  commit(types.DOWNLOAD_PAPER_RESET)
}