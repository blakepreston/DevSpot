<template>
  <div class="home">
    <h1>Welcome to DevSpot</h1>
    <p>DevSpot is a blog that provides useful information for developers from junior levels to senior. As developers we are always
      in the process of learning. <br>
      This blog will provide short form code tips to long form project based walkthroughs. <br>
    </p>
    <img src="../assets/DevSpotBannerThin.png" alt="">
    <p>Check out our other pages on Youtube, Instagram, and Twitter!</p>
    
    <div class="socialMedia">
      <a href="https://www.youtube.com/channel/UCU2av3FTxXGEnJYPnrjv9Uw" target="_blank"><img src="../assets/youtube.png" alt=""></a>
      <a href="" target="_blank"><img src="../assets/twitter.png" alt=""></a>
      <a href="" target="_blank"><img src="../assets/instagram.png" alt=""></a>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style scoped>
img{
  margin-top: 15px;
  width: 40vw;
  border-radius: 15px;
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
    img{
      width: 80vw;
    }
}
</style>