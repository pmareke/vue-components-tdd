<template>
  <div class="flex flex-col p-4 justify-center items-center">
    <select class="w-full bg-gray-200 text-gray-700 border border-gray-500 rounded leading-tight focus:outline-none focus:bg-white"
            v-model="selected">
      <option class="option" v-for="option in options">{{ option }}</option>
    </select>
    <span class="mt-4"><b>Selected:</b> {{ selected }}</span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Prop } from 'vue-property-decorator';

  @Component
  export default class Select extends Vue {
    @Prop()
    options!: string[];

    selected: string = '';
  }
</script>
