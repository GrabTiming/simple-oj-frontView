<template>
  <div class="about">
    <h1>This is an {{ msg }} page</h1>
  </div>

  <el-container>
    <!-- 侧边栏-->
    <el-aside :width="asideWidth" class="aside">

      <div class="logo">
        <img src="@/assets/logo.png" alt="" style="width: 20px"/>
        <span v-show="!isCollapsed">logo</span>
      </div>
      <el-scrollbar style="height: calc(100vh - 55px);">
        <el-menu
            router
            :collapse="isCollapsed" default-active="/testDetail">
          <el-menu-item
              index="/myTest">
            <el-icon><Document /></el-icon>
            <span>我的考试</span>
          </el-menu-item>
          <el-menu-item index="/index/testDetail">
            <el-icon><Document /></el-icon>
            <span>考试成绩</span>
          </el-menu-item>
          <el-sub-menu>
            <template v-slot:title>
              <el-icon><Grid /></el-icon>
              <span>信息管理</span>
            </template>
            <el-menu-item>
              <el-icon><Search/></el-icon>
              <span>我的信息</span>
            </el-menu-item>
            <el-menu-item>
              <el-icon><Setting/></el-icon>
              <span>账号设置</span>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>

    </el-aside>

    <el-container>
      <!-- 右侧菜单栏   -->
      <el-header class="header">
        <el-icon class="asideBtn" @click="handleCollapse">
          <Expand v-show="isCollapsed"></Expand>
          <Fold v-show="!isCollapsed"></Fold>
        </el-icon>

        <el-breadcrumb separator="|" class="breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">promotion management</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>

        <div>头像</div>

      </el-header>
      <!-- 主体区域 -->

      <el-main class="main-box">
        <router-view></router-view>
      </el-main>

    </el-container>
  </el-container>

</template>

<script>
import { Document, Expand, Fold, Grid, Search, Setting} from "@element-plus/icons-vue";
    export default {
      components: {Expand, Fold, Search, Setting, Grid, Document},
      data(){
        return {
          msg: "信息",
          isCollapsed: false,
          asideWidth: '200px',
          tests: [
            { id: 1, title: '计算机网络', content: '内容 1' },
            { id: 2, title: '操作系统', content: '内容 2' },
            { id: 3, title: '计算机组成原理', content: '内容 3' },
            { id: 4, title: '数据库概念与设计', content: '内容 3' },
            { id: 5, title: 'linux系统学习', content: '内容 3' },
            { id: 6, title: '高级程序语言涉及', content: '内容 3' },
          ],
        }
      },
      methods: {

        handleCollapse(){
            this.isCollapsed = !this.isCollapsed;
            this.asideWidth = this.isCollapsed ? '64px' : '200px';
            console.log(this.asideWidth);
        }
      }
    }
</script>


<style scoped>

.aside{
  height: 100vh;
  box-shadow: 0 0 6px rgba(0, 21, 41, 0.98);
  //overflow: hidden;
}

.header{
  display: flex;
  padding-left: 5px;
  align-items: center;
  justify-content: space-between;
  background-color: #f1f1f1;
  box-shadow: 0 0 6px rgba(0, 21, 41, 0.98);
}

.logo{
  display: flex;
  color: white;
  height: 60px;
  line-height: 60px;
  justify-content: center;
  align-items: center;
  background-color: black;
}
.asideBtn {
  font-size: 20px;
  width: 40px;
  height: 40px;
}

.asideBtn:hover{
  box-shadow: 0 0 6px rgba(100, 139, 180, 0.97);
}

.main-box{
  padding: 0;
  background-color: #f7f8fa;
}

.breadcrumb{
  font-size: 16px;
}

</style>