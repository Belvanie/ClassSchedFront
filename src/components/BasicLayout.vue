<template>
    <div class="min-vh-100">
        <Header/>
        <main class="container-fluid">
        <div class="row">
            <div class="col-md-1 p-0 side-menu">
                <Sidebar/>
            </div>
            <div class="col-md-11 pt-3 px-0">
                <!-- Main content goes here -->
                <div class="row">
                    <div class="col-10">
                        <slot name="main-title"></slot>
                    </div>
                    <div class="col-2">
                        <img src="@/assets/logo_uy1.png" alt="logo uy1" width="40" height="50">
                        <span>Yaound&eacute; 1</span>
                    </div>
                </div>
                <div class="row">
                    <slot name="main-content"></slot>
                </div>
                <Footer/>
            </div>
        </div>
    </main>
</div>
</template>

<script>
import Header from './Header.vue';
import Sidebar from '@/components/admin/Sidebar.vue'
import Footer from './Footer.vue';

export default {
    name: 'AdminHomeView',
    components: {
        Header,
        Sidebar,
        Footer,
    }
}
</script>

<style> 
.side-menu {
background-color: #4e1bad;
}
</style>