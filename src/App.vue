<template>
  <div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
import {defineComponent,computed,} from "vue";
import {useRouter} from 'vue-router';
import Default from './layouts/Default'
export default defineComponent({
  setup(){
    const router = useRouter()
    const layout = computed(() => {
      return (router.currentRoute.value.meta.layout || Default)
    })
    return {
      layout
    }
  }

})
</script>
<style lang="scss">
</style>
