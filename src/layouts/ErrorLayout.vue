<template>
  <div >
    <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
      <template #extra>
        <a-button type="primary" @click="goHome">
          Back Home
        </a-button>
      </template>
    </a-result>
  </div>
</template>
<script>
import {defineComponent,onMounted} from 'vue';
import {useRouter} from "vue-router";

export default defineComponent({
  name: "Error",
  setup(){
    const router=useRouter()
    function goHome(){
      router.push('/')
    }
    onMounted(()=>{
      console.log('error page')
    })
    return{
      goHome
    }
  }
})
</script>

<style scoped>

</style>