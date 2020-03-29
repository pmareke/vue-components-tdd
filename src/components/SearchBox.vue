<template>
  <div class="flex justify-center items-center relative">
    <svg id="search"
         fill="none"
         stroke="currentColor"
         stroke-linecap="round"
         stroke-linejoin="round"
         stroke-width="2"
         viewBox="0 0 24 24"
         class="w-6 h-6 absolute">
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
    <input class="flex-1 appearance-none bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 ml-2 leading-tight focus:outline-none focus:bg-white"
           type="text"
           name="search-box"
           :placeholder="placeholder">
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Prop } from 'vue-property-decorator';

  @Component
  export default class SearchBox extends Vue {
    @Prop()
    placeholder!: string;

  }
</script>

<style scoped>
  #search {
    left: 30px;
  }

  input[placeholder] {
    padding-left: 40px;
  }
</style>
