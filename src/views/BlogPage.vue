<template>
  <div class="blogPostContainer">
    <h1>Blog Page</h1>
    <p>{{blogPost.BlogPosts[this.$route.params.id - 1].paragraph1}}</p>
    <img class="image" id="image" v-bind:src="blogPost.BlogPosts[this.$route.params.id - 1].image1" alt="">
    <p class="p2">{{blogPost.BlogPosts[this.$route.params.id - 1].paragraph2}}</p>
    <p class="p2">{{blogPost.BlogPosts[this.$route.params.id - 1].paragraph3}}</p>
    <img class="image" id="image" v-bind:src="blogPost.BlogPosts[this.$route.params.id - 1].image2" alt="">
    <a v-bind:href="url1" target="_blank">{{blogPost.BlogPosts[this.$route.params.id - 1].url1}}</a>
    <p class="p2">{{blogPost.BlogPosts[this.$route.params.id - 1].paragraph4}}</p>
    <img class="image" id="image" v-bind:src="blogPost.BlogPosts[this.$route.params.id - 1].image3" alt="">
    <a v-bind:href="url2" target="_blank">{{blogPost.BlogPosts[this.$route.params.id - 1].url2}}</a>
    <p class="p2">{{blogPost.BlogPosts[this.$route.params.id - 1].paragraph5}}</p>
    <img class="image" id="image" v-bind:src="blogPost.BlogPosts[this.$route.params.id - 1].image4" alt="">
    <code v-if="blogPost.BlogPosts[this.$route.params.id - 1].code1">{{blogPost.BlogPosts[this.$route.params.id - 1].code1}}</code>
    <p class="p2">{{blogPost.BlogPosts[this.$route.params.id - 1].paragraph6}}</p>
    <img class="image" id="image" v-bind:src="blogPost.BlogPosts[this.$route.params.id - 1].image5" alt="">
    <code v-if="blogPost.BlogPosts[this.$route.params.id - 1].code2">{{blogPost.BlogPosts[this.$route.params.id - 1].code2}}</code>
    <p class="p2">{{blogPost.BlogPosts[this.$route.params.id - 1].paragraph7}}</p>
  </div>

  <div class="socialMedia">
      <a href="https://www.youtube.com/channel/UCU2av3FTxXGEnJYPnrjv9Uw" target="_blank"><img src="../assets/youtube.png" alt=""></a>
      <a href="" target="_blank"><img src="../assets/twitter.png" alt=""></a>
      <a href="" target="_blank"><img src="../assets/instagram.png" alt=""></a>
    </div>
</template>

<script>
import blogPostData from "/blogData.json"
export default {
    data(){
        return{
            blogPost: blogPostData,
            url1: blogPostData.BlogPosts[this.$route.params.id - 1].url1,
            url2: blogPostData.BlogPosts[this.$route.params.id - 1].url2
        }
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
  background-color: #121212;
  border-radius: 15px;
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
</style>