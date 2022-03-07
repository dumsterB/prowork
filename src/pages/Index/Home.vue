<template>
  <div>
<h1>{{moduletest}}</h1>
  </div>
</template>
<script>
import { useStore} from 'vuex'
import {defineComponent, ref, computed, onMounted} from "vue";

export default  defineComponent({
  setup(){
    const store=useStore()
    const moduletest=computed(()=>store.state.Documents.modulesTest)
    const testAction=(el)=> store.dispatch('Documents.testAction')
     onMounted(()=>{
      console.log(store.state.Documents.modulesTest)
       console.log(store.testAction,'fewfewf')
    })
    return{
      moduletest
    }
  }
})
</script>