<template>
  <div class="providers">
    <LayoutProviders
      :titleLayout="'DISTRIBUIDORES'"
      :footerText="'Volver hacia carousel'"
    >
      <template slot="content">
        <div class="providers-content">
          <ContentSpliter>
            <template slot="leftside">
              <GenericList>
                <template>
                  <div
                    v-for="catinfo in categories.data"
                    :key="catinfo._id"
                    @click="setActiveCategory(catinfo._id)"
                    class="list-item"
                  >
                    <div>
                      <GenericItem
                        :src_img="[
                          activeCategory == catinfo._id
                            ? `http://${host}:8111${
                                catinfo.icon.split('.')[0]
                              }-carousel.png`
                            : `http://${host}:8111${
                                catinfo.icon.split('.')[0]
                              }.png`,
                        ]"
                        :text_title="catinfo.nombre"
                        :isMenu="true"
                      />
                    </div>

                    <div
                      :class="[
                        activeCategory == catinfo._id
                          ? 'list-item--active'
                          : '',
                      ]"
                    ></div>
                  </div>
                </template>
              </GenericList>
            </template>
            <template slot="rightside">
              <div class="providers-rightside">
                <div class="search-container">
                  <span>
                    <!-- <i class="fa fa-search"></i> -->
                    <input
                      type="text"
                      placeholder="Buscar por nombre"
                      v-model="providerName"
                      @input="populateByname()"
                    />
                  </span>
                </div>
                <div class="list-providers--scrollbox">
                  <ul class="list-providers">
                    <li v-for="provider in localProviders" :key="provider._id">
                      <div class="list-item--providers">
                        <router-link
                          :to="{
                            path: '/providerdetail',
                            name: 'providerdetail',
                            params: {
                              ID: provider._id,
                            },
                          }"
                        >
                          <GenericItem
                            :src_img="`http://${host}:8111${provider.urlLogo}`"
                            :text_title="provider.nombreEmpresa"
                            :isProviderList="true"
                          >
                            <template>
                              <p>Direccion: {{ provider.direccion }}</p>

                              <p>
                                Mas detalles de este proveedor
                                <span>
                                  <img
                                    src="../assets/rightarrow.png"
                                    height="25px"
                                  />
                                </span>
                              </p>
                            </template>
                          </GenericItem>
                        </router-link>
                      </div>
                      <div class="list-providers__content-line"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
          </ContentSpliter>
        </div>
      </template>
    </LayoutProviders>
  </div>
</template>

<script>
import LayoutProviders from "@/components/LayoutProviders.vue";
import ContentSpliter from "@/components/ContentSpliter.vue";
import GenericList from "@/components/GenericList.vue";
import GenericItem from "@/components/GenericItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "providers",
  components: {
    GenericList,
    GenericItem,
    LayoutProviders,
    ContentSpliter,
  },
  data() {
    return {
       host: window.location.hostname,
      localProviders: [],
      providerName: "",
    };
  },
  computed: {
    ...mapGetters({
      activeCategory: "activeCategory",
      categories: "categories",
      providers: "providers",
    }),
  },
  methods: {
    getCategories() {
      return this.$store.dispatch("getCategories");
    },
    getProviders() {
      return this.$store.dispatch("getProviders");
    },
    getProvidersByCategory() {
      return (this.localProviders = this.providers.data.filter((provider) => {
        return provider.categorias.find(
          (category) => category == this.activeCategory
        );
      }));
    },
    getProvidersByName() {
      // await this.$store.dispatch("getProvidersByName", this.providerName);
      this.localProviders = this.providers.data.filter((provider) => {
        return provider.nombreEmpresa
          .toLowerCase()
          .startsWith(this.providerName.toLowerCase());
      });
    },
    async populateByname() {
      await this.getProvidersByName();
    },
    async setActiveCategory(activeCategory) {
      await this.$store.commit("setActiveCategory", activeCategory);
      return this.getProvidersByCategory();
    },
  },
  async mounted() {
    await this.getCategories();
    await this.getProviders();
    this.getProvidersByCategory();
  },
};
</script>
<style scoped>
.providers {
  margin: 0;
  box-sizing: border-box;
}

.list-providers {
  padding: 0;
  list-style-type: none;
  font-family: "SamsungSharp";
  font-size: 20px;
  color: black;
}

.list-providers__content-line {
  height: 0.3rem;
  width: 100%;
  background-color: #888888;
}
.list-providers--scrollbox {
  width: 506px;
  height: 1300px;
  overflow: scroll;
  overflow-x: hidden;
  border-radius: 3px;
  border: 1px solid #888888;
  padding: 10px;
  box-shadow: 3px 3px 3px 3px #888888;
}
.list_providers--img img {
  min-height: 100px;
}
.list-item {
  width: 6rem;
  margin-bottom: 2rem;
}
.list-item img {
  height: 100px;
}
.list-item--active {
  display: block;
  height: 0.4rem;
  width: 100%;
  margin: 0.2rem;
  background: #0c4da2;
}
.providers-rightside {
  flex-direction: column;
}
.providers-content {
  margin-top: 4rem;
}
.search-container {
  box-sizing: border-box;
  max-width: 500px;
}
.search-container input[type="text"] {
  padding: 10px;
  font-size: 17px;
  border-radius: 4px;
  border: 1px solid grey;
  font-family: "SamsungSharp";
  float: left;
  width: 506px;
  height: 3rem;
  margin-bottom: 1rem;

  background: #f1f1f1;
}

.search-container i {
  float: left;
  width: 10%;
  padding: 12px;
  background: #0c4da2;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
}

.search-container button:hover {
  background: #0b7dda;
}

.search-container::after {
  content: "";
  clear: both;
  display: table;
}

::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-track {
  border: 1px solid #0c4da2;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #0c4da2;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #0b7dda;
}
</style>
