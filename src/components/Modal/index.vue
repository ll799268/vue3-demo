<template>
  <div class="modal">
    <div class="inner">
      <div className="modal-header">{{ modalTitle }}</div>
      <div className="content-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    modalTitle: {
      type: String,
      default: ''
    }
  })
</script>


<style lang="scss" scoped>
  .modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10%;
    .inner {
      width: 100%;
      background-color: #fff;
      .modal-header {
        background-color: #0091b9;
        color: #fff;
        line-height: 38px;
        text-align: center;
      }
    }
  }
</style>