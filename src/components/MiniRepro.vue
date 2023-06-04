<script setup lang="ts">
  import Previous from './icons/Previous.vue'
  import Play from './icons/Play.vue'
  import Pause from './icons/Pause.vue'
  import Next from './icons/Next.vue'
  import Album from './icons/Album.vue'
</script>
<template>
  <div class="mini-container">
    <div class="mini-album-info">
      <Album />
    </div>
    <div class="mini-controls">
      <Previous />
      <Play />
      <Next />
    </div>
  </div>
</template>
