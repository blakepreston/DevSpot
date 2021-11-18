<template>
    <h2>Blog</h2>
  <div class="blogContainer">
      <div class="blogCards" v-for="(items, index) in blogPost.BlogPosts" v-bind:key="items" @click="RedirectBlog(index)">
        <p>{{blogPost.BlogPosts[index].paragraph1}}</p>
        <img class="image" id="image" v-bind:src="blogPost.BlogPosts[index].image1" alt="">
      </div>
  </div>
</template>

<script>
import blogPostData from "/blogData.json"
export default {
    data(){
        return{
            blogPost: blogPostData
        }
    },
    methods:{
        RedirectBlog(index){
            console.log(this.blogPost.BlogPosts[index].id)
            this.$router.push({name: 'BlogPage',  params: {id:this.blogPost.BlogPosts[index].id}})
        }
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
</style>