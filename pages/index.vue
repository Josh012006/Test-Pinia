// pages/index.vue

<script setup lang="ts">

// import { useThemeStore } from '~/stores/theme'; // Adjust the path as necessary

const themeStore = useThemeStore();

const { theme } = storeToRefs(themeStore);

</script>


<template>
    <div>
        <h1>Welcome to Nuxt 3</h1>
        <p>Current theme: {{ theme }}</p>
        <button @click="themeStore.toggleTheme">Toggle Theme</button>
    </div>
</template>