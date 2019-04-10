<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-title>create</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="pop">
            <ion-icon slot="icon-only" name="close"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label position="floating">Nome</ion-label>
          <ion-input @input="$v.name.$model = $event.target.value" :value="$v.name.$model"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Valor</ion-label>
          <ion-input type="number"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Local</ion-label>
          <ion-input></ion-input>
        </ion-item>
      </ion-list>
    </ion-content>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "create",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    pop() {
      this.$ionic.modalController.dismiss();
    }
  },
  validations: {
    name: { required }
  }
};
</script>

<style>
</style>
