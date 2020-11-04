<template>
  <div class="split-content">
    <div class="leftside">
<slot name="leftside"></slot>
    </div>
    <div class="rightside">
<slot name="rightside"></slot>
    </div>
      
      
  </div>
</template>

<script>
export default {
name:'ContentSpliter',
}
</script>

<style>
.split-content {
    display: grid;
    grid-template-columns: 50% 50%;
    height: 100%;
}
.leftside {
  display: flex;
}
.rightside {
  display: flex;
  margin-left: 0.6rem;
}
</style>