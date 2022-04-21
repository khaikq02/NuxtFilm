<template>
  <div>
    <form action="" @submit.prevent>
      <input v-model.lazy="inputValue" type="text" />
      <button
        type="button"
        class="text-white bg-red-500"
        @click="sendInputForSearch(inputValue)"
      >
        Search
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
    }
  },
  methods: {
    sendInputForSearch(inputValue) {
      this.$emit('typedInput', inputValue)
    },
  },
}
</script>

<style></style>
