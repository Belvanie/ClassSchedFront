<template>
  <div class="min-vh-100">
    <header class="border-bottom border-dark">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid px-4">
                <div class="d-flex">
                  <router-link to="/" class="navbar-brand text-secondary">
                    <img src="@/assets/logo.png" alt="logo" width="30" height="24" class="d-inline-block align-text-top">
                    ClassSched
                  </router-link>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                </div>
                <button class="btn d-flex px-5 btn-grad fw-bolder" type="submit">Connexion</button>
            </div>
        </nav>
    </header>
    <main class="container-fluid">
        <div class="row">
            <!-- Side menu column -->
            <div class="col-1 side-menu fs-4">
              <!-- Side menu list -->
              <ul class="list-group list-group-flush bg-dark">
                <li class="list-group-item side-items"><font-awesome-icon icon="calendar-days"></font-awesome-icon></li>
                <li class="list-group-item side-items"><font-awesome-icon icon="calendar-check"></font-awesome-icon></li>
                <li class="list-group-item side-items"><font-awesome-icon icon="chalkboard-teacher"></font-awesome-icon></li>
                <li class="list-group-item side-items"><font-awesome-icon icon="school"></font-awesome-icon></li>
                <li class="list-group-item side-items"><font-awesome-icon icon="clipboard-list"></font-awesome-icon></li>
                <li class="list-group-item side-items"><font-awesome-icon icon="book-open-reader"></font-awesome-icon></li>
                <li class="list-group-item side-items"><font-awesome-icon icon="filter"></font-awesome-icon></li>
                <li class="list-group-item side-items border-bottom"><font-awesome-icon icon="envelope"></font-awesome-icon></li>
              </ul>
            </div>
            <div class="col-11 pt-3">
                <!-- Main content goes here -->
                <div class="row">
                    <div class="col-10">
                        <h1 class="text-center">Title</h1>
                    </div>
                    <div class="col-2">
                        <img src="@/assets/logo_uy1.png" alt="logo uy1" width="40" height="50">
                        <span>Yaound&eacute; 1</span>
                    </div>
                </div>
                <div class="row">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ligula, laoreet eget iaculis quis, cursus in nisi. Nullam malesuada gravida ex sed rhoncus. Aenean a augue gravida, ullamcorper leo vitae, suscipit massa. Proin pellentesque dui ligula, id fermentum nisl dignissim eget. Fusce justo justo, pulvinar ut risus ut, maximus placerat mauris. Morbi sed arcu eu magna finibus ornare. Nulla facilisi.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ligula, laoreet eget iaculis quis, cursus in nisi. Nullam malesuada gravida ex sed rhoncus. Aenean a augue gravida, ullamcorper leo vitae, suscipit massa. Proin pellentesque dui ligula, id fermentum nisl dignissim eget. Fusce justo justo, pulvinar ut risus ut, maximus placerat mauris. Morbi sed arcu eu magna finibus ornare. Nulla facilisi.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ligula, laoreet eget iaculis quis, cursus in nisi. Nullam malesuada gravida ex sed rhoncus. Aenean a augue gravida, ullamcorper leo vitae, suscipit massa. Proin pellentesque dui ligula, id fermentum nisl dignissim eget. Fusce justo justo, pulvinar ut risus ut, maximus placerat mauris. Morbi sed arcu eu magna finibus ornare. Nulla facilisi.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ligula, laoreet eget iaculis quis, cursus in nisi. Nullam malesuada gravida ex sed rhoncus. Aenean a augue gravida, ullamcorper leo vitae, suscipit massa. Proin pellentesque dui ligula, id fermentum nisl dignissim eget. Fusce justo justo, pulvinar ut risus ut, maximus placerat mauris. Morbi sed arcu eu magna finibus ornare. Nulla facilisi.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ligula, laoreet eget iaculis quis, cursus in nisi. Nullam malesuada gravida ex sed rhoncus. Aenean a augue gravida, ullamcorper leo vitae, suscipit massa. Proin pellentesque dui ligula, id fermentum nisl dignissim eget. Fusce justo justo, pulvinar ut risus ut, maximus placerat mauris. Morbi sed arcu eu magna finibus ornare. Nulla facilisi.
                </div>
                <footer class="border-top border-dark pt-4">
                    <!-- Footer container -->
                    <div class="row">
                        <!-- Footer column 1 -->
                        <div class="col-md-6">
                            <!-- Footer header -->
                            <p class="text-decoration-underline fw-bolder">CONTACT</p>
                            <!-- Footer list -->
                            <ul class="list-unstyled">
                                <li>ci@facsciences.uy1.cm</li>
                                <li>info@uy1.uninet.cm</li>
                            </ul>
                        </div>
                        <!-- Footer column 2 -->
                        <div class="col-md-6">
                            <!-- Footer header -->
                            <p class="text-decoration-underline fw-bolder">LIENS UTILES</p>
                            <!-- Footer list -->
                            <ul class="list-unstyled">
                                <li><a class="text-decoration-none text-dark" href="https://www.preinscriptions.uninet.cm/" target="_blank">Pr&eacute;inscriptions</a></li>
                                <li><a class="text-decoration-none text-dark" href="https://uy1.uninet.cm/"  target="_blank">Site officiel</a></li>
                            </ul>
                        </div>
                        <!-- Footer bottom -->
                        <div class="row">
                            <div class="col text-center">
                                <!-- Footer copyrigth -->
                                <p class="mt-3">Copyright &copy; 2023 - tous droits r&eacute;serv&eacute;s.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {}
}
</script>

<style> 
.side-menu, .side-items {
  background-color: #4e1bad;
  color: #fff;
}
         
.btn-grad {
  background-image: linear-gradient(to right, #a33fe5 0%, #f73b66  51%, #c73cb5  100%);
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;            
  box-shadow: 0 0 20px #eee;
  border-radius: 5px;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
         

</style>