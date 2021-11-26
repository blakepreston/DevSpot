<template>
    <h2>Blog</h2>
  <!-- <div class="blogContainer">
      <div class="blogCards" v-for="(items, index) in blogPost.BlogPosts" v-bind:key="items" @click="RedirectBlog(index)">
        <p>{{blogPost.BlogPosts[index].paragraph1}}</p>
        <img class="image" id="image" v-bind:src="blogPost.BlogPosts[index].image1" alt="">
      </div>
  </div> -->

    <div class="blogContainer">
       <div class="blogCards" v-for="{id, paragraph1,image1} in posts" :key="id" @click="RedirectBlog(id)">
            <p>{{paragraph1}}</p>
            <img class="image" id="image" v-bind:src="image1" alt="">
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
import blogPostData from "/blogData.json"
export default {
    data(){
        return{
            blogPost: blogPostData
        }
    },
    methods:{
        RedirectBlog(id){
            //console.log(this.blogPost.BlogPosts[id].id)
            console.log(this.posts[id].id);
            this.$router.push({name: 'BlogPage',  params: {id:this.posts[id].id}})
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
.blogContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}

.blogCards{
    width: 40vw;
    margin-top: 5vh;
    margin: 20px;
    border: 1px solid #33f1a8;
    box-shadow: rgba(0, 0, 0, 0.164) 0px 5px 15px;
    border-radius: 15px;
    cursor: pointer;

    padding-bottom: 15px;
}

.image{
    width: 90%;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.164) 0px 5px 5px;
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

@media screen and (max-width: 1000px) {
    .blogCards{
        width: 80vw;
    }
}
</style>