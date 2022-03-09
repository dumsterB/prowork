import actions from "./actions";
import mutations from "./mutations";
const namespaced = true;
const state={
    testData:'hello',
    posts:[]
}

export default {actions,mutations,state,namespaced}
