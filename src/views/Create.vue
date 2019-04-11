<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            @click="pop"
            v-if="!isIos"
            style="display: block"
          ></ion-back-button>
          <ion-button
            v-if="isIos"
            @click="pop"
          >
            Close
          </ion-button>
        </ion-buttons>
        <ion-title>Create</ion-title>
        <ion-buttons slot="end">
          <ion-button fill="clear">
            Save
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label position="floating">Nome</ion-label>
          <ion-input
            :value="name"
            @input="set('name', $event.target.value)"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Valor</ion-label>
          <ion-input
            type="number"
            :value="value"
            @input="set('value', $event.target.value)"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Local</ion-label>
          <ion-input
            :value="place"
            @input="set('place', $event.target.value)"
          ></ion-input>
        </ion-item>
      </ion-list>
    </ion-content>
  </div>
</template>

<script>
import { isPlatform } from "@ionic/core";
import { required, numeric } from "vuelidate/lib/validators";

export default {
  name: "create",
  data() {
    return {
      name: "",
      value: "",
      place: ""
    };
  },
  computed: {
    isIos() {
      return isPlatform(window, "ios");
    }
  },
  methods: {
    pop() {
      this.$ionic.modalController.dismiss();
    },
    set(key, value) {
      this[key] = value;
      this.$v[key].$touch();
    }
  },
  validations: {
    name: { required },
    value: { required, numeric },
    place: { required }
  }
};
</script>

<style>
</style>
