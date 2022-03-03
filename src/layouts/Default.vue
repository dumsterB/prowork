<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: "Default",
  setup() {
    const collapsed = ref(false)
    function toggleCollapsed() {
      collapsed.value = !collapsed.value;
    }
    return {
      collapsed, toggleCollapsed
    }
  }
})
</script>

<style scoped>
.ant-layout-header{
  padding: 0px 5px!important;
}
</style>