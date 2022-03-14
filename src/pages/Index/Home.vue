<template>
  <div>
    <a-typography-title :level="3">Главная</a-typography-title>
    <a-row>
      <a-col :span="24">
        <a-card style="width: 100%;">
          <div style="display: flex">
            <img height="60" width="60" src="https://storage.athena.uz/male" alt="">
            <div class="ml-normal">
              <a-typography-title :level="4">Добрый день, Dumster</a-typography-title>
              <div style="display: flex">
                <p class="text-gray">Duke Street Studio</p>
                <p class="text-gray ml-normal">Duke Street Studio</p>
              </div>
            </div>
          </div>
        </a-card>
      </a-col>
    </a-row>
    <a-typography-title class="mt-normal" :level="3">Последние 30 дней</a-typography-title>
    <a-row>
      <a-col>
        <a-card title="ПОЛЬЗОВАТЕЛИ" style="width: 300px">
          <a-row>
            <a-col :span="12">
                 <span class="d-flex">
              <p class="quantity">71,897</p>
              <span class="text-success mt-normal"><CaretUpOutlined/> by122</span>
         </span>
            </a-col>
            <a-col :span="12">

            </a-col>
          </a-row>

        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import {useStore} from 'vuex'
import {defineComponent, ref, computed, onMounted} from "vue";
import {
  CaretUpOutlined
} from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    CaretUpOutlined
  },
  setup() {

    const store = useStore()

    return {}
  }

})
</script>
<style>
.ant-card-body {
  padding: 15px !important;
  height: 100px;
}

.quantity {
  line-height: 2;
  font-size: 20px;
}
</style>