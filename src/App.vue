<template>
<link href="https://fonts.googleapis.com/css?family=Cardo:400,700|Oswald" rel="stylesheet">
  <div class="nav" id="nav">
    <img src="./assets/DevSpotLogo.png" alt="">
    <router-link class="navElement" to="/">Home</router-link> |
    <!-- <router-link class="navElement" to="/about">About</router-link> | -->
    <router-link class="navElement" to="/blog">Blog</router-link> |
    <router-link class="navElement" to="/publish">Publish</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}


h1, h2, h3, h4, h5, h6, p {
 font-family: 'Oswald', sans-serif;
 text-transform: uppercase;
}


.nav{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.nav img{
  width: 100px;
  border-radius: 500px;
  position: relative;
}

.navElement{
  padding-left: 10px;
  padding-right: 10px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
