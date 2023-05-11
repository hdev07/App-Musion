<template>
  <div>
    <google-map-loader
      :map-config="mapConfig"
      :api-key="apiKey"
      :center="mapCenter"
      info-window
    >
      <template slot-scope="{ google, map }">
        <google-map-info-window
          :google="google"
          :map="map"
          :position="infoWindowPos"
          :options="infoOptions"
          :opened="infoWinOpen"
          :info-win-content="infoWinContent"
          @close="infoWinOpen = false"
        />

        <google-map-cluster
          :google="google"
          :map="map"
          :markers="markers"
          @click="handleClickMarker"
          @mapMarkers="handleCreatedMapMarkers"
        />
      </template>
    </google-map-loader>
  </div>
</template>

<script>
import GoogleMapMarker from "~/components/map/GoogleMapMarker";
import GoogleMapCluster from "~/components/map/GoogleMapCluster";
import GoogleMapInfoWindow from "~/components/map/GoogleMapInfoWindow";
import GoogleMapLoader from "~/components/map/GoogleMapLoader";

export default {
  components: {
    GoogleMapMarker,
    GoogleMapCluster,
    GoogleMapInfoWindow,
    GoogleMapLoader,
  },
  props: {
    markers: { type: Array, required: true },
    viewChargerMap: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      mapMarkers: [],
      mapCenter: { lat: 19.4324881, lng: -99.1425509 },
      infoWinOpen: false,
      infoWindowPos: {},
      currentMidx: null,
      infoWinContent: "",
      infoOptions: {
        content: "",
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },
  computed: {
    apiKey() {
      return process.env.GOOGLE_MAP_API || "";
    },
    mapConfig() {
      return {
        center: this.mapCenter,
        zoom: 17,
        disableDefaultUI: true,
        mapId: "58ef9cdd676f8266",
        // zoomControl: false,
        // mapTypeControl: false,
        // scaleControl: false,
        // streetViewControl: false,
        // rotateControl: false,
        // fullscreenControl: false
      };
    },
  },
  watch: {
    markers(newVal, oldVal) {
      this.mapCentorToFirstMarker();
    },
    viewChargerMap(newVal, oldVal) {
      if (newVal == null) return;

      const mapMarker = this.mapMarkers.find(
        (marker) => marker.marker.museumId === newVal.museumId
      );

      if (mapMarker == null) return;

      this.$children[0].map.panTo({
        lat: mapMarker.marker.position.lat,
        lng: mapMarker.marker.position.lng,
      });
      this.$children[0].map.setZoom(14);
      this.handleClickMarker(mapMarker);
    },
  },
  mounted() {
    this.mapCentorToFirstMarker();
  },
  methods: {
    mapCentorToFirstMarker() {
      if (this.markers && this.markers.length > 0) {
        this.mapCenter = this.markers[103].position;
      }
    },
    handleClickMarker(marker, index) {
      this.infoOptions.marker = marker;
      this.infoWindowPos = marker.position;
      this.infoWinContent = marker.infoText;

      if (this.currentMidx == index) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        this.infoWinOpen = true;
        this.currentMidx = index;
      }
    },
    handleCreatedMapMarkers(mapMarkers) {
      this.mapMarkers = [];
      // this.mapMarkers = mapMarkers
    },
  },
};
</script>
