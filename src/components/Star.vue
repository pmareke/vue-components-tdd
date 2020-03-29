<template functional>
  <svg fill="none"
       stroke="currentColor"
       stroke-linecap="round"
       stroke-linejoin="round"
       stroke-width="2"
       preserveAspectRatio="xMinYMid slice"
       viewBox="0 0 32 32"
       :class="[].concat(data.staticClass, data.class)"
       class="w-8 h-8">
    <path d="M16 26.369l-9.732 5.38 1.858-11.396L.252 12.28l10.882-1.66L16 .251l4.866 10.369 10.882 1.66-7.874 8.073 1.858 11.395z"/>
  </svg>
</template>

<style>
  .filled {
    fill: currentColor;
  }
</style>
