<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
        <ion-buttons slot="end">
          <ion-button slot="icon-only">
            <ion-icon name="add"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list v-for="transaction of transactions" :key="transaction.id">
        <transaction-card
          :name="transaction.name"
          :value="transaction.value"
          :createdAt="transaction.createdAt.toDate()"
        />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import firebase from "firebase";
const Create = () => import("@/views/Create.vue");
const TransactionCard = () => import("@/components/TransactionCard.vue");

export default {
  name: "home",
  components: {
    TransactionCard
  },
  data() {
    return {
      transactions: []
    };
  },
  firestore: {
    transactions: firebase.firestore().collection("transactions")
  },
  methods: {
    openModal() {
      this.$ionic.modalController
        .create({ component: Create })
        .then(m => m.present());
    }
  }
};
</script>
