<template>
  <section class="container-section py-12 space-y-6">
    <div class="flex items-center justify-between gap-4">
      <div>
        <p class="text-sm uppercase tracking-wide text-primary font-semibold">Projets</p>
        <h2 class="text-2xl font-bold text-slate-900">Sélection</h2>
      </div>
      <RouterLink to="/projects" class="text-primary text-sm font-semibold hover:underline">
        Voir tout
      </RouterLink>
    </div>
    <div class="grid gap-6 md:grid-cols-3">
      <ProjectCard v-for="project in displayedProjects" :key="project.id" :project="project" />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import ProjectCard from './ProjectCard.vue';

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
  limit: {
    type: Number,
    default: null,
  },
});

const displayedProjects = computed(() => {
  if (!props.limit) return props.projects;
  return props.projects.slice(0, props.limit);
});
</script>
