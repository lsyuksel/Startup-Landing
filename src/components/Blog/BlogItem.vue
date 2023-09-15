<template>
    <div>
        <div class="blog-item">
            <a :href="link">
                <div class="blog-item-images">
                    <img :src="image" />
                    <div class="category">{{ category }}</div>
                </div>
                <div class="blog-item-content">
                    <div class="title">{{ title }}</div>
                    <div class="bottom">
                        <div class="date">{{ date }}</div>
                        <div class="fake-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.749" height="19.577" viewBox="0 0 18.749 19.577">
                                <g id="Group_26" data-name="Group 26" transform="translate(-611.625 -4619.211)">
                                  <path id="Path_6" data-name="Path 6" d="M16.749,0H0" transform="translate(629.374 4629) rotate(180)" fill="none" stroke="#0b0d39" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                  <path id="Path_7" data-name="Path 7" d="M8.374,16.749,0,8.374,8.374,0" transform="translate(629.374 4637.375) rotate(180)" fill="none" stroke="#0b0d39" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup>
    defineProps({ 
        title: String,
        image: String,
        category: String,
        date: String,
        link: String
    });
</script>