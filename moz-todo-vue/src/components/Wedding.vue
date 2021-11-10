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
                    <el-image :src="require('@/components/images/p1.jpg')" ></el-image>
                </el-col>
            </el-row>

            <!-- Page Two -->
            <el-row>
                <el-col :offset="4" :span="8">
                    <h2>新郎</h2>
                    <div class="big-text item">施韋男</div>
                    <el-divider></el-divider>

                    <div><h3>主婚人</h3></div>
                    <el-divider></el-divider>
                    <div class="text item">施滿郎</div>
                    <div class="text item">李麗萍</div>
                </el-col>

                <el-col :span="8">
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
                    <el-image :src="require('@/components/images/p2.jpg')" ></el-image>
                </el-col>
            </el-row>

            <!-- <el-divider></el-divider> -->

            <!-- Page Three -->
            <el-row>
                <el-col :span="24">
                    <div class="text item"><i class="el-icon-date"></i> 2022-02-19</div>
                    <div class="text item"><i class="el-icon-time"></i> 16：00 入場</div>
                    <div class="small-text item">我們有準備小點心，太晚到就吃不到囉</div>
                    <div class="text item"><i class="el-icon-time"></i> 16：30 證婚</div>
                    <div class="text item"><i class="el-icon-time"></i> 17：30 晚宴</div>
                    <div class="small-text item">我們的餐點是自助式的喔</div>
                    <div class="small-text item">我們全程都是在戶外，記得保暖喔</div>
                    <div class="text item"><i class="el-icon-map-location big-text"></i></div>
                    <div class="text item">
                        <el-link href="https://www.google.com.tw/maps/place/421%E5%8F%B0%E4%B8%AD%E5%B8%82%E5%90%8E%E9%87%8C%E5%8D%80%E6%9C%88%E6%B9%96%E8%B7%AF85%E5%B7%B73%E8%99%9F/@24.3138207,120.7014455,15.5z/data=!4m5!3m4!1s0x346910092e4b6d45:0x2fbb08daf7ef0439!8m2!3d24.3145471!4d120.7067843?hl=zh-TW">台中市后里區月湖路85巷</el-link>
                    </div>
                </el-col>
            </el-row>

            <!-- Page Four -->
            <el-row>
                <el-col>
                    <el-image :src="require('@/components/images/p3.jpg')"></el-image>
                </el-col>
            </el-row>
            
            <el-row>
                <el-col>

                    <div class="big-text">誠摯邀請您與您的家人</div>
                    <div class="big-text">出席請填寫以下訊息</div>
                    <div class="big-text">以便統計人數唷</div>
                    
                    <el-descriptions class="margin-top" :column="2" border direction="vertical">
                        <el-descriptions-item label-align="center" align="center" class="el-td"> 
                            <template #label > <i class="el-icon-user text"></i><span class="text">姓名</span></template>
                            <el-input v-model="cus_name" placeholder="姓名" clearable />
                        </el-descriptions-item>
                        <el-descriptions-item label-align="center" align="center" class="el-td">
                            <template #label> <i class="el-icon-knife-fork text"></i> <span class="text">葷食</span> </template>
                            <el-input-number v-model="adults" :min="0" :max="10" placeholder="人數" />
                        </el-descriptions-item>
                        <el-descriptions-item label-align="center" align="center" class="el-td">
                            <template #label> <i class="el-icon-fork-spoon text"></i> <span class="text">素食</span> </template>
                            <el-input-number v-model="vegetarian_diet" :min="0" :max="10" placeholder="人數" />
                        </el-descriptions-item>
                        
                        <el-descriptions-item label-align="center" align="center" class="el-td">
                            <template #label> <i class="el-icon-bicycle text"></i> <span class="text">小孩</span> </template>
                            <el-input-number v-model="children" :min="0" :max="10" placeholder="人數" />
                        </el-descriptions-item>
                        <el-descriptions-item label-align="center" align="center" class="el-td">
                            <template #label> <i class="el-icon-chat-dot-round text"></i> <span class="text">備註</span>  </template>
                            <el-input v-model="remark" type="textarea" maxlength="30" placeholder="備註" clearable show-word-limit />
                        </el-descriptions-item>
                    </el-descriptions>

                    <el-button type="success" class="btn-lg text w-100" style="margin-top:10px" @click="submit" :loading="has_submit">送出<i class="el-icon-position "></i></el-button>

                </el-col>
            </el-row>

        </el-main>
    </el-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Wedding',
  props: {},
  data() {
      return {
          cus_name: "",
          adults: 0,
          vegetarian_diet: 0,
          children: 0,
          remark: "",
          response: "",
          has_submit: false
      }
  },
  methods: {
    submit: async function() {
        if (this.cus_name == ""){
          this.$notify({
              title: '請稍後',
              message: '煩請留下您的大名',
              type: 'warning'
          });
          return;
        }

        this.has_submit = true;

        var headers = {};
        headers["cus-name"] = this.cus_name;
        headers["adults"] = this.adults;
        headers["vegetarian-diet"] = this.vegetarian_diet;
        headers["children"] = this.children;
        headers["remark"] = this.remark;

        this.response = await axios.post('http://13.90.199.6:5080/db/invite', {}, {headers: headers})
            .then(function(response) {
                return response;
                
                
            })
            .catch(function (response) {
                return response;
                
        });
    }
  },
  watch: {
      response: function() {
        if(this.response.status == 200)
            this.$notify({
                title: '完成',
                message: '我們收到您的資訊了，謝謝',
                type: 'success'
            });
        else
            this.$notify({
                title: '糟糕',
                message: '似乎發生了些問題，請稍後再嘗試',
                type: 'warning'
            });
        this.has_submit = false;
        this.cus_name =  "";
        this.adults =  0;
        this.vegetarian_diet =  0;
        this.children =  0;
        this.remark =  "";
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

.el-td{
    padding: 12px 0px;
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


h2{
    font-size: 64px;
}

h3{
    font-size: 48px;
    margin: 20px 0 0;
}

.small-text {
    font-size: 36px;
}

.text {
    font-size: 48px;
}

.big-text {
    font-size: 54px;
}

.el-link.el-link--default{
    font-size: 48px;
    text-decoration: underline;
}


@media screen and (max-width: 420px) {  
    h2{
        font-size: 1.5em;
    }

    h3{
        font-size: 1.7em;
        margin: 20px 0 0;
    }

    .small-text {
        font-size: 18px;
    }

    .text {
        font-size: 22px;
    }

    .big-text {
        font-size: 26px;
    }

    .el-link.el-link--default{
        font-size: 22px;
    }
}

@media screen and (max-width: 800px) {
    h2{
        font-size: 24px;
    }
    h3{
        font-size: 1.7em;
        margin: 20px 0 0;
    }

    .small-text {
        font-size: 18px;
    }

    .text {
        font-size: 22px;
    }

    .big-text {
        font-size: 26px;
    }

    .el-link.el-link--default{
        font-size: 22px;
    }
}

/* .el-descriptions__body{
    font-size: 18px;
}

td {
    min-width: 100px;
} */
</style>
