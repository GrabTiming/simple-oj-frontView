<template>
  <h1>题库管理</h1>
  <el-select
      v-model="selectedSubject"
      placeholder="科目"
      size="large"
      style="width: 240px">
    <el-option
        v-for="item in subjects"
        :key="item.id"
        :value="item.id"
        :label="item.name"
    />
  </el-select>
  <el-select
      v-model="type"
      placeholder="类型"
      size="large"
      style="width: 240px">
    <el-option :value="0">选择题</el-option>
    <el-option :value="1">简答题</el-option>
  </el-select>
  <el-button @click="getQuestionBySubject">查询</el-button>

  <el-table :data="questionList" style="width: 100%">
    <el-table-column fixed prop="id" label="id" />
    <el-table-column prop="description" label="题干"  />
    <el-table-column prop="score" label="分数"  />
    <el-table-column prop="city" label="创建时间"  />
    <el-table-column fixed="right" label="Operations" >
      <template #default>
        <el-button link type="primary" size="small" >
          预览
        </el-button>
        <el-button link type="primary" size="small">编辑</el-button>
        <el-button link type="primary" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>


</template>


<script>



import request from "@/util/request";

export default {
  data(){
    return {
      selectedSubject: null,
      type: null,
      subjects: [],
      questionList: [],
    }
  },
  methods:{
    getAllSubject(){
      request.get("/subject/getAll").then(resp => this.subjects = resp.data.data);
    },
    getQuestionBySubject(){
      const params = {
        subjectId: this.selectedSubject,
        type: this.type
      };
      request.get("/question/getBySubject", {params}).then(
          resp => {
            this.questionList = resp.data.data;
          });

    }
  },
  mounted() {
    this.getAllSubject();
    console.log(this.subjects);
  }

}

</script>