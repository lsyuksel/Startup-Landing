<template>
    <div class="design-code-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 order-lg-1 order-2">
                    <DesignContent />
                </div>
                <div class="col-lg-6 order-lg-2 order-1 mb-5 mb-lg-0">
                    <DesignBanner />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
  import DesignContent from "./DesignContent.vue";
  import DesignBanner from "./DesignBanner.vue";
</script>