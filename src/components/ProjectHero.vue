<template>
  <section class="container-section py-12">
    <div class="card-surface overflow-hidden">
      <img :src="project.img_url" :alt="project.nom_projet" class="w-full h-72 object-cover" />
      <div class="p-6 md:p-8 space-y-4">
        <div class="flex items-center justify-between gap-3">
          <div>
            <p class="text-sm uppercase tracking-wide text-primary font-semibold">Projet #{{ project.id }}</p>
            <h1 class="text-3xl font-bold text-slate-900">{{ project.nom_projet }}</h1>
          </div>
          <div class="flex gap-2 text-sm">
            <a
              v-if="project.lien_github"
              :href="project.lien_github"
              target="_blank"
              rel="noreferrer"
              class="px-3 py-2 rounded-lg border border-slate-200 hover:border-primary hover:text-primary"
            >
              GitHub
            </a>
            <a
              v-if="project.lien_projet"
              :href="project.lien_projet"
              target="_blank"
              rel="noreferrer"
              class="px-3 py-2 rounded-lg bg-primary text-white shadow hover:shadow-md"
            >
              Voir le projet
            </a>
          </div>
        </div>
        <p class="text-lg text-slate-700 leading-relaxed">{{ project.description_longue }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
