<template>
    <br><br><br>
    <div>
      <h2 class="font-weight-bold m-auto w-50 text-left">
        Réservations de salle
      </h2>
      <br><br><br>
      <p class="text-h6 text-grey-darken-1 w-75 text-left m-auto">Les réservations de salle</p>
      <br><br>
      <p class="text-block alert alert-info text-body-1 w-50 text-left m-auto">
        <span class="font-weight-bold">Informations</span> ! les réservations ne peuvent être faites pour une même salle, à une même heure
      </p>
      <div class="d-flex justify-center pr-16 w-75">
        <div class="block-reservation text-left mt-15 bg-blue-grey-lighten-5 mr-lg-16 ml-lg-n16 p-2 row">
          <p class="text-body-1 font-weight-bold col-md-10">Nouvelle demande de réservation</p>

          <div class="button-container col-md-2">
            <v-btn icon color="green" size="35" @click="acceptReservation">
              <v-icon>mdi-check</v-icon>
            </v-btn>

            <v-btn icon class="ml-4" color="red" size="35" @click="refuseReservation">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>

          <div>
            <span class="text-grey font-weight-bold">Pr.Atsa Roger Minkoulou</span>
          </div>
          <div>
            <span class="text-grey">S006</span><span class="text-grey">, </span><span class="text-grey">15/12/2022</span>
          </div>
          <div>
            <span class="text-grey">Motif</span> <span class="text-grey">: </span><span class="text-grey">"Cours de INF4027, rattrapage"</span>
          </div>
        </div>
      </div>
      <div class="d-flex justify-center pr-16 w-75">
        <div class="block-reservation text-left mt-15 bg-blue-grey-lighten-5 mr-lg-16 ml-lg-n16 p-2 row">
          <p class="text-body-1 font-weight-bold col-md-10">Nouvelle demande de réservation</p>

          <div class="button-container col-md-2">
            <v-btn icon color="green" size="35" @click="acceptReservation">
              <v-icon>mdi-check</v-icon>
            </v-btn>

            <v-btn icon class="ml-4" color="red" size="35" @click="refuseReservation">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>

          <div>
            <span class="text-grey font-weight-bold">Dr.Nzekon Armel</span>
          </div>
          <div>
            <span class="text-grey">A135</span><span class="text-grey">, </span><span class="text-grey">25/11/2022</span>
          </div>
          <div>
            <span class="text-grey">Motif</span> <span class="text-grey">: </span><span class="text-grey">"Pour conférence."</span>
          </div>
        </div>
      </div>
      <div class="d-flex justify-center pr-16 w-75">
        <div class="block-reservation text-left mt-15 bg-blue-grey-lighten-5 mr-lg-16 ml-lg-n16 p-2 row">
          <p class="text-body-1 font-weight-bold col-md-10">Demande de réservation</p>

          <div class="button-container col-md-2">
            <span>ACCEPÉE</span>
          </div>

          <div>
            <span class="text-grey font-weight-bold">Pr.Kouokam Etienne</span>
          </div>
          <div>
            <span class="text-grey">A135</span><span class="text-grey">, </span><span class="text-grey">25/11/2022</span>
          </div>
          <div>
            <span class="text-grey">Motif</span> <span class="text-grey">: </span><span class="text-grey">"TD de INF4048, compilation"</span>
          </div>
        </div>
      </div>
    </div>
    <!-- ... le reste du code ... -->
</template>
  
  <script>
  
  export default {
    data() {
      return {

      };
    },
    methods: {
      // ... le reste du code ...

      refuseReservation() {
        // Logique de suppression de l'option
      },
      acceptReservation() {
        // Logique de confirmation de l'option
      },
    },
  };
  </script>
  
<style>
  .button-container {
    display: flex;
  }

  .block-reservation {
    width: 500px;
    margin-left: 15%;
  }
</style>