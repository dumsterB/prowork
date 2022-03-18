<template>
  <div>
    <a-tabs v-model:activeKey="activeKey" type="card">
      <a-tab-pane key="1" tab="Индустрия">
        <a-row>
          <a-col v-for="job of jobs" :key="job.text">
            <div class="jobs" @click="activeHandler(job)" :class="job.active ? 'active_job': ''">
              {{ job.text }}
            </div>
          </a-col>
        </a-row>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Професии">
        <a-row>
          <a-col v-for="job of jobs" :key="job.text">
            <div class="professions">
              <a-checkbox v-model:checked="job.active"><span style="font-size: 16px">{{ job.text }}</span></a-checkbox>
            </div>
          </a-col>
        </a-row>
      </a-tab-pane>
    </a-tabs>
    <a-divider/>
    <div>
      <h2 class="text-center">Данные о вакансии</h2>
      <div>
        <a-form
            :model="formState"
            name="basic"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            autocomplete="off"
        >
          <a-row>
            <a-col>
              <a-form-item
                  label="Зарплата"
                  name="username"
                  :rules="[{ required: true, message: 'Поля обязательно для заполнению' }]"
              >
                <a-input v-model:value="formState.username"/>
              </a-form-item>
            </a-col>
            <a-col>
              <a-form-item
                  label="Субтитр"
                  name="username"
                  :rules="[{ required: true, message: 'Поля обязательно для заполнению' }]"
              >
                <a-input v-model:value="formState.username"/>
              </a-form-item>
            </a-col>
            <a-col>
              <a-form-item
                  label="Страна"
                  name="username"
                  :rules="[{ required: true, message: 'Поля обязательно для заполнению' }]"
              >
                <a-input v-model:value="formState.username"/>
              </a-form-item>
            </a-col>
            <a-col>
              <a-form-item
                  label="Город"
                  name="username"
                  :rules="[{ required: true, message: 'Поля обязательно для заполнению' }]"
              >
                <a-input v-model:value="formState.username"/>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref, reactive} from "vue";
import {useStore} from "vuex";

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

export default defineComponent({
  components: {},
  setup() {
    const store = useStore()
    const checked = ref(false)
    const activeKey = ref('1')
    const formState = ref<FormState>({
      username: '',
      password: '',
      remember: true,
    });
    const jobs = ref([
      {text: 'Финансовый департамент', active: false},
      {text: 'Юридический департамент', active: false},
      {text: 'Департамент маркетинга', active: false},
      {text: 'Департамент коммерческих операций', active: false},
      {text: 'Frontend', active: false},
      {text: 'Backend', active: false},
      {text: 'Full-stack developer', active: false},
      {text: 'web-designer', active: false},
    ])

    function activeHandler(value: any) {
      value.active = !value.active
    }

    return {
      jobs, activeKey, activeHandler, checked, formState
    }
  }

})
</script>
<style>
.jobs {
  border: 1px solid black;
  padding: 10px;
  margin-left: 8px;
  margin-top: 8px;
  margin-right: 8px;
  cursor: pointer;
}

.active_job {
  border: 1px solid #1890ff;
  color: #1890ff;
}

.professions {
  padding: 10px;
}
</style>