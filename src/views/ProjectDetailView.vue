<template>
  <div class="space-y-8" v-if="project">
    <ProjectHero :project="project" />
    <section class="container-section pb-12">
      <div class="card-surface p-6 space-y-4">
        <h2 class="text-xl font-semibold text-slate-900">Informations clés</h2>
        <ul class="space-y-2 text-slate-700">
          <li><span class="font-semibold">ID :</span> {{ project.id }}</li>
          <li><span class="font-semibold">Titre :</span> {{ project.nom_projet }}</li>
          <li><span class="font-semibold">Lien GitHub :</span> {{ project.lien_github || 'N/A' }}</li>
          <li><span class="font-semibold">Lien projet :</span> {{ project.lien_projet || 'N/A' }}</li>
        </ul>
        <RouterLink to="/projects" class="text-primary font-semibold hover:underline text-sm">
          ← Retour aux projets
        </RouterLink>
      </div>
    </section>
  </div>
  <div v-else class="container-section py-16 text-center space-y-4">
    <p class="text-2xl font-bold text-slate-900">Projet introuvable</p>
    <RouterLink to="/projects" class="text-primary font-semibold hover:underline">Voir la liste</RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import ProjectHero from '../components/ProjectHero.vue';
import { usePortfolioData } from '../composables/usePortfolioData';

const route = useRoute();
const { findProject } = usePortfolioData();

const project = computed(() => findProject(route.params.id));
</script>
