import Vue from 'vue'
import VueResource from 'vue-resource'
import * as _ from './whole.js'
import {
    API_PATHS,
    OK_CODE,
    UNAUTHORIZED_CODE
} from './api';

Vue.use(VueResource)

export default {
    getCode: (params) => {
        return http({ method: 'get', url: API_PATHS.getCode, data: params.data, ok: params.ok, wrong: params.wrong });
    },
    login: (params) => {
        return http({ method: 'get', url: API_PATHS.login, data: params.data, ok: params.ok, wrong: params.wrong });
    },
    addPwd: (params) => {
        return http({ method: 'get', url: API_PATHS.addPwd, data: params.data, ok: params.ok, wrong: params.wrong });
    },
    resetPwd: (params) => {
        return http({ method: 'get', url: API_PATHS.resetPwd, data: params.data, ok: params.ok, wrong: params.wrong });
    },
    //首页
    index: (params) => {
        return http({ method: 'get', url: API_PATHS.index, data: params.data, ok: params.ok, wrong: params.wrong });
    },
    //评注
    comment: (params) => {
        return http({ method: 'post', url: API_PATHS.comment, data: params.data, ok: params.ok, wrong: params.wrong });
    },
    //纠错
    correct: (params) => {
        return http({ method: 'post', url: API_PATHS.correct, data: params.data, ok: params.ok, wrong: params.wrong });
    },
    //拍错题列表
    cameraList: (params) => {
        return http({ method: 'get', url: API_PATHS.cameraList, data: params.data, ok: params.ok, wrong: params.wrong });
    },
    //习题列表
    exerciseList: (params) => {
        return http({ method: 'get', url: API_PATHS.exerciseList, data: params.data, ok: params.ok, wrong: params.wrong });
    },
    /**记错题章节 */
    rememberCharpter: (params) => {
        return http({ method: 'get', url: API_PATHS.rememberChapter, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    /**记错题章节练习题 */
    rememberExercise: (params) => {
        return http({ method: 'get', url: API_PATHS.rememberDetail, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    /**记错题例题获得 */
    rememberExampleGet: (params) => {
        return http({ method: 'get', url: API_PATHS.rememberExample, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    /**拍错题模块
    *  camera:拍错题搜索
    *  cameraImportant:拍错题设为例题
    */
    camera: (params) => {
        return http({ method: 'post', url: API_PATHS.camera, data: params.data, ok: params.ok, wrong: params.wrong });
    },
    cameraHistory: (params) => {
        return http({ method: 'get', url: API_PATHS.cameraHistory, data: params.data, ok: params.ok, wrong: params.wrong });
    },
    /**归纳本模块
    *  error:归纳本首页获取数据
    *  errorList:归纳本错题列表
    *  errorMore:归纳本首更多习题
    *  errorRecommend:归纳本推荐习题
    */
    error: (params) => {
        return http({ method: 'get', url: API_PATHS.error, data: params.data, ok: params.ok, wrong: params.wrong });
    },
    errorList: (params) => {
        return http({ method: 'get', url: API_PATHS.errorList, data: params.data, ok: params.ok, wrong: params.wrong });
    },
    errorMore: (params) => {
        return http({ method: 'get', url: API_PATHS.errorMore, data: params.data, ok: params.ok, wrong: params.wrong });
    },
    errorRecommend: (params) => {
        return http({ method: 'get', url: API_PATHS.errorRecommend, data: params.data, ok: params.ok, wrong: params.wrong });
    },
    errorRecommendPost: (params) => {
        return http({ method: 'post', url: API_PATHS.errorRecommendPost, data: params.data, ok: params.ok, wrong: params.wrong });
    },
    /**互动模块
    * msg:消息首页
    * msgSystem:系统消息
    * msgClass:班级消息
    * msgCorrect:纠错消息
    */
    msg: (params) => {
        return http({ method: 'get', url: API_PATHS.msg, data: params.data, ok: params.ok, wrong: params.wrong });
    },
    msgCorrect: (params) => {
        return http({ method: 'get', url: API_PATHS.msgCorrect, data: params.data, ok: params.ok, wrong: params.wrong });
    },
    msgClass: (params) => {
        return http({ method: 'get', url: API_PATHS.msgClass, data: params.data, ok: params.ok, wrong: params.wrong });
    },
    msgSystem: (params) => {
        return http({ method: 'get', url: API_PATHS.msgSystem, data: params.data, ok: params.ok, wrong: params.wrong });
    },
    //获取用户信息
    getUserInfo: (params) => {
        return http({ method: 'get', url: API_PATHS.getUserInfo, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    //编辑用户信息
    updateUserInfo: (params) => {
        return http({ method: 'post', url: API_PATHS.updateUserInfo, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    //获取班级列表
    myClassList: (params) => {
        return http({ method: 'get', url: API_PATHS.myClassList, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    material: (params) => {
        return http({ method: 'get', url: API_PATHS.material, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    createClass: (params) => {
        return http({ method: 'post', url: API_PATHS.createClass, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    //获取班级成员名单
    myClassmateList: (params) => {
        return http({ method: 'get', url: API_PATHS.myClassmateList, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    //申请列表
    applyList: (params) => {
        return http({ method: 'get', url: API_PATHS.applyList, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    //  申请回复
    replyApply: (params) => {
        return http({ method: 'post', url: API_PATHS.replyApply, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    //删除学生
    delStudent: (params) => {
        return http({ method: 'post', url: API_PATHS.delStudent, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    //删除班级
    delClass: (params) => {
        return http({ method: 'post', url: API_PATHS.delClass, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    //修改密码
    updatePwd: (params) => {
        return http({ method: 'post', url: API_PATHS.updatePwd, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    //反馈
    advice: (params) => {
        return http({ method: 'post', url: API_PATHS.advice, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    //反馈历史
    adviceHistory: (params) => {
        return http({ method: 'get', url: API_PATHS.adviceHistory, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    //获取邀请码
    getInviteCode: (params) => {
        return http({ method: 'get', url: API_PATHS.getInviteCode, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    //退出
    quitToken: (params) => {
        return http({ method: 'get', url: API_PATHS.quitToken, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    //检查版本
    updateVersion: (params) => {
        return http({ method: 'get', url: API_PATHS.updateVersion, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    headImg: (params) => {
        return http({ method: 'post', url: API_PATHS.headImg, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    /** 章节列表*/
    summary: (params) => {
        return http({ method: 'get', url: API_PATHS.summary, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    /** 题型汇总题目列表*/
    brushList: (params) => {
        return http({ method: 'get', url: API_PATHS.brushList, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    /** 放弃题目列表*/
    passList: (params) => {
        return http({ method: 'get', url: API_PATHS.passList, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    /** 斩断题目列表*/
    breakList: (params) => {
        return http({ method: 'get', url: API_PATHS.breakList, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    /** 题型汇总题目列表*/
    brushAction: (params) => {
        return http({ method: 'get', url: API_PATHS.brushAction, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    /** 我的练习册*/
    workbook: (params) => {
        return http({ method: 'get', url: API_PATHS.userWorkbook, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    /** 成绩报告单*/
    report: (params) => {
        return http({ method: 'get', url: API_PATHS.reportChapter, data: params.data, ok: params.ok, wrong: params.wrong })
    },
    /** 成绩报告单详细*/
    reportDetail: (params) => {
        return http({ method: 'get', url: API_PATHS.reportDetail, data: params.data, ok: params.ok, wrong: params.wrong })
    },
}

export function http(params) {
    // _.busy();
    let resource;
    if (params.method == 'post') {
        resource = Vue.http.post(params.url, params.data, {
            emulateJSON: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
    } else {
        resource = Vue.http.get(params.url,{
            params:params.data,
            _timeout: 5000,
            onTimeout: (request) => {
                _.toast("服务器繁忙");
                _.leave();
            }
        })
    }
    resource
    .then(resp => {
        if (resp.data.code == 200) {
            params.ok(resp);
        } else {
            _.toast(resp.data.msg);
            params.wrong(resp);
        }
        // _.leave();
        return resp;
    }, err => {
        console.log('Network Error:', err);
        if(err.data.msg){
            _.toast(err.data.msg)
        }else{
            _.toast('接口异常')
        }
        _.leave();
        return err;
    })
    .catch(err => {
        console.log(err);
    });
}
