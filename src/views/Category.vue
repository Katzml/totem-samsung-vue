<template>
  <div class="category">
     <LogoSamsung/>
   <Carousel/>
  </div>
</template>
<script>
import LogoSamsung from '@/components/LogoSamsung.vue'
import Carousel from '@/components/Carousel.vue'
export default {
  name: 'Category',
  components: {
    LogoSamsung,
    Carousel
  },
  methods:{

  },

  async mounted(){
    await setTimeout(()=>this.$router.push('/'),200000)
  }
}
</script>
