<template>
  <div>
    <div class="providers-header">
      <LogoSamsung />
      <div class="providers-header--titles">
<Spliter>
        <template slot="leftside">
          <div v-show="!isDetail">
            <TitleContent
              :title="'SELECCIONE LÍNEA DE PRODUCTOS'"
              :hasArrow="false"
            />
          </div>
        </template>
        <template :slot="[isDetail?'leftside':'rightside']">
          <TitleContent
            :title="titleLayout ? titleLayout : 'SELECCIONE LÍNEA DE PRODUCTOS'"
            :hasArrow="true"
          />
        </template>
      </Spliter>
      </div>
      
    </div>
    <slot name="content"></slot>
    <FooterProviders :footerText="footerText" />
  </div>
</template>

<script>
import Spliter from "@/components/ContentSpliter.vue";
import TitleContent from "@/components/TitleContent.vue";
import LogoSamsung from "@/components/LogoSamsung.vue";
import FooterProviders from "@/components/FooterProviders.vue";

export default {
  name: "LayoutProviders",
  components: {
    Spliter,
    TitleContent,
    LogoSamsung,
    FooterProviders,
  },
  props: {
    titleLayout: String,
    footerText: String,
    isDetail: Boolean,
  },
};
</script>
<style>
.providers-header--titles {
  margin-top: 3rem;
}
</style>