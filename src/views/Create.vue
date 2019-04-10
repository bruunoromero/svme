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
  </div>
</template>

<script>
export default {
  name: "create",
  methods: {
    pop() {
      this.$ionic.modalController.dismiss();
    }
  }
};
</script>

<style>
</style>
