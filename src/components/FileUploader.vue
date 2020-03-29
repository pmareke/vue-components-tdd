<template>
  <div>
    <div class="title mb-4 text-xl font-bold">
      Uploading {{ files.length }} files
    </div>
    <div class="size flex justify-center items-center">{{ totalSize }}</div>
    <div class="progressbar rounded h-2 bg-gray-700" :style="{ width: `${progress}%` }"></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Prop } from 'vue-property-decorator';

  @Component
  export default class FileUploader extends Vue {
    @Prop()
    files!: any[];

    @Prop()
    progress!: number;

    get totalSize() {
      const totalSize = this.files
        .reduce((acc: number, { size }) => acc + size, 0);

      return totalSize / 10 ** 6 + ' MB';
    }
  }
</script>

<style scoped>
  .size {
    min-height: 40px;
  }
</style>
