<template>
  <p>{{ data1 }}</p>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const data1 = ref(1)
    return {
      data1: data1.value
    }
  }
}
</script>

<style>

</style>
