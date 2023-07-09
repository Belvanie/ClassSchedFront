<template>
    <br><br><br>
    <div>
      <h2 class="font-weight-bold m-auto w-50 text-left">
        Réservations de salle
      </h2>
      <br><br><br>
      <p class="text-h6 text-grey-darken-1 w-75 text-left m-auto">Faites une réservation de salle</p>
      <br>
      <p class="text-block alert alert-danger text-body-1 w-50 text-left m-auto">
        <span class="font-weight-bold">Attention</span> ! vous ne pouvez pas faire de demande de réservation pour une salle, à une même heure déjà réservée.
      </p>
      <h1 class="text-h6 w-75 text-left m-auto">Remplissez le formulaire ci-dessous pour demander une salle</h1>

      <div class="d-flex justify-center pr-16 w-100">

        <form class="block-reservation text-left mt-15 mr-lg-16 ml-lg-n16 p-5 border w-50 row">
          <div class="container">
            <p class="text-body-1 font-weight-bold col-md-10">Les champs marqués d’un (<span class="font-weight-bold text-danger">*</span>) sont obligatoires</p>

            <div class="form-group">
              <label class="text-grey font-weight-bold" for="salle">Quelle salle voulez-vous réserver ? <span class="font-weight-bold text-danger">*</span></label>
              <select id="salle" class="form-control" v-model="selectedSalle">
                <option value="">Salle</option>
                <option value="salle1">Salle 1</option>
                <option value="salle2">Salle 2</option>
                <option value="salle3">Salle 3</option>
              </select>
            </div>

            <div class="form-group">
              <label class="text-grey font-weight-bold mt-10" for="date_reservation">A quelle date voulez-vous réserver cette salle ? <span class="font-weight-bold text-danger">*</span></label>
              <input type="date" id="date_reservation" class="form-control" v-model="selectedDate" required>
            </div>

            <div class="form-group">
              <label class="text-grey font-weight-bold mt-10" for="motif">Pour quelle raison souhaitez-vous réserver cette salle ?</label>
              <textarea id="motif" class="form-control" v-model="motif"></textarea>
            </div>

            <input type="submit" value="Confirmer" class="btn btn-info text-white w-50 mt-10">
          </div>
        </form>

      </div>
    </div>
    <!-- ... le reste du code ... -->
</template>
  
  <script>
  
  export default {
    data() {
    return {
        selectedSalle: '',
        selectedDate: '',
        motif: ''
      };
    },
    methods: {
      // ... le reste du code ...

      newReservation() {
        // Logique de suppression de l'option
      },
    },
  };
  </script>
  
<style>

</style>