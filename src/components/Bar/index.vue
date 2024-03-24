<template>
  <div>Bar</div>
  <p>{{ propsContent?.title }}</p>
</template>

<script setup>
  
  import { defineProps } from 'vue'

  const props = defineProps({
    propsContent: {
      type: Object,
      default: () => {}
    }
  })

</script>