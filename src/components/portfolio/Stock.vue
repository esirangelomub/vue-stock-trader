<template>
  <div>
    <v-flex class="pr-3 pb-3">
      <v-card class="blue darken-3 white--text">
        <v-card-title class="headline">
          <strong>
            {{ stock.name }}
            <small>(Price: {{ stock.price | currency }}) | Qtde: {{ stock.quantity }}</small></strong>
        </v-card-title>
      </v-card>
      <v-card>
        <v-container fill-height>
          <v-text-field
              label="Quantity"
              type="number"
              :error="insufficientQuantity || quantity < 0 || !Number.isInteger(quantity)"
              v-model.number="quantity"></v-text-field>
          <v-btn
              class="blue darken-3 white--text"
              :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
              @click="sellStock">{{ insufficientQuantity ? 'Insufficient' : 'Sell!'}}
          </v-btn>
        </v-container>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity
    }
  },
  methods: {
    ...mapActions({sellStockAction: 'sellStock'}),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }

      this.sellStockAction(order)
      this.quantity = 0;
    }
  }
}
</script>

<style scoped>

</style>