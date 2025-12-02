<template>
  <div class="container-section py-12 space-y-8">
    <div class="space-y-2">
      <p class="text-sm uppercase tracking-wide text-primary font-semibold">Projets</p>
      <h1 class="text-3xl font-bold text-slate-900">Tous les projets</h1>
      <p class="text-slate-600">Grille réactive basée sur le JSON d'origine.</p>
    </div>
    <div class="grid gap-6 md:grid-cols-3">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
    <AddProjectForm @submit="addProject" />
  </div>
</template>

<script setup>
import AddProjectForm from '../components/AddProjectForm.vue';
import ProjectCard from '../components/ProjectCard.vue';
import { usePortfolioData } from '../composables/usePortfolioData';

const { projects, addProject } = usePortfolioData();
</script>
