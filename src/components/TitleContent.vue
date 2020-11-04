<template>
  <div>
      <p class="title-content">{{title}}
    <span v-if="hasArrow"><img src="../assets/rightarrow.png"></span>
    </p>
  </div>
</template>

<script>
export default {
name: 'TitleContent',
props: {
  title:String,
    hasArrow:{
        type: Boolean,
        default: false
    }
}
}
</script>

<style>
.title-content {
  text-transform: uppercase;
  font-family: "SamsungOne";
  font-size: 50px;
  margin-left: 1rem;
  
}
</style>