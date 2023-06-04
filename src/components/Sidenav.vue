<script setup lang="ts">
  import Home from '@/components/icons/Home.vue'
  import Search from '@/components/icons/Search.vue'
  import MiniRepro from './MiniRepro.vue'
  import LibraryMusic from './icons/LibraryMusic.vue'
  import UserAccount from './icons/UserAccount.vue'
</script>
<template>
  <section class="sidenav-container">
    <div class="sidenav-content">
      <div class="sidenav-profile">
        <span> <UserAccount class="icons-sidenav" /> Profile</span>
      </div>
      <div class="sidenav-menu">
        <span> <Home class="icons-sidenav" /> Home</span>
        <span> <Search class="icons-sidenav" /> Search </span>
        <span> <LibraryMusic class="icons-sidenav" /> Library </span>
      </div>
    </div>
    <div class="sidenav-footer">
      <MiniRepro />
      <!-- mini reproductor -->
    </div>
  </section>
</template>
