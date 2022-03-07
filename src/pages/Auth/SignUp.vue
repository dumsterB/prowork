<template>
  <div class="signIn">
    <div class="content">
      <div class="d-block">

        <h2>Зарегистрироваться в систему</h2>
        <v-card max-width="600" class="justify-center d-flex">
          <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              class="pa-10"
          >
            <v-text-field
                v-model="name"
                :counter="10"
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
                @click="resetValidation"
                large
            >
              Отправить
            </v-btn>
          </v-form>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn"
}
</script>

<style scoped>

</style>