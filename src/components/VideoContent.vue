<template>
  <div>
    <video autoplay muted loop id="videoPromo">
      <source :src="`http://${host}:8111/${videos[0].rutaVideo}`" type="video/mp4" />
    </video>
    <div class="content">
      <div class="promo-description">
 <slot name="description"></slot>
      </div>
     
      <slot name="linkCategory"></slot>
    </div>
    
  </div>
</template>

<script>
import {mapGetters,} from 'vuex';
export default {
  name: "VideoContent",
  data(){
  return {

    host: window.location.hostname,
  }
},

computed:{
...mapGetters({
videos:'videos'
})
},
};
</script>

<style >
#videoPromo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

.content {
  position: fixed;
  bottom: 0;
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
  text-align: center;
}
.promo-description {
  font-family: "SamsungOne";
  font-size: 55px;
}

a {
  color: #f1f1f1;
  text-decoration: none;
  font-family: "SamsungSharp";
  font-size: 38px;
  font-weight: bold;
}
</style>
