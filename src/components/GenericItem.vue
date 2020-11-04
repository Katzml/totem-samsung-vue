<template>
  <li :class="{'item':isMenu}" class="list-providers"><img :src="src_img" :class="{'list_providers--img':isProviderList}">
  <p :class="{'list_providers--text':isProviderList}">{{text_title}}</p>
  <slot></slot>
  </li>
</template>

<script>
export default {
    name: 'GenericItem',
    props: {
        src_img: String,
        text_title: String,
        isMenu:{
          type:Boolean,
          default: false
        },
        isProviderList:{
          type:Boolean,
          default: false
        }
    }
}
</script>
<style>
.item {
margin-right: 2rem;
font-family: "SamsungSharp";
text-align: center;
}
.item  img{
height: 120px;
max-width: 100px;
}
.list_providers--img {
height: 5.3em;
}
.list_providers--img.img{
min-height: 5.3em;
}

.list_providers {
font-family: "SamsungSharp";
}

</style>