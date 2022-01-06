<template>
  <div class="add-input">
    <input 
      v-model="addIp"
      type="text" 
      placeholder="请输入待办事项" />
    <button @click="handleConfirmAdd">增加</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const addIp = ref('')

  const emit = defineEmits()

  const handleConfirmAdd = () => {
    emit('handleShowAddInput', false)
    
    const val = addIp.value.trim()
    if (!val) return

    emit('addIpVal', val)
    addIp.value = ''
  }

</script>

<style lang="scss" scoped>
  .add-input {
    background-color: #fff;
    display: flex;
    width: 100%;
    height: 0.4rem;
    padding: 0.04rem 0.1rem;
    position: fixed;
    top: 0.44rem;
    input {
      flex: 8;
      margin-right: 0.1rem;
      padding: 0 0.06rem;
      left: 0;
    }
    button {
      flex: 2;
      background: #337ab7;
      color: #fff;
    }
  }
</style>
