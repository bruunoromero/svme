<template>
  <ion-list-item>
    <ion-card>
      <ion-card-header>
        <ion-card-title>{{name}}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <div>{{value}}</div>
        <div>{{createdAt.toDate()}}</div>
      </ion-card-content>
    </ion-card>
  </ion-list-item>
</template>

<script>
export default {
  props: ["name", "value", "createdAt"]
};
</script>

<style>
</style>
