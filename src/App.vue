<template>
  <div>
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>
<script>
import {defineComponent, computed} from "vue";
import {useRouter} from 'vue-router';
import DefaultLayout from './layouts/DefaultLayout'
import AuthLayout from "@/layouts/AuthLayout";
import ErrorLayout from "@/layouts/ErrorLayout";
export default defineComponent({
  components:{
    DefaultLayout,AuthLayout,ErrorLayout
  },
  setup() {
    const router = useRouter()
    const layout = computed(() => {
      if(!router.currentRoute.value.meta.layout){
        return DefaultLayout
      }else{
        return router.currentRoute.value.meta.layout
      }
    })
    return {
      layout,
    }
  }

})
</script>
<style lang="scss">
</style>
