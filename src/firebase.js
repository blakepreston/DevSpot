import firebase from 'firebase'
import {ref, onUnmounted} from 'vue'

const config = {
    apiKey: "AIzaSyAVgtgcV9t0-hBaSPHaqbnsC1gUbJk0--s",
    authDomain: "devspotblog-2df21.firebaseapp.com",
    projectId: "devspotblog-2df21",
    storageBucket: "devspotblog-2df21.appspot.com",
    messagingSenderId: "228137885226",
    appId: "1:228137885226:web:b7f8a2fc2ec54440c12d53",
    measurementId: "G-16WBGPLZ0F"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const postCollection = db.collection('posts')

export const createPost = post =>{
    return postCollection.add(post)
    //return postCollection.doc("6").set(post)
}

export function createPostCustID(custID, post){
    ///return postCollection.add(post)
    return postCollection.doc(custID).set(post)
}

export const getPost = async id => {
    const post = await postCollection.doc(id).get()
    return post.exists ? post.data() : null
}

export const deletePost = id => {
    return postCollection.doc(id).delete()
}

export const useLoadPosts = () => {
    const posts = ref([])
    const close = postCollection.onSnapshot(snapshot => {
        posts.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    })
    onUnmounted(close)
    return posts
}
