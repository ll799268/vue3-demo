<template>
  <ul class="list">
    <li v-for="item in list"
      :key="item.id">
        <div class="left">
          <input v-model="item.isCompleted" type="checkbox" />
          <span :style="{  textDecoration: item.isCompleted ? 'line-through' : '' }">{{ item.content }}</span>
        </div>
        <div class="btn-group">
          <button class="btn btn-primary">查看</button>
          <button class="btn btn-warning">编辑</button>
          <button class="btn btn-danger">删除</button>
        </div>
      </li>
  </ul>
</template>
<script setup>

  const props = defineProps(
    {
      list: {
        type: Array,
        default: () => []
      }
    }
  )

</script>

<style lang="scss" scoped>
  .list {
    li {
      margin-bottom: 0.1rem;
      padding: 0 0.1rem;
      height: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 0.01rem solid #d0d0d0;
      .left {
        height: 100%;
        display: flex;
        align-items: center;
        span {
          display: inline-block;
          width: 1.45rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: -0.02rem 0 0 0.1rem;
        }
      }
      .btn-group {
        .btn {
          width: 0.5rem;
          height: 0.26rem;
          margin-left: 0.1rem;
          color: #fff;
          &.btn-primary {
            background: #337ab7;
          }
          &.btn-warning {
            background: #f0ad4e;
          }
          &.btn-danger {
            background: #d9534f;
          }
        }
      }
    }
  }
</style>