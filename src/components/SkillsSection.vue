<template>
  <section class="container-section py-10">
    <div class="card-surface p-6 md:p-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-semibold text-slate-900">Compétences clés</h2>
        <span class="text-sm text-slate-500">Basées sur le JSON d'origine</span>
      </div>
      <div class="grid gap-4 md:grid-cols-2">
        <div v-for="skill in skills" :key="skill.nom_competence" class="space-y-2">
          <div class="flex items-center justify-between text-sm font-medium text-slate-700">
            <span>{{ skill.nom_competence }}</span>
            <span class="text-primary">{{ skill.niveau_competence }}/10</span>
          </div>
          <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div class="h-2 bg-primary rounded-full" :style="{ width: `${(skill.niveau_competence / 10) * 100}%` }"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  skills: {
    type: Array,
    required: true,
  },
});
</script>
