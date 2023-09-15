<template>
    <div class="row">
        <BlogItem
          class="col-lg-4"
          title="How A Website Growths your Business"
          image="/blog-1.png"
          category="Business"
          date="7 min read · September 12"
          link="#"
        />
        <BlogItem
          class="col-lg-4"
          title="How A Website Growths your Business"
          image="/blog-2.png"
          category="Branding"
          date="7 min read · September 12"
          link="#"
        />
        <BlogItem
          class="col-lg-4"
          title="How A Website Growths your Business"
          image="/blog-3.png"
          category="Product Design"
          date="7 min read · September 12"
          link="#"
        />
        <div class="col-12">
          <div class="all-blog-button">
            <a href="#" class="slider-button secondary">View more</a>
          </div>
        </div>
    </div>
</template>

<script setup>
  import BlogItem from "./BlogItem.vue";

</script>