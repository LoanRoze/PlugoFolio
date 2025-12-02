<template>
  <header class="sticky top-0 z-20 bg-slate-50/90 backdrop-blur border-b border-slate-200">
    <div class="container-section flex items-center justify-between py-4">
      <RouterLink to="/" class="flex items-center gap-3 font-semibold text-lg text-primary">
        <span class="inline-block h-10 w-10 rounded-full bg-primary/10 grid place-items-center font-bold">LR</span>
        <span>Loan Roze · Portfolio</span>
      </RouterLink>
      <nav class="flex items-center gap-6 text-sm font-medium text-slate-700">
        <RouterLink class="hover:text-primary transition" to="/">Accueil</RouterLink>
        <RouterLink class="hover:text-primary transition" to="/projects">Projets</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
