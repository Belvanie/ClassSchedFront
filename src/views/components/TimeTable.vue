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
              @mouseover="cellMouseOver(dayIndex, hourIndex)"
              @mouseout="cellMouseOut"
              :class="{'limited-cell': true , 'cell-hover': isCellHovered(dayIndex, hourIndex) }"
            >
                <div v-if="selectedData[hour.label][day.label].ue && selectedData[hour.label][day.label].teacher && selectedData[hour.label][day.label].room">
                  <!-- On affiche l'UE, l'enseignant et la salle. -->
                  {{ selectedData[hour.label][day.label].ue }},
                  <br>
                  {{ selectedData[hour.label][day.label].teacher }},
                  <br>
                  {{ selectedData[hour.label][day.label].room }}
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
        timeTable: {
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
        initializeSelectedData() {
          // L'objet data est vide, initialisez selectedData avec des valeurs par défaut
          for (const hour of this.hours) {
            this.selectedData[hour.label] = {};
            for (const day of this.days) {
              if (this.timeTable[hour.label] && this.timeTable[hour.label][day.label]) {
                this.selectedData[hour.label][day.label] = { ...this.timeTable[hour.label][day.label] };
              }
              else
                this.selectedData[hour.label][day.label] = { ue: '', teacher: '', room: '' };
            }
          }
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
      
      .cell-hover {
          background-color: #e0e0e0;
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
    