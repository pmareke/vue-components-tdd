<template>
  <div class="notification">
    <h1 :class="type.title" class="title text-white font-bold rounded-t px-4 py-2 text text-left">
      {{ notification.title}}
    </h1>
    <p :class="type.message" class="message border border-t-0 rounded-b px-4 py-3 text-left">
      {{ notification.message }}
    </p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Prop } from 'vue-property-decorator';

  @Component
  export default class AwesomeNotification extends Vue {
    @Prop()
    notification: any;

    get type(): any {
      const colors: { [name: string]: string } = {
        'alert': 'red',
        'warning': 'yellow',
        'success': 'green',
        'info': 'blue'

      };

      const color = colors[this.notification.type];

      return {
        title: `bg-${ color }-500`,
        message: [`text-${ color }-700`, `border-${ color }-400`]
      };
    }
  }
</script>
