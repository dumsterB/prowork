<template>
  <div class="signIn">
    <div class="content">
      <div class="d-block">

      <h2>Зайти в систему</h2>
      <v-card max-width="600" class="justify-center d-flex">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="pa-10"
        >
          <v-text-field
              v-model="name"
              :rules="nameRules"
              class="fields"
              outlined
              label="Name"
              required
          ></v-text-field>

          <v-text-field
              v-model="email"
              outlined
              class="fields"
              :rules="emailRules"
              label="E-mail"
              required
          ></v-text-field>
          <v-btn
              color="primary"
              elevation="0"
              :disabled="!disableBtn"
              @click="formHandler"
              large
          >
            Отправить
          </v-btn>
        </v-form>
      </v-card>
        <Snackbars :text="text"  :snackbar="snackbar" @formHandler="formHandler"></Snackbars>
      </div>
    </div>
  </div>
</template>

<script>
import Snackbars from "@/components/Snackbars";
export default {
  name: "SignIn",
  components:{
    Snackbars
  },
  data(){
    return{
      email:'',
      name:'',
      snackbar:false,
      valid: true,
      text:'Вы успешно зашли в систему',
      emailRules: [
        v => !!v || 'E-main необходима заполнить',
        v => /.+@.+\..+/.test(v) || 'E-mail должен быть валидным',
      ],
      nameRules: [
        v => !!v || 'Имя необходима заполнить',
      ],
    }
  },
  methods:{
    formHandler(){
      this.snackbar=true
    }
  },
  computed:{
    disableBtn(){
      return this.name.trim() && this.email.trim() && this.valid===true
    }
  }
}
</script>

<style scoped>

</style>