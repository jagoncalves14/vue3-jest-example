<template>
  <div class="movie-list">
    <ul>
      <li
        v-for="(item, index) in movieList"
        :key="index"
        :class="{ active: item.id === id }"
        @click="onMovieSelected(item)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TMovieData } from '../types'

export default defineComponent({
  name: 'MovieList',

  emits: ['set-selected-movie-id'],

  props: {
    movieList: {
      type: Array as () => TMovieData[],
      default: []
    },

    id: {
      type: Number,
      default: 0
    }
  },

  methods: {
    onMovieSelected(data: TMovieData) {
      this.$emit('set-selected-movie-id', data.id)
    }
  }
})
</script>

<style lang="scss">
.movie-list {
  width: 25%;
  margin-right: auto;
  margin-left: 0;
  background-color: white;
  border-right: 1px solid black;
  color: black;

  ul {
    margin: 0;
    padding: 0;
  }

  ul li {
    padding: 15px 30px;
    border-bottom: 1px solid rgba(black, 1);
    text-align: left;
    cursor: pointer;

    &:last-of-type {
      border-bottom: none;
    }

    &:hover {
      background: rgba(black, 0.05);
    }

    &.active {
      background: rgba(blue, 0.5);
      color: white;
    }
  }
}
</style>
