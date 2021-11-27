<template>
  <div>
    <div class="publishElement">
        <label for="Docid">Document ID</label>
        <input name="Docid" type="text" v-model="documentID">
    </div>

    <div class="publishElement">
        <label for="id">ID</label>
        <input name="id" type="number" v-model="blogData.id">
    </div>

    <div class="publishElement">
        <label for="p1">Paragraph1</label>
        <input name="p1" type="text" v-model="blogData.paragraph1">
    </div>

    <div class="publishElement">
        <label for="image1">Image1</label>
        <input name="image1" type="text" v-model="blogData.image1">
    </div>

    <div class="publishElement">
        <label for="p2">Paragraph2</label>
        <input name="p2" type="text" v-model="blogData.paragraph2">
    </div>

    <div class="publishElement">
        <label for="p3">Paragraph3</label>
        <input name="p3" type="text" v-model="blogData.paragraph3">
    </div>

    <div class="publishElement">
        <label for="image2">Image2</label>
        <input name="image2" type="text" v-model="blogData.image2">
    </div>

    <div class="publishElement">
        <label for="url1">URL1</label>
        <input name="url1" type="text" v-model="blogData.url1">
    </div>

    <div class="publishElement">
        <label for="p4">Paragraph4</label>
        <input name="p4" type="text" v-model="blogData.paragraph4">
    </div>

    <div class="publishElement">
        <label for="image3">Image3</label>
        <input name="image3" type="text" v-model="blogData.image3">
    </div>

    <div class="publishElement">
        <label for="url2">URL2</label>
        <input name="url2" type="text" v-model="blogData.url2">
    </div>

    <div class="publishElement">
        <label for="p5">Paragraph5</label>
        <input name="p5" type="text" v-model="blogData.paragraph5">
    </div>

    <div class="publishElement">
        <label for="image4">Image4</label>
        <input name="image4" type="text" v-model="blogData.image4">
    </div>

    <div class="publishElement">
        <label for="code1">Code1</label>
        <input name="code1" type="text" v-model="blogData.code1">
    </div>

    <div class="publishElement">
        <label for="p6">Paragraph6</label>
        <input name="p6" type="text" v-model="blogData.paragraph6">
    </div>

    <div class="publishElement">
        <label for="image5">Image5</label>
        <input name="image5" type="text" v-model="blogData.image5">
    </div>

    <div class="publishElement">
        <label for="code2">Code2</label>
        <input name="code2" type="text" v-model="blogData.code2">
    </div>

    <div class="publishElement">
        <label for="p7">Paragraph7</label>
        <input name="p7" type="text" v-model="blogData.paragraph7">
    </div>

    <button class="publishButton" @click="publishJSONCustID" type="submit">Publish</button>

    <!-- <button @click="getData">Get Data</button> -->

    <!-- <div v-for="{id, paragraph1,paragraph2,paragraph3,paragraph4,paragraph5,paragraph6,paragraph7,image1, image2,image3,image4,image5,code1,code2,url1,url2} in posts" :key="id"> -->
        <!-- <p>{{id}}</p>
        <p>{{paragraph1}}</p>
        <img class="image" id="image" v-bind:src="image1" alt="">
        <img class="image" id="image" v-bind:src="image2" alt=""> -->
        <!-- <h1>{{paragraph1}}</h1>
        <img class="image" id="image" v-bind:src="image1" alt="">
        <p class="p2">{{paragraph2}}</p>
        <p class="p2">{{paragraph3}}</p>
        <img class="image" id="image" v-bind:src="image2" alt="">
        <a v-bind:href="url1" target="_blank">{{url1}}</a>
        <p class="p2">{{paragraph4}}</p>
        <img class="image" id="image" v-bind:src="image3" alt="">
        <a v-bind:href="url2" target="_blank">{{url2}}</a>
        <p class="p2">{{paragraph5}}</p>
        <img class="image" id="image" v-bind:src="image4" alt="">
        <code v-if="code1">{{code1}}</code>
        <p class="p2">{{paragraph6}}</p>
        <img class="image" id="image" v-bind:src="image5" alt="">
        <code v-if="code2">{{code2}}</code>
        <p class="p2">{{paragraph7}}</p>
    </div> -->
  </div>
</template>

<script>
import {createPost, createPostCustID, useLoadPosts} from '../firebase.js'
export default {
    data(){
        return{
            blogData: {
                id: 0,
                paragraph1: '',
                paragraph2: '',
                paragraph3: '',
                paragraph4: '',
                paragraph5: '',
                paragraph6: '',
                paragraph7: '',
                image1: '',
                image2: '',
                image3: '',
                image4: '',
                image5: ''
            },
            documentID: ''
        }
    },
    methods:{
        publishJSON(){
            createPost(this.blogData)
        },
        publishJSONCustID(){
            createPostCustID(this.documentID, this.blogData)
            alert("Post Published")
        }
        // ,
        // getData(){
        //     const posts = useLoadPosts()
        //     console.log(posts)
        //     return {posts}
        // }
    },
    setup(){
        const posts = useLoadPosts()
        console.log(posts)
        return {posts}
    }
}
</script>

<style>
.publishElement{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px;
}

.publishButton{
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 5px;
    padding-top: 5px;
    cursor: pointer;
    color: #03DAC6;
    background-color: #121212;
    border-radius: 15px;
    border-collapse: #121212;
}

</style>