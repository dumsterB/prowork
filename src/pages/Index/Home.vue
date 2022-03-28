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
    <a-skeleton active :loading="loading">
      <a-row>
        <a-col v-for="i of 3" :key="i" :span="8">
          <a-card title="ПОЛЬЗОВАТЕЛИ" style="width: 320px; height: 180px">
            <a-row>
              <a-col :span="12">
              <span class="d-flex">
               <p class="quantity">71,897</p>
              <span class="text-success mt-normal"><CaretUpOutlined/> by122</span>
              </span>
              </a-col>
              <a-col :span="12">
                <div class="userIcon">
                  <UsersIcon color="white"></UsersIcon>
                </div>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="12">
                <div class="more">
                  <a-button type="link">Посмотреть все</a-button>
                </div>
              </a-col>
            </a-row>
          </a-card>
        </a-col>
      </a-row>
    </a-skeleton>
  </div>
</template>
<script>
import {useStore} from 'vuex'
import {defineComponent, ref, computed, onMounted} from "vue";
import {CaretUpOutlined} from '@ant-design/icons-vue';
import {UsersIcon} from "vue-tabler-icons";

export default defineComponent({
  components: {
    CaretUpOutlined, UsersIcon
  },
  setup() {
    const loading = ref(true);
    const store = useStore()
    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 1000)
    })
    return {
      loading
    }
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

.userIcon {
  background-color: #6366f1;
  padding: 0.875rem;
  border-radius: 0.375rem;
  width: 50px;
  right: 0px;
  position: absolute;
  height: 50px;
}

.more {
  margin-left: -15px;
}
</style>