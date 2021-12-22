<template>
  <div class="blogPostContainer">
    <!-- <div v-for="{id} in posts" :key="id"> -->
    <div class="innerContainer">
      <!-- paragraph1,paragraph2,paragraph3,paragraph4,paragraph5,paragraph6,paragraph7,image1, image2,image3,image4,image5,code1,code2,url1,url2 -->
      <h1>{{this.posts[this.$route.params.id].paragraph1}}</h1>
      <img class="image" id="image" v-bind:src="this.posts[this.$route.params.id].image1" alt="">
      <p class="p2">{{this.posts[this.$route.params.id].paragraph2}}</p>

      <div class="imageCodeContainer">
        <div v-if="this.posts[this.$route.params.id].code3" class="codeContainer">
          <code v-if="this.posts[this.$route.params.id].code3">{{this.posts[this.$route.params.id].code3}}</code>
        </div>
      </div>
      
      
      <p class="p2">{{this.posts[this.$route.params.id].paragraph3}}</p>

      <div class="imageCodeContainer">
        <img class="image" id="image" v-bind:src="this.posts[this.$route.params.id].image2" alt="">
        <div v-if="this.posts[this.$route.params.id].code4" class="codeContainer">
          <code v-if="this.posts[this.$route.params.id].code4">{{this.posts[this.$route.params.id].code4}}</code>
        </div>
      </div>
      
      <!-- <a v-bind:href="posts[this.$route.params.id].url1" v-if="url1" target="_blank">{{this.posts[this.$route.params.id].url1}}</a> -->
      <a target="_blank">{{this.posts[this.$route.params.id].url1}}</a>
      <p class="p2">{{this.posts[this.$route.params.id].paragraph4}}</p>

      <div class="imageCodeContainer">
        <img class="image" id="image" v-bind:src="this.posts[this.$route.params.id].image3" alt="">
        <div v-if="this.posts[this.$route.params.id].code5" class="codeContainer">
          <code v-if="this.posts[this.$route.params.id].code5">{{this.posts[this.$route.params.id].code5}}</code>
        </div>
      </div>

      <!-- <a v-bind:href="posts[this.$route.params.id].url2" v-if="url2" target="_blank">{{this.posts[this.$route.params.id].url2}}</a> -->
      <a target="_blank">{{this.posts[this.$route.params.id].url2}}</a>
      <p class="p2">{{this.posts[this.$route.params.id].paragraph5}}</p>

      <div class="imageCodeContainer">
        <img class="image" id="image" v-bind:src="this.posts[this.$route.params.id].image4" alt="">
        <div v-if="this.posts[this.$route.params.id].code1" class="codeContainer">
          <code v-if="this.posts[this.$route.params.id].code1">{{this.posts[this.$route.params.id].code1}}</code>
        </div>
      </div>

      <p class="p2">{{this.posts[this.$route.params.id].paragraph6}}</p>

      <div class="imageCodeContainer">
        <img class="image" id="image" v-bind:src="this.posts[this.$route.params.id].image5" alt="">
        <div v-if="this.posts[this.$route.params.id].code2" class="codeContainer">
          <code v-if="this.posts[this.$route.params.id].code2">{{this.posts[this.$route.params.id].code2}}</code>
        </div>
      </div>
      
      <p class="p2">{{this.posts[this.$route.params.id].paragraph7}}</p>
      <div v-if="this.posts[this.$route.params.id].code6" class="codeContainer">
        <code v-if="this.posts[this.$route.params.id].code6">{{this.posts[this.$route.params.id].code6}}</code>
      </div>
    </div>
  </div>

  <div class="socialMedia">
      <a href="https://www.youtube.com/channel/UCU2av3FTxXGEnJYPnrjv9Uw" target="_blank"><img src="../assets/youtube.png" alt=""></a>
      <a href="https://twitter.com/devspot_blog" target="_blank"><img src="../assets/twitter.png" alt=""></a>
      <!-- <a href="" target="_blank"><img src="../assets/instagram.png" alt=""></a> -->
    </div>
</template>

<script>
import {useLoadPosts} from '../firebase.js'

export default {
    data(){
        return{
            
        }
    },
    setup(){
        const posts = useLoadPosts()
        console.log(posts)
        return {posts}
    }
}
</script>

<style>
.blogPostContainer{
  margin-bottom: 100px;
}

code{
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  color: #03DAC6;
  margin-top: 15px;
}

.codeContainer{
  background-color: #121212;
  border-radius: 15px;
  width: 50vw;
  margin-top: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.image{
  width: 30vw;
}

.p2{
  display: block;
  margin: auto;
  width: 60vw;
  text-align: left;
  padding-top: 30px;
  padding-bottom: 15px;
}

.socialMedia img{
  width: 50px;
  border-radius: 0;
  margin: 15px;
  transition-duration: .5s;
  cursor: pointer;
}

.socialMedia img:hover{
  background-color: rgb(150, 150, 150);
  border-radius: 5px;
  transition-duration: .5s;
}

.imageCodeContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 1000px) {
  .image{
    width: 70vw;
  }

  .p2{
    width: 70vw;
  }
}
</style>