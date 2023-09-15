<template>
    <div class="newsletter-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <NewsletterBanner />
                </div>
                <div class="col-lg-6">
                    <NewsletterContent />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
  import NewsletterContent from "./NewsletterContent.vue";
  import NewsletterBanner from "./NewsletterBanner.vue";
</script>