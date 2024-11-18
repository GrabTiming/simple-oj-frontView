<template>
  <div>123444</div>
  <div v-for="test in tests" :key="test.id">
    <el-card class="testCard">
      <span> {{test.title}} </span>
    </el-card>
  </div>
</template>
<script >
  export default {
    data(){
      return {
        tests: [
          { id: 1, title: '计算机网络', content: '内容 1' },
          { id: 2, title: '操作系统', content: '内容 2' },
          { id: 3, title: '计算机组成原理', content: '内容 3' },
          { id: 4, title: '数据库概念与设计', content: '内容 3' },
          { id: 5, title: 'linux系统学习', content: '内容 3' },
          { id: 6, title: '高级程序语言涉及', content: '内容 3' },
        ]
      }
    }
  }
</script>