<template>
  <div>
    <pre> <p>{{ posts }}</p></pre>
  </div>
</template>
<script>
import {useStore} from 'vuex'
import {defineComponent, ref, computed, onMounted} from "vue";

export default defineComponent({
   setup() {
    const store = useStore()
    const posts = store.state.Documents.posts
    const getPosts = ()=> store.dispatch('Documents/loadPosts')
     onMounted(()=>{
        getPosts()
     })
    return {
      posts,
      getPosts
    }
  }

})
</script>