<template>
  <div class="stars flex items-center justify-center">
    <Star :class="index < stars.max - 1 ? 'filled' : ''" class="star" v-for="(index, star) in stars.max" :key="index"/>
  </div>
</template>

<script lang="ts">
  import Star from '@/components/Star.vue';
  import Vue from 'vue';
  import { Component, Prop } from 'vue-property-decorator';

  @Component({
    components: {
      Star
    }
  })
  export default class Rating extends Vue {
    @Prop()
    stars: any;
  }
</script>
