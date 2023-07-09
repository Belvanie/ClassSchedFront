<template>
    <header class="border-bottom">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid px-4">
                <div class="d-flex">
                    <router-link to="/" class="navbar-brand text-danger">
                        <img src="@/assets/logo.png" alt="logo" width="30" height="24" class="d-inline-block align-text-top">
                        ClassSched
                    </router-link>
                </div>
                <router-link class="btn d-flex px-5 btn-grad fw-bolder" to="/admin/login">Connexion</router-link>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'AdminHeader',
    components: {}
}
</script>

<style>
.btn-grad {
    background-image: linear-gradient(to right, #a33fe5 0%, #f73b66  51%, #c73cb5  100%);
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: #fff;
    font-weight: bolder;
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
    border-radius: 5px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 4px solid #961fe6;        
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}

.animate_block {

  animation-name: slideIn;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0.2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}


@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>