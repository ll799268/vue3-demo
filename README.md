## 项目总结

### 1、钩子函数的引进
* 路由
主要由options API 改为 composition API  
  + 创建
    ```js
      import { createRouter, createWebHashHistory } from 'vue-router'

      const Home = () => import('@views/Home/index.vue')

      const routes = [
        {
          path: '/',
          component: Home
        }
      ]

      const router = createRouter({
        history: createWebHashHistory(),
        routes
      )}

      export default router
    ```
  + 全局使用
    ```js
      this.$router.xx
    ```
* 仓库
  + 创建
    ```js
      import { createStore } from 'vuex'

      import state from './state'
      import getters from './getters'
      import mutations from './mutations'
      import actions from './actions'

      const store = createStore({
        state,
        getters,
        mutations,
        actions
      })

      export default store
    ```
  + 全局使用
    和之前类似

### 2、响应式数据(ref、reactive)
* ref
  接受一个内部值并返回一个响应式且可变的ref对象。ref对象仅有`.vaule`property，指向该内部值
  ```js
    适用于基本数据类型
    const num = ref(0)
    // 访问
    num.vaule
    // 修改
    num.vaule = xx
  ```
* reactive 返回对象的响应式副本
  响应式转换是深层的-它影响所有嵌套property。在基于ES2015 Proxy 的实现中，返回的proxy是不等于原始对象的。建议只使用响应式proxy，避免依赖原始对象
  ```js
    const data = reactive({
      list: [],
      info: {}
    })

    // 访问
    data.list
    // 修改
    data.list = xx
  ```

### 3、自定义事件
```js
  // 父组件
  const xx = val => {}

  // 子组件
  const emit = defineEmits()
  emit('xx', val)
```

### 4、子传父
```js
  // 父组件
  // v-bind: xx
  
  // 子组件
  const props = defineProps(
    {
      detail: {
        type: Object,
        default: {}
      }
    }
  )
```