<template>
  <div class="section-header">
    <div class="section-subtitle">{{ subtitle }}</div>
    <div class="section-title" v-html="title"></div>
  </div>
</template>
<script setup>
    defineProps({ title: String, subtitle: String });
</script>