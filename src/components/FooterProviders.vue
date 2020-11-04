<template>
  <div class="footer-providers">
    <ContentSpliter>
      <template slot="leftside">
        <div @click="$router.go(-1)" class="footer-links">
          <p class="title">
            <span>
              <img class="footer-arrow" src="../assets/leftarrow.png" />
            </span>
            {{ footerText }}
          </p>
        </div>
      </template>
      <template slot="rightside" class="rightside">
        <div @click="$router.push('/')" class="footer-links">
  
          <p class="title--r"> Volver al inicio 🏠</p>
         
        </div>
      </template>
    </ContentSpliter>
  </div>
</template>

<script>
import ContentSpliter from "@/components/ContentSpliter.vue";
export default {
  name: "FooterProviders",
  components: {
    ContentSpliter,
  },
  data() {
    return {
   host: window.location.hostname,

    };
  },
  props: {
    footerText: String,
  },
};
</script>

<style>
.footer-providers {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: left;
  font-family: "SamsungOne";
  font-size: 40px;
}
.footer-arrow {
  width: 30px;
  margin-left: 2rem;
}
.footer-close {
  height: 100px;
  margin-top: 2rem;
}
.footer-links {
  height: 100px;
  width: 100%;
}
.title--r {
  padding-top: 0.4rem;
  margin-left: 9rem;
}
</style>
