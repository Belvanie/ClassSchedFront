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
                <router-link class="btn d-flex px-5 btn-grad fw-bolder" to="/admin/login">Connexion</router-link>
            </div>
        </nav>
    </header>
    <main class="container-fluid">
      <div class="row">
          <div class="col-md-1 p-0 side-menu">
            <Sidebar/>
          </div>
          <div class="col-md-11 pt-3">
              <!-- Main content goes here -->
              <div class="row">
                <slot></slot>
              </div>
              <footer class="border-top border-dark mt-5 pt-4">
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
import Sidebar from '@/components/admin/Sidebar.vue'

export default {
  name: 'AdminHomeView',
  components: {
    Sidebar,
  }
}
</script>

<style> 
.side-menu {
  background-color: #4e1bad;
}
         
.btn-grad {
  background-image: linear-gradient(to right, #a33fe5 0%, #f73b66  51%, #c73cb5  100%);
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;   
  border-radius: 5px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 4px solid #961fe6;        
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
         

</style>