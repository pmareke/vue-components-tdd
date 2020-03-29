<template>
  <div id="app">
    <div class="counter flex flex-col">
      <h1 class="mb-4">Counter</h1>
      <Counter class="flex-1 p-4 border-gray-700 border border-solid rounded-sm"/>
    </div>
    <div class="file-uploader flex flex-col">
      <h1 class="mb-4">FileUploader</h1>
      <FileUploader class="flex-1 p-4 border-gray-700 border border-solid rounded-sm" :files="files" :progress="33"/>
    </div>
    <div class="rating flex flex-col">
      <h1 class="mb-4">Rating</h1>
      <Rating :stars="{max: 5, score: 3}" class="flex-1 p-4 border-gray-700 border border-solid rounded-sm"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Counter from '@/components/Counter.vue';
  import FileUploader from '@/components/FileUploader.vue';
  import Rating from '@/components/Rating.vue';
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
      FileUploader,
      Counter,
      Rating
    }
  })
  export default class App extends Vue {
    files = [
      {
        name: 'Document.pdf',
        size: 3200000
      },
      {
        name: 'Document_".pdf',
        size: 4300000
      }
    ];
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    margin: 60px auto 0px auto;
    max-width: 1100px;
  }
</style>
