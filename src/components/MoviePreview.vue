<template>
  <div class="movie-preview">
    <div class="movie-preview__image">
      <img :src="image" />
    </div>
    <h3 class="movie-preview__title">{{ title }}</h3>
    <div class="movie-preview__description">{{ description }}</div>
  </div>
</template>

<script lang='ts'>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: "MoviePreview",
    props: {
      image: String,
      title: String,
      description: String,
    },
  })
</script>

<style lang="scss">
  $header-height: 83px;

  .movie-preview {
    position: fixed;
    top: $header-height;
    right: 0;
    width: 75%;
    height: auto;
  }

  .movie-preview__image {
    padding: 70px 0 0 0;
  }

  .movie-preview__image img {
    height: 60vh;
    border-radius: 3px;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.15);
  }
</style>
