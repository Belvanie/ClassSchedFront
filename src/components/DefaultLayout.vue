<template>
    <div class="min-vh-100">
        <Header/>
        <main class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-11 pt-3 px-0">
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
                    <div class="">
                        <slot name="main-content"></slot>
                    </div>
                    <br><br><br><br><br><br><br><br><br>
                    <Footer/>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
    name: 'BasicLayout',
    components: {
        Header,
        Footer,
    }
}
</script>