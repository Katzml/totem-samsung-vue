import Vue from "vue";
import Vuex from "vuex";
import {
  getVideos,
  getCategories,
  getProviders,
  getProviderByID,
  getProvidersByName,
  getProvidersByCategory
} from "./api";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    activeCategory: "",
    timeOut:0,
    videos:[],
    categories: [],
    providersData2:[
    ]
  },
  mutations: {
    setCategories: (state, categories) => state.categories = categories,
    setActiveCategory: (state, activeCategory) => state.activeCategory = activeCategory,
    setVideos: (state,videos) => state.videos = videos,
    setProviders: (state, providers) => state.providersData2 = providers
  },
  getters: {
    categories: state => state.categories,
    activeCategory: state => state.activeCategory,
    videos: state => state.videos.data,
    providers: state => state.providersData2
  },
  actions: {
    getVideos: ({ commit }) => {
      getVideos()
        .then(response => commit('setVideos', response.data));
    },

    getCategories: ({ commit }) => {
      getCategories()
        .then(response => commit('setCategories', response.data));
    },
    getProviders:({commit})=>getProviders().then(response=> commit('setProviders', response.data)),

    getProviderByID:({commit}, id)=>getProviderByID(id).then(response=>commit('setProviders', response.data)),

    getProvidersByName:({commit},providerName)=>getProvidersByName(providerName).then(response=>commit('setProviders',response.data)),

    getProvidersByCategory:({commit, state})=>{
      getProvidersByCategory(state.activeCategory)
      .then(response => commit('setProviders',response.data))
    }
  },
});
