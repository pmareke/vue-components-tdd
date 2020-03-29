<template>
  <div>
    <p class="mb-4 text-xl font-bold">Times clicked: {{ count }}</p>
    <button class="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
            @click="increment">
      increment
    </button>
    <button class="ml-4 bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
            @click="decrement">
      decrement
    </button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component
  export default class Counter extends Vue {
    count: number = 0;

    increment() {
      this.count++;
    };

    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    }
  }
</script>
