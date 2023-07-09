<template>
  <div>
    <table id="schedule-table">
      <thead>
        <tr>
          <th class="slash-header">
            <div class="slash-text">Jour</div> <!-- Texte du haut -->
            <div class="slash"></div> <!-- Séparateur oblique -->
            <div class="slash-text">Heure</div> <!-- Texte du bas -->
          </th>
          <th v-for="(day, dayIndex) in days" :key="dayIndex">{{ day.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(hour, hourIndex) in hours" :key="hourIndex">
          <td>{{ hour.label }}</td>
          <td
            v-for="(day, dayIndex) in days"
            :key="dayIndex"
            :rowspan="getHourRowSpan(dayIndex, hourIndex)"
            :style="{ height: hour.height + 'px' }"
            @click="cellClicked(dayIndex, hourIndex)"
            @mouseover="cellMouseOver(dayIndex, hourIndex)"
            @mouseout="cellMouseOut"
            :class="{'limited-cell': true , 'interactive': true, 'cell-hover': isCellHovered(dayIndex, hourIndex) }"
          >
              <span class="pencil-icon"
                  v-if="isCellHovered(dayIndex, hourIndex) && !isSelectedCell(dayIndex, hourIndex)"
              >
                  <i class="fas fa-pencil"></i>
              </span>
              <div v-if="isSelectedCell(dayIndex, hourIndex)">
                  <div class="select-container">
                      <select v-model="selectedData[hour.label][day.label].ue" @change="updateSelectedData(day.label, hour.label, 'ue', selectedData[hour.label][day.label].ue)">
                          <option v-for="ue in ueOptions" :key="ue.code" :value="ue.code">{{ ue.intitulé }}</option>
                      </select>
                  </div>
                  <div class="select-container">
                      <select v-model="selectedData[hour.label][day.label].teacher" @change="updateSelectedData(day.label, hour.label, 'teacher', selectedData[hour.label][day.label].teacher)">
                          <option v-for="teacher in teacherOptions" :key="teacher.email" :value="teacher.email">{{ teacher.email }} ({{ teacher.nom }} {{ teacher.prénom }})</option>
                      </select>
                  </div>
                  <div class="select-container">
                      <select v-model="selectedData[hour.label][day.label].room" @change="updateSelectedData(day.label, hour.label, 'room', selectedData[hour.label][day.label].room)">
                          <option v-for="room in roomOptions" :key="room.code" :value="room.code">{{ room.nom }}</option>
                      </select>
                  </div>
              </div>
              <div v-else>
                  <template v-if="selectedData[hour.label][day.label].ue && selectedData[hour.label][day.label].teacher && selectedData[hour.label][day.label].room">
                      {{ selectedData[hour.label][day.label].ue }}, <br>{{ getTeacherName(selectedData[hour.label][day.label].teacher) }}, <br>{{ selectedData[hour.label][day.label].room }}
                  </template>
                  <template v-else>
                      <span class="gray-text">(Vide)</span>
                  </template>
              </div>
              <!-- Contenu de la cellule -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>

  export default {
    props: {
      initialData: {
        type: Object,  // Mettez à jour le type en Object
        default: () => ({})  // Définissez un objet vide comme valeur par défaut
      }
    },
    data() {
      return {
        days: [
          { label: 'Lundi' },
          { label: 'Mardi' },
          { label: 'Mercredi' },
          { label: 'Jeudi' },
          { label: 'Vendredi' },
          { label: 'Samedi' },
          { label: 'Dimanche' },
        ],
        hours: [],
        selectedData: {}, // Structure de données pour stocker les contenus sélectionnés
        hoveredCell: { dayIndex: null, hourIndex: null },
        selectedCell: { dayIndex: null, hourIndex: null },
        ueOptions: [
          { code: 'MAT141', intitulé: 'Analyse 1' },
          { code: 'INF4065', intitulé: 'Théorie des codes 1' },
          { code: 'PHY245', intitulé: 'Thermodynamique' },
          { code: 'MAT122', intitulé: 'Algèbre 1' },
          // ... autres options pour les UE
        ],
        teacherOptions: [
          { email: 'enseignant1@example.com', nom: 'Enseignant 1', prénom: 'Prénom 1' },
          { email: 'enseignant2@example.com', nom: 'Enseignant 2', prénom: 'Prénom 2' },
          { email: 'enseignant3@example.com', nom: 'Enseignant 3', prénom: 'Prénom 3' },
          // ... autres options pour les enseignants
        ],
        roomOptions: [
          { code: 'S006', nom: 'Salle 006' },
          { code: 'AIII', nom: 'Amphi III' },
          { code: 'AI', nom: 'Amphi I' },
          // ... autres options pour les salles
        ],
      };
    },
    created() {
      this.generateHours();
      document.addEventListener('mousedown', this.handleDocumentClick);
      this.initializeSelectedData(); // Appel de la méthode pour initialiser le selectedData
    },
    methods: {
      generateHours() {
        const startHour = 7; // Heure de début
        const endHour = 22; // Heure de fin
        const hourStep = 2; // Pas entre chaque heure
  
        for (let i = startHour; i <= endHour; i += hourStep) {
          const hourLabel = `${i}:00`;
          const hourHeight = 60; // Hauteur de chaque cellule heure en pixels
  
          this.hours.push({ label: hourLabel, height: hourHeight });
        }
      },
      getHourRowSpan(dayIndex, hourIndex) {
        // Méthode inchangée
      },
      cellClicked(dayIndex, hourIndex) {

        this.selectedCell.dayIndex = dayIndex;
        this.selectedCell.hourIndex = hourIndex;
      },
      cellMouseOver(dayIndex, hourIndex) {
        this.hoveredCell.dayIndex = dayIndex;
        this.hoveredCell.hourIndex = hourIndex;
      },
      cellMouseOut() {
        this.hoveredCell.dayIndex = null;
        this.hoveredCell.hourIndex = null;
      },
      isCellHovered(dayIndex, hourIndex) {
        return (
          this.hoveredCell.dayIndex === dayIndex && this.hoveredCell.hourIndex === hourIndex
        );
      },
      isSelectedCell(dayIndex, hourIndex) {
        return (
          this.selectedCell.dayIndex === dayIndex && this.selectedCell.hourIndex === hourIndex
        );
      },
      handleDocumentClick(event) {
        const target = event.target;

        if (!target.closest('#schedule-table')) {
            // Le clic s'est produit en dehors du tableau
            this.selectedCell.dayIndex = null;
            this.selectedCell.hourIndex = null;
        }
      },
      initializeSelectedData() {
        // L'objet data est vide, initialisez selectedData avec des valeurs par défaut
        for (const hour of this.hours) {
          this.selectedData[hour.label] = {};
          for (const day of this.days) {
            if (this.initialData[hour.label] && this.initialData[hour.label][day.label]) {
              this.selectedData[hour.label][day.label] = { ...this.initialData[hour.label][day.label] };
            }
            else
              this.selectedData[hour.label][day.label] = { ue: '', teacher: '', room: '' };
          }
        }
      },
      updateSelectedData(dayIndex, hourIndex, field, value) {
        // Mettre à jour la case [dayIndex][hourIndex] avec la nouvelle valeur
        this.selectedData[hourIndex][dayIndex][field] = value;

        // Émettre l'événement personnalisé avec la matrice selectedData en tant que données
        this.$emit('selected-data-changed', this.selectedData);
      },
      getTeacherName(email) {
        const teacher = this.teacherOptions.find(teacher => teacher.email === email);
        return teacher ? `${teacher.nom} ${teacher.prénom}` : '';
      },
      beforeDestroy() {
        document.removeEventListener('mousedown', this.handleDocumentClick);
      },
    },
  };
  </script>
  
  <style scoped>
    table {
        border-collapse: collapse;
        width: 100%;
    }
    
    th,
    td {
        border: 1px solid #ccc;
        text-align: center;
        padding: 5px;
    }
    
    td {
        vertical-align: top;
    }
    
    .slash-header {
        position: relative;
        text-align: center;
    }
    
    .slash-header .slash {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 1px;
        background-color: #ccc;
    }
    
    .interactive {
        cursor: pointer;
        background-color: #f0f0f0;
    }
    
    .cell-hover {
        background-color: #e0e0e0;
    }
  
  .cell-hover span.pencil-icon {
      position: relative;
  }
  
  .cell-hover span.pencil-icon i {
      position: absolute;
      top: 60%;
      left: 100%;
      color: #ff0000;
  }

    .select-container {
        position: relative;
        width: 100%;
    }

    .select-container select {
        width: 100%;
        max-width: 100px; /* Ajustez cette valeur selon vos besoins */
        box-sizing: border-box;
    }

    .limited-cell, tr {
        max-width: 50px; /* Largeur max d'une cellule td */
        max-height: 50px; /* Hauteur max d'une cellule td */
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .gray-text {
        color: #999999;
    }

  </style>
  