<template>
  <div>
    <div class="provider" :class="{ 'provider--blur': showModal == true }">
      <LayoutProviders
        :titleLayout="infoProvider.nombreEmpresa"
        :footerText="'Volver a distribuidores'"
        :isDetail="true"
      >
        <template slot="content">
          <div class="provider-info-container">
            <div class="provider-info-image">
              <img :src="`http://${host}:8111/img/${infoProvider.imgs[0]}`" />
            </div>
            <div class="provider-info-content">
              <h1 class="provider-title">{{ infoProvider.nombreEmpresa }}</h1>
              <p class="provider-text">{{ infoProvider.direccion }}</p>
              <p class="provider-text">{{ infoProvider.correo }}</p>
              <p class="provider-text">{{ infoProvider.telefono }}</p>
            </div>
            <div class="provider-info-more">
              <ContentSpliter>
                <template slot="leftside">
                  <div class="provider-rightside">
                    <img
                      :src="
                        `https://api.qrserver.com/v1/create-qr-code/?data=${infoProvider.sitioWeb +
                          '&size=300x300'}`
                      "
                      v-show="isQrLoaded"
                      @load="isQrLoaded = true"
                    />
                    <Spiner v-show="!isQrLoaded" />
                    <p>Escanea el codigo QR para obtener mas información</p>
                  </div>
                </template>
                <template slot="rightside">
                  <div class="provider-leftside">
                    <img
                      class="openmap-icon"
                      :src="`http://${host}:8111/img/openmap.png`"
                      @click="showModal = true"
                    />
                    <p>Presiona aqui para ver la ubicación de la tienda</p>
                  </div>
                </template>
              </ContentSpliter>
            </div>
          </div>
        </template>
      </LayoutProviders>
    </div>
    <Modal v-if="showModal" @close="showModal = false">
      <template slot="header">
        <img
          class="maps-banner"
          :src="`http://${host}:8111/img/googlemaps/banner.png`"
        />
      </template>
      <template slot="body">
        <img
          class="map-image-close"
          :src="`http://${host}:8111/img/googlemaps/cerrar.png`"
          @click="() => (showModal = false)"
        />
        <img
          class="map-image"
          :src="`http://${host}:8111/img/${infoProvider.imgs[1]}`"
        />
      </template>

      <template slot="footer">
        <img
          :src="
            `https://api.qrserver.com/v1/create-qr-code/?data=${infoProvider.urlMap +
              '&size=300x300'}`
          "
          v-show="isMapQrLoaded"
                      @load="isMapQrLoaded = true"
        />
            <Spiner v-show="!isMapQrLoaded" />
        <div class="modal-info-content">
          <p class="modal-text">Escanea para ver la ubicación en tu telefono</p>
          <p class="modal-back" @click="() => (showModal = false)">Volver</p>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import LayoutProviders from "@/components/LayoutProviders.vue";
import ContentSpliter from "@/components/ContentSpliter.vue";
import Modal from "@/components/Modal.vue";
import Spiner from "@/components/Spiner.vue";
import { mapGetters } from "vuex";
export default {
  name: "DetailProvider",
  components: {
    LayoutProviders,
    ContentSpliter,
    Modal,
    Spiner,
  },
  data() {
    return {
      infoProvider: {},
      showModal: false,
      // host: window.location.hostname,
      host: "104.131.86.178",
      isQrLoaded: false,
      isMapQrLoaded: false,
    };
  },
  props: {
    ID: String,
  },
  computed: {
    ...mapGetters({
      providers: "providers",
    }),
  },
  methods: {
    async getProviderByID() {
      await this.$store.dispatch("getProviderByID", this.ID);
    },
    async populateInfoProvider() {
      await this.getProviderByID();
      this.infoProvider = this.providers.data;
    },
  },
  async mounted() {
    await this.populateInfoProvider();
  },
};
</script>

<style>
.provider-info-container {
  display: flex;
  margin-top: 7rem;
  margin-left: 5rem;
  flex-direction: column;
  width: 70%;
}
.provider-rightside {
  margin-left: 1rem;
  font-family: "SamsungOne";
  font-size: 20px;
}
.provider-leftside {
  margin-left: 6rem;
  font-family: "SamsungOne";
  font-size: 20px;
}
.provider-leftside p {
  margin-left: 3rem;
}
.openmap-icon {
  height: 300px;
  width: 300px;
}
.provider-info-image img {
  height: 700px;
  width: 900px;
}
.provider-info-content {
  margin-top: 3rem;
  font-family: "SamsungSharp";
}
.maps-banner {
  margin-top: 6rem;
  width: 1000px;
}
.map-image {
  border-radius: 20px;
}
.map-image-close {
  margin-left: 45rem;
}
.provider--blur {
  filter: blur(80px);
}
.modal-info-content {
  width: 100%;
}
.modal-text {
  font-size: 30px;
}
.modal-back {
  font-size: 70px;
  text-align: center;
  margin-right: 9rem;
  color: #0c4da2;
}

.provider-title {
  font-family: "SamsungSharp";
  font-size: 40px;
}
.provider-text {
  font-size: 25px;
}
</style>
