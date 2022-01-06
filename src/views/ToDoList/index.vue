<template>
  <div class="todo-list">
    <Header @handleShowAddInput="handleShowAddInput" />
    <AddInput 
      @handleShowAddInput="handleShowAddInput"
      @addIpVal="addIpVal"
      v-show="isShowAddInput" />
    <List :list="list" />
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'

  import Header from './Header.vue'
  import AddInput from './AddInput.vue'
  import List from './List.vue'

  const isShowAddInput = ref(false)

  const list = reactive([])

  const handleShowAddInput = val => {
    isShowAddInput.value = val
  }

  const addIpVal = val => {
    list.push(
      {
        id: Date.now(),
        content: val,
        isCompleted: false
      }
    )
  }

</script>

<style lang="scss" scoped>

</style>
