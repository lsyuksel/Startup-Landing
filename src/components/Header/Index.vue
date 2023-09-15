<template>
    <header>
        <div class="container">
            <div class="header-container">
                <div class="row align-items-center">
                    <div class="col col-xl-2">
                        <headerLogo />
                    </div>
                    <div class="col-auto d-block d-xl-none">
                        <div class="toggle-menu" @click="toggleButton">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M6 8H26" stroke="#323131" stroke-width="3"/>
                                <path d="M6 16H26" stroke="#323131" stroke-width="3"/>
                                <path d="M6 24H18" stroke="#323131" stroke-width="3"/>
                                <path d="M22 24L26 24" stroke="#6365EF" stroke-width="3"/>
                            </svg>
                        </div>
                    </div>
                    <div class="col-xl-10">
                        <headerMenu />
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
    import headerLogo from "./logo.vue";
    import headerMenu from "./menu.vue";
    const toggleButton = () => {
        document.querySelector(".header-menu").classList.toggle("actived");
    }
</script>