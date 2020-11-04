<template>
  <div class="logo" :style="`background-image: url('http://${host}:8111/img/samsung/logo.png')`"></div>
</template>

<script>
export default {
name:'LogoSamsung',
data(){
  return {
    // host: window.location.hostname,
    host: '104.131.86.178'
  }
}
}
</script>

<style>
.logo {
    background-repeat: no-repeat;
    width: 100%;
    height: 4rem;
}
</style>