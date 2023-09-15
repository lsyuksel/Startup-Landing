<template>
    <div>
        <div class="testimonials-item">
            <div class="title">{{ title }}</div>
            <div class="text">{{ text }}</div>
            <div class="user">
                <div class="user-images"><img :src="userImage" /></div>
                <div class="user-content">
                    <div class="user-title">{{ userTitle }}</div>
                    <div class="user-degree">{{ userDegree }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps({ 
        title: String,
        text: String,
        userImage: String,
        userTitle: String,
        userDegree: String 
    });
</script>