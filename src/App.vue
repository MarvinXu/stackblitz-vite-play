<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Card from './components/Card.vue';
</script>

<template>
  <h1 text="center xl" p="4" bg="flag">Hello</h1>
  <div h="2/3" flex="~ wrap" justify="around" align="items-center">
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</template>
