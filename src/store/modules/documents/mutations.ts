export default {
    SET_TEST(state:any,payload:any) {
       state.posts=payload
        console.log(payload,'mutationsssss',state.posts)
    },
/*    SET_DRAWER(state, payload) {
        state.drawer = payload
    },
    SET_FACTORY_CATEGORIES_LIST(state, payload) {
        state.factoryCategories = payload || [];
    },
    SET_FACTORIES_LIST(state, payload) {
        state.factories = payload || [];
    },*/

};