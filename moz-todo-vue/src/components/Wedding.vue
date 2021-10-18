<template>
    <el-container>
        <el-main>
            <!-- Page One -->
            <el-row>
                <el-col> 
                    <el-image :src="require('@/components/images/p1_bg.jpeg')" ></el-image>
                </el-col>
            </el-row>

            <!-- Page Two -->
            <el-row></el-row>

            <!-- Page Three -->
            <el-row></el-row>

            <!-- Page Four -->
            <el-row>
                <el-col style="position: relative; height: 300px;">
                    <el-card class="box-card" style="top: 0px; left: 0px; position: absolute; z-index: 999; background-color: rgba(255, 255, 255, 0.7)">
                        <el-descriptions class="margin-top" title="誠摯邀請" :column="1" :size="size" border>

                            <el-descriptions-item>
                                <template #label> <i class="el-icon-user"></i> 姓名 </template>
                                <el-input v-model="cus_name" placeholder="姓名" clearable />
                            </el-descriptions-item>

                            <el-descriptions-item>
                                <template #label> <i class="el-icon-knife-fork"></i> 葷食 </template>
                                <el-input-number v-model="adults" :min="0" :max="10" placeholder="人數" />
                            </el-descriptions-item>

                            <el-descriptions-item>
                                <template #label> <i class="el-icon-fork-spoon"></i> 素食 </template>
                                <el-input-number v-model="vegetarian_diet" :min="0" :max="this.adults + this.children" placeholder="素食" />
                            </el-descriptions-item>
                            
                            <el-descriptions-item>
                                <template #label> <i class="el-icon-bicycle"></i> 小孩 </template>
                                <el-input-number v-model="children" :min="0" :max="10" placeholder="人數" />
                            </el-descriptions-item>

                            

                            <el-descriptions-item>
                                <template #label> <i class="el-icon-chat-dot-round"></i> 備註 </template>
                                <el-input v-model="remark" type="textarea" maxlength="30" placeholder="備註" clearable show-word-limit />
                            </el-descriptions-item>
                        </el-descriptions>

                        <el-button type="success" class="btn-lg">送出<i class="el-icon-position "></i></el-button>

                    </el-card>
                    
                    <el-image :src="require('@/components/images/p3_bg.png')" style="position: absolute; top: 0px; left: 0px;"></el-image>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>

// import p1 from '@/components/images/p1_bg.jpeg'

export default {
  name: 'Wedding',
  props: {},
  data() {
      return {
          size: "big",
          cus_name: "",
          adults: 0,
          children: 0,
          vegetarian_diet: 0,
          remark: "",
          p1_bg: '../components/images/p1_bg.jpeg'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin: 0px;
    padding: 0px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
