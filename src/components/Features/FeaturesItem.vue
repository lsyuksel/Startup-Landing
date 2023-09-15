<template>
    <div>
        <div class="features-item">
            <a :href="link">
                <div class="images"><img :src="image" /></div>
                <div class="title">{{ title }}</div>
                <div class="text">{{ text }}</div>
            </a>
        </div>
    </div>
</template>

<script setup>
    defineProps({ 
        title: String,
        text: String,
        image: String,
        link: String 
    });
</script>