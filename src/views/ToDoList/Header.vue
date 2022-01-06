<template>
  <header>
    <h1>事件代办</h1>
    <span @click="handleAdd">+</span>
  </header>
</template>

<script setup>
  const emit = defineEmits()
  const handleAdd = () => {
    emit('handleShowAddInput', true)
  }
</script>

<style lang="scss" scoped>
  header {
    height: 0.44rem;
    line-height: 0.44rem;
    background-color: #1aa9d0;
    color: #fff;
    position: relative;
    display: flex;
    align-items: center;
    h1 {
      font-size: 0.16rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    span {
      right: 0.16rem;
      position: absolute;
      font-size: 0.24rem;
      font-weight: 600;
    }
  }
</style>