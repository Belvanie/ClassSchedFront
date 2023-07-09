<template>
    <div>
        <Header/>

        <div>
            <br><br><br>
            <div class="row">
            <div class="col-xl-9 col-lg-12">
                <h2 class="font-weight-bold m-auto w-50 text-left">
                Plateforme votre plateforme de plannification
                <br>des cours et des évènements
                </h2>
                <br><br><br>
                <p class="text-h6 font-weight-thin w-75 text-center ml-16">Pourquoi un outil de gestion des emplois de temps à l’UY1 ?</p>
                <div class="w-75 m-auto row">
                <div class="text-block bg-blue-grey-lighten-5 col-lg-3 col-sm-4 mr-8 mt-5">
                    <v-badge
                    color="light"
                    overlap
                    offset-x="2"
                    offset-y="-0"
                    >
                    <template #badge>
                        <v-icon color="black" size="25">mdi-comment-quote</v-icon>
                    </template>

                    <p class="content p-4">
                        L'enregistrement manuelle des emplois du temps est une tâche difficile et pouvant entrainer des erreurs.
                    </p>
                    </v-badge>
                </div>
                <div class="text-block bg-blue-grey-lighten-5 col-lg-3 col-sm-4 mr-8 mt-5">
                    <v-badge
                    color="light"
                    overlap
                    offset-x="2"
                    offset-y="-0"
                    >
                    <template #badge>
                        <v-icon color="black" size="25">mdi-comment-quote</v-icon>
                    </template>

                    <p class="content p-4">
                        Juste une information modifiée dans un emploi de temps peut faire basculer tous les 
                        autres emplois de temps ou créer des collisions qui sont problématiques lors de séances de cours.
                    </p>
                    </v-badge>
                </div>
                <div class="text-block bg-blue-grey-lighten-5 col-lg-3 col-sm-4 mt-5">
                    <v-badge
                    color="light"
                    overlap
                    offset-x="2"
                    offset-y="-0"
                    >
                    <template #badge>
                        <v-icon color="black" size="25">mdi-comment-quote</v-icon>
                    </template>

                    <p class="content p-4">
                        Le partage manuel de ce dernier est d'autant plus difficile, 
                        car nécessite un partage par les étudiants ou les délégués et 
                        peut entraîner parfois des partages de fausses informations.
                    </p>
                    </v-badge>
                </div>
                </div>
                <div class="row mb-5 ml-16 mt-12 p-5">
                <div>
                    <router-link to="/planning">
                    <v-btn class="btnConsulter p-2 ml-16" color="black" dark>
                        Consulter
                    </v-btn>
                    </router-link>
                </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6 mt-md-16 mt-sm-16 m-lg-auto m-md-auto m-sm-auto">
                <v-card>
                <img src="@/assets/image_planning.png" alt="logo" class="d-inline-block align-text-top w-100 h-100">
                <v-card-text>
                    <span class="text-grey">Plannification de cours</span>
                </v-card-text>
                </v-card>
            </div>
            </div>
            <!-- ... le reste du code ... -->
        </div>

        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'HomeView',
    components: {
        Header,
        Footer,
    }
}
</script>

<style>
  .btnConsulter {
    width: 200px;
    height: 140px;
  }
</style>