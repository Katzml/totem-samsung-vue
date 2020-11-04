<template>
  <div id="carousel">
    <div class="carousel-header">
      <TitleContent
        class="carousel-header--item"
        :title="'SELECCIONE LÍNEA DE PRODUCTOS'"
        :hasArrow="true"
      />
      <GenericList :isHorizontal="true">
        <template>
          <div @click="setActiveCategory(categories.data[0]._id)" class="category-item-title">
            <GenericItem
              :src_img="`http://${host}:8111/img/categoria/mobile${sliderValue==0?'-providers':''}.png`"
              text_title="MOBILE"
              :isMenu="true"
            />
            <div :class="[sliderValue == 0 ? 'carousel-item--active' : '']"></div>
          </div>
          <div @click="setActiveCategory(categories.data[1]._id)">
            <GenericItem
              :src_img="`http://${host}:8111/img/categoria/tvav${sliderValue==1?'-providers':''}.png`"
              text_title="TV & AT"
              :isMenu="true"
            />
            <div :class="[sliderValue == 1 ? 'carousel-item--active' : '']"></div>
          </div>
          <div @click="setActiveCategory(categories.data[2]._id)">
            <GenericItem
              :src_img="`http://${host}:8111/img/categoria/lineablanca${sliderValue==2?'-providers':''}.png`"
              text_title="LÍNEA BLANCA"
              :isMenu="true"
            />
            <div :class="[sliderValue == 2 ? 'carousel-item--active' : '']"></div>
          </div>
          <div @click="setActiveCategory(categories.data[3]._id)">
            <GenericItem
              :src_img="`http://${host}:8111/img/categoria/it${sliderValue==3?'-providers':''}.png`"
              text_title="IT"
              :isMenu="true"
            />
            <div :class="[sliderValue == 3 ? 'carousel-item--active' : '']"></div>
          </div>
        </template>
      </GenericList>
    </div>
    <div class="carousel-body">
      <Slider
        class="carousel-sizes"
        animation="normal"
        v-model="sliderValue"
        :control-btn="false"
        :duration="5000"
        :speed="2000"
        :height="'1610px'"
        :width="'100%'"
      >
        <SliderItem v-for="(i, index) in list" :key="index" :style="i">
          <div class="carousel-textcontent" @click="setActiveCategory(categories.data[index]._id)">
            <p class="category-title">{{categories.data[index].nombre }}</p>
            <div class="category-container__list">
              <ul class="category-list__content">
                <li v-for="catinfo in categories.data[index].caracteristicas" :key="catinfo.nombre">> {{ catinfo }}</li>
                <li>
                  <div class="category-list-content_line"></div>
                </li>
              </ul>
              <p class="category-link__providers">
                <router-link
                  to="/providers"
                >
                REVISA LOS PROVEEDORES AQUI!</router-link>
              </p>
            </div>
          </div>
        </SliderItem>
      </Slider>
    </div>
  </div>
</template>
<script>
import { Slider, SliderItem } from "vue-easy-slider";
import { mapGetters } from "vuex";
import TitleContent from "@/components/TitleContent.vue";
import GenericList from "@/components/GenericList.vue";
import GenericItem from "@/components/GenericItem.vue";

export default {
  name: "Carousel",
  components: {
    GenericList,
    GenericItem,
    TitleContent,
    Slider,
    SliderItem,
  },
  data() {
    return {
      list: [],
      sliderValue: 2,
      isActive: true,
      categoriesInfo: [],
      host: '104.131.86.178'
      // host: window.location.hostname,
    };
  },
  methods: {
    setActiveCategory(activeCategory) {
      this.$store.commit("setActiveCategory", activeCategory);
      return this.$router.push('/providers')
    },
    getCategories() {
      return this.$store.dispatch("getCategories");
    },
    changeIndex(index) {
      this.sliderValue = index;
    },
  },
  computed: {
    ...mapGetters({
      categories: "categories",
      activeCategory: "activeCategory",
    }),
  },
  async mounted() {
    await this.getCategories();
    setTimeout(
      () =>
        this.categories.data.forEach((category) => {
          this.list.push({
            backgroundColor: "#000",
            backgroundImage:
              "url('http://" + this.host + ":8111" + category.rutaFoto + "')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            opacity: "rgba(116, 108, 108, 0.5)",
          });
        }),
      2000
    );
  },
};
</script>

<style>
.slider-items {
  margin: 0%;
  padding: 0%;
}
.carousel-sizes {
  margin: 0%;
  padding: 0%;
  display: block;
  overflow-y:hidden !important;
}
.carousel-header {
  display: grid;
  grid-template-columns: 50% 50%;
}
.category-item-title {
  font-family: "SamsungSharp";
}
.carousel-textcontent {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.carousel-item--active {
  display: block;
  height: 0.4rem;
  width: 60%;
  margin: 0.2rem;
  background: #000;
}
.category-title {
  margin: 0;
  text-align: center;
  color: #fff;
  line-height: 280px;
  font-family: "SamsungSharp";
  font-size: 6rem;
}
.category-container__list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 6rem;
}
.category-list__content {
  color: #fff;
  list-style-type: none;
  font-family: "SamsungSharp";
  font-size: 40px;
}
.category-list-content_line {
  height: 1.3rem;
  width: 100%;
  background-color: #fff;
}
</style>
