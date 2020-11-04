<template>
  <div class="standby">
    <router-link to="/category">
    <VideoContent>
 <template slot="description">
        ¿QUIERES CONOCER DÓNDE COMPRAR
PRODUCTOS SAMSUNG?
      </template>
      <template slot="linkCategory">
       <p  class="link">Ingresa aqui</p>
      </template>
    </VideoContent>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import VideoContent from '@/components/VideoContent.vue';
export default {
  name: 'Standby',
  components: {
    VideoContent
  },
  methods:{
    getVideos(){
      return this.$store.dispatch('getVideos')
    },
  },
  mounted(){
    this.getVideos();
  }
}
</script>
