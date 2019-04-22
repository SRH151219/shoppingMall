//导入
import state from "./state"
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
export default {
  //独立的命名空间
  namespaced: true,
  state,
  mutations,
  actions,
  getters

}
