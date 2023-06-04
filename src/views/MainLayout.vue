<script setup lang="ts">
  import Sidenav from '@/components/Sidenav.vue'
</script>
<template>
  <div class="layout">
    <Sidenav />
    <div class="main-layout">
      <div class="container-layout">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
