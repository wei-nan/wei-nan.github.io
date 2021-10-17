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
                <el-col>
                    <el-image :src="require('@/components/images/p3_bg.png')" style="position: absoulte"></el-image>
                    <el-card class="box-card">
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                    
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
