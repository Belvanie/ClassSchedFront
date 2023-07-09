<template>
  <h2 class="mt-5 text-center">EMPLOI DE TEMPS - TIMETABLE</h2>
  <br/>
  <div class="menu-container w-75 m-auto">
    <div class="text-left">
      <p class="m-0">
        <span class="font-weight-bold">Faculté</span> : <span>FACSCIENCES</span>
      </p>
      <p class="m-0">
        <span class="font-weight-bold">Niveau</span> : <span v-if="selectedLevel">{{ selectedLevel }}</span><span v-else>TOUS</span>
      </p>
      <p class="m-0">
        <span class="font-weight-bold">Semestre</span> : <span v-if="selectedSemester">{{ selectedSemester }}</span><span v-else>TOUS</span>
      </p>
    </div>

    <div class="select-container">

      <v-select
        v-model="selectedMajor"
        :items="majors"
        :hint="selectedMajor ? `${selectedMajor}` : ''"
        persistent-hint
        item-title="text"
        item-value="value"
        label="Filière"
        variant="solo"
        class="w-25 mr-2"
      ></v-select>

      <v-select
        v-model="selectedLevel"
        :items="levels"
        :hint="selectedLevel ? `${selectedLevel}` : ''"
        persistent-hint
        item-title="text"
        item-value="value"
        label="Niveau"
        variant="solo"
        class="w-25 mr-2"
      ></v-select>

      <v-select
        v-model="selectedSemester"
        :items="semesters"
        :hint="selectedSemester ? `${selectedSemester}` : ''"
        persistent-hint
        item-title="text"
        item-value="value"
        label="Semestre"
        variant="solo"
        class="w-25 mr-2"
      ></v-select>

      <v-select
        v-model="selectedYear"
        :items="years"
        :hint="selectedYear ? `${selectedYear}` : ''"
        persistent-hint
        item-title="text"
        item-value="value"
        label="Année"
        variant="solo"
        class="w-25 mr-2"
      ></v-select>
    </div>

    <div class="button-container w-25">
      <v-btn icon @click="downloadPDF" class="ml-sm-16">
        <span>
          <i class="fas fa-file-download"></i>
        </span>
      </v-btn>
    </div>
  </div>

  <div class="d-flex m-auto w-25 mt-5">
    <p class="ml-10">
      <span class="font-weight-bold">Année académique</span> : <span v-if="selectedYear">{{ selectedYear }}</span><span v-else>2022/2023</span>
    </p>
    <p class="ml-10">
      <span class="font-weight-bold">Filière</span> : <span v-if="selectedMajor">{{ selectedMajor }}</span><span v-else>TOUTES</span>
    </p>
  </div>

  <div class="carousel-container w-75 m-auto">
    <div class="carousel-content d-flex justify-content-between align-items-center">
      <v-btn icon @click="prevTimetable" class="carousel-button">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <transition name="time-table-transition">
        <time-table :time-table="currentTimetable" :key="currentIndex" class="w-75 m-auto mt-5"></time-table>
      </transition>

      <v-btn icon @click="nextTimetable" class="carousel-button">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </div>
  <!-- ... le reste du code ... -->
</template>
  
  <script>
  import TimeTable from './components/TimeTable.vue';
  import 'animate.css';

  
  export default {
    components: {
        TimeTable,
    },
    data() {
      return {
        initialData: {
            // Les données initiales de l'emploi du temps
            '7:00': {
                Lundi: { ue: 'MAT141', teacher: 'enseignant1@example.com', room: 'S006' },
                Jeudi: { ue: 'INF4065', teacher: 'enseignant2@example.com', room: 'S006' },
                // ... autres jours de la semaine
            },
            '8:00': {
                Lundi: { ue: 'PHY245', teacher: 'enseignant2@example.com', room: 'AIII' },
                Mardi: { ue: 'MAT122', teacher: 'enseignant2@example.com', room: 'AI' },
                // ... autres jours de la semaine
            },
            // ... autres heures de la journée
        },
        initialData1: {
            // Les données initiales de l'emploi du temps
            '9:00': {
                Lundi: { ue: 'MAT141', teacher: 'enseignant1@example.com', room: 'S006' },
                Jeudi: { ue: 'INF4065', teacher: 'enseignant2@example.com', room: 'S006' },
                // ... autres jours de la semaine
            },
            '11:00': {
                Jeudi: { ue: 'PHY245', teacher: 'enseignant2@example.com', room: 'AIII' },
                Vendredi: { ue: 'MAT122', teacher: 'enseignant2@example.com', room: 'AI' },
                // ... autres jours de la semaine
            },
            // ... autres heures de la journée
        },
        majors: [
          { text: 'Filière 1', value: 'major1' },
          { text: 'Filière 2', value: 'major2' },
          { text: 'Filière 3', value: 'major3' }
        ],
        levels: [
          { text: 'Niveau 1', value: 'level1' },
          { text: 'Niveau 2', value: 'level2' },
          { text: 'Niveau 3', value: 'level3' }
        ],
        semesters: [
          { text: 'Semestre 1', value: 'semester1' },
          { text: 'Semestre 2', value: 'semester2' },
        ],
        years: [
          { text: '2023/2024', value: '2023/2024' },
          { text: '2022/2023', value: '2022/2023' },
        ],
        selectedMajor: null,
        selectedLevel: null,
        selectedSemester: null,
        selectedYear: null,
        
        timetables: [],
        currentIndex: 0,
        isAnimating: false
      };
    },
    computed: {
      currentTimetable() {
        return this.timetables[this.currentIndex];
      }
    },
    created() {
      // Vérification que initialData est bien défini
      if (this.initialData) {
        // Ajout de initialData en tant que premier élément de timetables
        this.timetables.push(this.initialData);
      }
      if (this.initialData1) {
        // Ajout de initialData en tant que premier élément de timetables
        this.timetables.push(this.initialData1);
      }
    },
    methods: {
      // ... le reste du code ...

      downloadPDF() {
        // Logique de téléchargement du fichier PDF
        // Vous pouvez utiliser une bibliothèque ou un script de génération de PDF ici
      },

      nextTimetable() {
        if (this.currentIndex < this.timetables.length - 1) {
          this.isAnimating = true;
          setTimeout(() => {
            this.currentIndex++;
            this.isAnimating = false;
          }, 500); // Temps de l'animation en millisecondes
        }
      },

      prevTimetable() {
        if (this.currentIndex > 0) {
          this.isAnimating = true;
          setTimeout(() => {
            this.currentIndex--;
            this.isAnimating = false;
          }, 500); // Temps de l'animation en millisecondes
        }
      },
  
      // ... le reste du code ...
    },
  };
  </script>
  
<style>
  .select-container {
    display: flex;
    width: 594px;
  }

  .menu-container {
    display: flex;
  }

  .button-container {
      display: flex;
      justify-content: flex-end;
  }

  .time-table-transition-enter {
    opacity: 0;
    transform: translateY(50px);
  }

  .time-table-transition-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.2s, transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .time-table-transition-leave {
    opacity: 1;
    transform: translateY(0);
  }

  .time-table-transition-leave-active {
    opacity: 0;
    transform: translateY(-50px);
    transition: opacity 0.3s, transform 0.2s cubic-bezier(0.19, 1, 0.22, 1);
  }

    .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>