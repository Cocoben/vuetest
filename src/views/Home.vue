<template>
  <div>
  <b-container class="home">

    <b-row class="blockAccueil">
      <b-col sm="6">
        <img src="../assets/fruitsLegumes.png">
      </b-col>
      <b-col sm="6">
        <h1>Les fruits de saisons</h1>
        <p>Popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
      </b-col>

    </b-row>
    </b-container>



    <b-row class="blockVideo">
      <iframe src="https://www.youtube.com/embed/qGPj_XTrrXY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div>
        <b-button href="#card">Découvrir</b-button>
      </div>
    </b-row>


  <b-container>

    <b-row id="card">
      <b-card
              title="Carotte"
              img-src="https://www.femininbio.com/sites/femininbio.com/files/styles/panoramique/public/images/2015/12/carrots-673184.jpg?itok=_aJ0TFOD"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

      </b-card>

      <b-card
              title="Mâche"
              img-src="https://static.passeportsante.net/i63997-salade-de-mache-a-la-betterave-et-aux-pommes.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

      </b-card>
    </b-row>

    <b-row>
    <p>Les fruits et légumes importés coûtent beaucoup plus cher que les produits locaux, et cela est en partie lié aux frais de transport. En adoptant une consommation de saison, vous contribuez à limiter ces déplacements non nécessaires. Ces économies de transport sont autant d’économie de pétrole.</p>
    <p> Les légumes de saison, plus savoureux et de meilleure qualité sont aussi beaucoup moins nocifs pour l’environnement que les produits importés traités avec de nombreux engrais.</p>

    </b-row>
  </b-container>

    <b-container id="map">
      <Maps/>

    </b-container>

    <b-container id="contact">
      <b-row>
        <b-col sm="6">
          <InputEmail/>
        </b-col>
        <b-col sm="6">
          <h2>A Propos</h2>
          <p> Grâce au calendrier des fruits et légumes, choisissez vos produits de saison pour préparer vos conserves maison, et enfermez ainsi dans vos bocaux toutes les bonnes saveurs des aliments pour en profiter tout le reste de l’année ! Les fruits et légumes de saison n'auront désormais plus de secrets pour vous. </p>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>


import Maps from '@/components/Map.vue'
import InputEmail from '@/components/InputEmail.vue'

export default {
  name: 'Home',
  components: {
    Maps,
    InputEmail
  },


}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  *{
    scroll-behavior: smooth;
  }
  img{
    width: 100%;
  }

  iframe{
    margin: auto;
    width: 70%;
    height: 430px;
  }

  .blockVideo{
    flex-direction: column;
    background: aquamarine;
  }

  .blockAccueil img{
    width: 75%;
  }

  #card{
    justify-content: space-around;
  }

  .row{
    margin: 30px 0;
    padding: 40px 0;
  }

  .btn{
    margin: 20px 0;
  }

  b-card{
    margin: auto;
  }
</style>
