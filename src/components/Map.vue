
<template>
    <div class="home">
        <!--<input type="text" v-model="keyword" v-on:keyup.enter="searchNearBy">-->
        <div
                :key="index"
                v-for="(m, index) in markers">
            {{ m.name }} prout
        </div>
        <GmapMap ref="mapRef"
                 :center="{lat:10, lng:10}"
                 :zoom="12"
                 map-type-id="terrain"
        >
            <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.geometry.location"
                    :title="m.name"
                    :clickable="true"
                    :draggable="false   "
                    @click="openInfoWindowTemplate(m)"
            >
            </GmapMarker>
            <GmapInfoWindow
                    :options="{maxWidth: 300}"
                    :position="infoWindow.position"
                    :opened="infoWindow.open"
                    @closeclick="infoWindow.open=false">
                <!-- ici on utilise v-html et pas {{ }} car il est possible qu'on balance du html dans la div et qu'on souhaite l'interpreter -->
                <div v-html="infoWindow.template"></div>
            </GmapInfoWindow>
        </GmapMap>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'maps',
        components: {

        },
        data () {
            return {
                keyword: 'yolo',
                markers: [],
                infoWindow: {
                    position: {lat: 0, lng: 0},
                    open: false,
                    template: ''
                }
            }
        },
        methods: {
            searchNearBy(){
                this.$refs.mapRef.$mapPromise.then((map) => {
                    /* eslint-disable no-undef */
                    //let targetLatLng = new google.maps.LatLng(48.864716, 2.349014)
                    map.panTo({lat: 48.864716, lng: 2.349014})
                    // map.panTo({lat: 48.864716, lng: 2.349014})
                    /* eslint-disable no-undef */
                    let placesService = new google.maps.places.PlacesService(map)
                    placesService.nearbySearch({
                        location: {lat: 48.864716, lng: 2.349014},
                        name: this.keyword,
                        radius: 1000,
                        // types: ['store', 'restaurant']
                    }, (results, status) => {
                        this.markers = results
                        console.log(status)
                    })
                })
            },
            openInfoWindowTemplate (item) {
                this.infoWindow.template = '<img alt="Vue logo" src="'+ item.icon +'"><h1>' + item.name +'</h1>'
                this.infoWindow.position = item.geometry.location
                this.infoWindow.open = true
            }
        },
        mounted () {
            // At this point, the child GmapMap has been mounted, but
            // its map has not been initialized.
            // Therefore we need to write mapRef.$mapPromise.then(() => ...)
            this.searchNearBy()
        }
    }
</script>
<style scoped>
    .vue-map-container {
        width: 100%;
        height: 60vh;
    }
</style>

