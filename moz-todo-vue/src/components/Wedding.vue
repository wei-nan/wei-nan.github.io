<template>
    <el-container>
        <el-main>
            <!-- Page One -->
            <el-row>
                <el-col :span="24"> 
                    <el-image :src="require('@/components/images/wedding.jpg')"></el-image>
                    <div class="big-text item">我們衷心希望能夠有您的參與</div>
                    <div class="big-text item">讓這個充滿意義的日子更為圓滿</div>
                </el-col>
            </el-row>

            <el-row>
                <el-col>
                    <el-image :src="require('@/components/images/yu.jpg')" ></el-image>
                </el-col>
            </el-row>

            <!-- Page Two -->
            <el-row>
                <el-col :offset="6" :span="6">
                    <h2>新郎</h2>
                    <div class="big-text item">施韋男</div>
                    <el-divider></el-divider>

                    <div><h3>主婚人</h3></div>
                    <el-divider></el-divider>
                    <div class="text item">施滿郎</div>
                    <div class="text item">李麗萍</div>
                </el-col>

                <el-col :span="6">
                    <h2>新娘</h2>
                    <div class="big-text item">徐 毓</div>
                    <el-divider></el-divider>
                    <div><h3>主婚人</h3></div>
                    <el-divider></el-divider>
                    <div class="text item">徐進發</div>
                    <div class="text item">趙美惠<sub>願心</sub></div>
                </el-col>
            </el-row>

            <el-row>
                <el-col>
                    <el-image :src="require('@/components/images/wei.jpg')" ></el-image>
                </el-col>
            </el-row>

            <!-- <el-divider></el-divider> -->

            <!-- Page Three -->
            <el-row>
                <el-col :span="24">
                    <div class="text item"><i class="el-icon-date"></i> 2022-02-19</div>
                    <div class="text item"><i class="el-icon-time"></i> 16：00 入場</div>
                    <div class="text item"><i class="el-icon-time"></i> 16：30 證婚</div>
                    <div class="text item"><i class="el-icon-time"></i> 17：30 晚宴</div>
                    <div class="text item"><i class="el-icon-map-location"></i>
                        <el-link type="success" href="https://www.google.com.tw/maps/place/421%E5%8F%B0%E4%B8%AD%E5%B8%82%E5%90%8E%E9%87%8C%E5%8D%80%E6%9C%88%E6%B9%96%E8%B7%AF85%E5%B7%B73%E8%99%9F/@24.3138207,120.7014455,15.5z/data=!4m5!3m4!1s0x346910092e4b6d45:0x2fbb08daf7ef0439!8m2!3d24.3145471!4d120.7067843?hl=zh-TW">台中市后里區月湖路85巷</el-link>
                    </div>
                </el-col>
            </el-row>

            <!-- Page Four -->
            <el-row>
                <el-col>
                    <el-image :src="require('@/components/images/both.jpg')"></el-image>
                </el-col>
            </el-row>
            
            <el-row>
                <el-col>

                    <div><h2>誠摯邀請</h2></div>
                    <div><h2>出席請填寫以下訊息以便統計人數唷</h2></div>
                    
                    <el-descriptions class="margin-top" :column="1" :size="size" border>
                        <template #extra>
                        </template>
                        <el-descriptions-item>
                            <template #label > <i class="el-icon-user"></i><span class="text">姓名</span></template>
                            <el-input v-model="cus_name" placeholder="姓名" clearable />
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label> <i class="el-icon-knife-fork"></i> <span class="text">葷食</span> </template>
                            <el-input-number v-model="adults" :min="0" :max="10" placeholder="葷食" />
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label> <i class="el-icon-fork-spoon"></i> <span class="text">素食</span> </template>
                            <el-input-number v-model="vegetarian_diet" :min="0" :max="this.adults + this.children" placeholder="素食" />
                        </el-descriptions-item>
                        
                        <el-descriptions-item>
                            <template #label> <i class="el-icon-bicycle"></i> <span class="text">小孩</span> </template>
                            <el-input-number v-model="children" :min="0" :max="10" placeholder="人數" />
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template #label> <i class="el-icon-chat-dot-round"></i> <span class="text">備註</span>  </template>
                            <el-input v-model="remark" type="textarea" maxlength="30" placeholder="備註" clearable show-word-limit />
                        </el-descriptions-item>
                    </el-descriptions>
                    <el-button type="success" class="btn-lg" style="margin-top:10px">送出<i class="el-icon-position "></i></el-button>

                </el-col>
            </el-row>

        </el-main>
    </el-container>
</template>

<script>
export default {
  name: 'Wedding',
  props: {},
  data() {
      return {
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

*{
    font-family: "HanyiSentyJournal", Arial;
}

.el-main{
    padding: 1px;
}
h3 {
  margin: 20px 0 0;
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

.big-text {
  font-size: 26px;
}

.text {
  font-size: 22px;
}

.item {
  padding: 8px 0;
}

.box-card {
  width: 100%;
}
.el-row{
    margin-top: 0px;
}
.el-divider--horizontal{
    margin: 10px 0;
}
.el-link.el-link--success{
    font-size: 22px;
}

/* .el-descriptions__body{
    font-size: 18px;
}

td {
    min-width: 100px;
} */
</style>
