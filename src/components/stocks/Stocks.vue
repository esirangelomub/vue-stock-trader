<template>
  <div>
    <v-layout row wrap>
      <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"></Stock>
    </v-layout>
  </div>
</template>

<script>
import Stock from "@/components/stocks/Stock";
export default {
  components: {Stock},
  computed: {
    stocks() {
      return this.$store.getters.stocks
    }
  }
}
</script>

<style scoped>

</style>