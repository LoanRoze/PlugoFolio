<template>
  <article class="card-surface overflow-hidden flex flex-col">
    <img :src="project.img_url" :alt="project.nom_projet" class="h-44 w-full object-cover" />
    <div class="p-5 flex flex-col gap-3 flex-1">
      <div class="flex items-center justify-between gap-3">
        <h3 class="text-lg font-semibold text-slate-900">{{ project.nom_projet }}</h3>
        <span class="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">#{{ project.id }}</span>
      </div>
      <p class="text-sm text-slate-600 flex-1">{{ project.description_courte }}</p>
      <div class="flex items-center justify-between">
        <RouterLink
          :to="`/projects/${project.id}`"
          class="text-primary font-semibold text-sm hover:underline"
        >
          Voir le détail
        </RouterLink>
        <div class="flex gap-2 text-slate-500 text-xs">
          <a
            v-if="project.lien_github"
            :href="project.lien_github"
            class="hover:text-primary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            v-if="project.lien_projet"
            :href="project.lien_projet"
            class="hover:text-primary"
            target="_blank"
            rel="noreferrer"
          >
            Démo
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
