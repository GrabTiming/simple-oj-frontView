<template>

  <h1>创建题目</h1>
  <div class="subject">
    <el-select
        v-model="question.subjectId"
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
  </div>
  <div class="description">
    <h2>题目描述</h2>
    <el-input v-model="question.description"
              type="textarea" placeholder="题目描述"
              rows="5">
    </el-input>
  </div>

  <button :disabled="question.filedList.length>=6" @click="addOption" class="add-question-Btn">Add Option</button>
  <div>
    <div v-for="(field,index) in question.filedList"
         :key="index"
         class="option">
      <span>{{getLetter(index)}}</span>
      <el-input type="text" v-model="question.filedList[index]"></el-input>
    </div>
  </div>

  <div style="display: flex">
    <span style="width: 120px">正确选项</span>
    <el-input v-model="question.correctField" type="text"></el-input>
  </div>

  <button @click="submitQuestion">提交</button>
  <button @click="print">print</button>

</template>

<script>

import request from "@/util/request";

export default {
  data(){
    return {
      //可供选择的科目
      subjects: [],
      question : {
        subjectId : '',
        description: '',
        correctField: '',
        filedList: [],
      }
    }
  },
  methods:{
    getSubjects(){
      request.get("/subject/getAll").then(r=> {
        console.log(r.data.data);
        this.subjects = r.data.data;
      });
    },
    addOption(){
      const newOption = ''; // 生成描述;
      this.question.filedList.push(newOption);
    },
    getLetter(index){
      return String.fromCharCode(65 + index)
    },
    submitQuestion(){
      request.post("/question/create/choice",this.question);
    },
    print(){
      console.log(this.subjects);
    }

  },
  computed:{

  },
  mounted() {
      this.getSubjects();

  }
}

</script>

<style scoped>
.option{
  display: flex;
}

.add-question-Btn{
  background-color: #75c05e;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  padding: 5px;
}

.add-question-Btn:hover{
  background-color: #55ff00;
}

.add-question-Btn :disabled{
  background-color: grey;
}

</style>