<template>
  <div>
    <h2>error</h2>
    <router-view></router-view>
  </div>
</template>
<script>
import {defineComponent,onMounted} from 'vue';
export default defineComponent({
  name: "Error",
  setup(){
    onMounted(()=>{
      console.log('errpr page')
    })
  }
})
</script>

<style scoped>

</style>