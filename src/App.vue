<template>
  <div>
    <h1 class="title text-2xl mt-4 font-bold underline">Vue Personal Testing Components</h1>
    <div id="app">
      <div class="counter mb-4 flex flex-col">
        <h1 class="mb-4">Counter</h1>
        <Counter class="flex-1 p-4 border-gray-700 border border-solid rounded-sm"/>
      </div>
      <div class="file-uploader mb-4 flex flex-col">
        <h1 class="mb-4">FileUploader</h1>
        <FileUploader class="flex-1 p-4 border-gray-700 border border-solid rounded-sm" :files="files" :progress="33"/>
      </div>
      <div class="rating mb-4 flex flex-col">
        <h1 class="mb-4">Rating</h1>
        <Rating :stars="{max: 5, score: 3}" class="flex-1 p-4 border-gray-700 border border-solid rounded-sm"/>
      </div>
      <div class="flex flex-col row">
        <h1 class="w-full text-base">Notification</h1>
        <div class="notifications p-8 mb-4 border-gray-700 border border-solid rounded-sm text-sm flex">
          <div class="notification flex flex-col flex-grow">
            <Notification :notification="{type: 'alert', title: 'Danger', message: 'Something went wrong.'}"
                          class="flex-1 px-4"/>
          </div>
          <div class="notification flex flex-col flex-grow">
            <Notification :notification="{type: 'warning', title: 'Alert', message: 'Something went wrong.'}"
                          class="flex-1 px-4"/>
          </div>
          <div class="notification flex flex-col flex-grow">
            <Notification :notification="{type: 'success', title: 'OK', message: 'Something went wrong.'}"
                          class="flex-1 px-4"/>
          </div>
        </div>
      </div>
      <div class="search mb-4 flex flex-col">
        <h1 class="mb-4">Search Box</h1>
        <SearchBox :placeholder="placeholder" class="flex-1 p-4 border-gray-700 border border-solid rounded-sm"/>
      </div>
      <div class="select mb-4 flex flex-col">
        <h1 class="mb-4">Select</h1>
        <Select :options="options" class="flex-1 p-4 border-gray-700 border border-solid rounded-sm"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Counter from '@/components/Counter.vue';
  import FileUploader from '@/components/FileUploader.vue';
  import Notification from '@/components/Notification.vue';
  import Rating from '@/components/Rating.vue';
  import SearchBox from '@/components/SearchBox.vue';
  import Select from '@/components/Select.vue';
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
      Select,
      FileUploader,
      Counter,
      Rating,
      Notification,
      SearchBox
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
    placeholder = 'What are you waiting for?';
    options = ['Spain', 'UK', 'France', 'Italy'];
  }
</script>

<style>
  .title {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

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

  .row {
    grid-column: 1/4;
  }
</style>
