<template>
  <section class="container-section py-16 md:py-20">
    <div class="grid md:grid-cols-5 gap-10 items-center">
      <div class="md:col-span-3 space-y-6">
        <p class="text-sm font-semibold text-primary uppercase tracking-wide">Loan Roze · Full Stack</p>
        <h1 class="text-3xl md:text-4xl font-bold leading-tight text-slate-900">
          Construisons des expériences web performantes, ludiques et accessibles.
        </h1>
        <p class="text-lg text-slate-600">
          Du jeu PixiJS aux apps React Native en passant par les API Express, j'assemble des interfaces
          fluides, des backends robustes et une UX claire pour livrer vite et bien.
        </p>
        <div class="flex gap-3 flex-wrap">
          <RouterLink
            to="/projects"
            class="bg-primary text-white px-4 py-2 rounded-lg font-medium shadow hover:shadow-md transition"
          >
            Voir les projets
          </RouterLink>
          <a
            href="#contact"
            class="px-4 py-2 rounded-lg font-medium border border-slate-300 text-slate-800 hover:border-primary hover:text-primary transition"
          >
            Me contacter
          </a>
        </div>
      </div>
      <div class="md:col-span-2 card-surface p-6 space-y-4">
        <div class="flex items-center gap-4">
          <div class="h-12 w-12 rounded-full bg-primary/10 text-primary grid place-items-center font-bold">LR</div>
          <div>
            <p class="text-sm text-slate-500">Disponible</p>
            <p class="font-semibold text-slate-900">Nouveaux projets frontend & backend</p>
          </div>
        </div>
        <p class="text-slate-600 leading-relaxed">
          Approche clean code, séparation claire des responsabilités et composants réutilisables pour garder
          un socle fiable dans chaque stack.
        </p>
        <div class="flex gap-2 flex-wrap">
          <span class="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Vue 3</span>
          <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">React Native</span>
          <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">Node.js</span>
          <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">Tailwind</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
