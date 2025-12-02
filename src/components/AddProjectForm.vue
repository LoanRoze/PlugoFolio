<template>
  <section class="card-surface p-6 space-y-4">
    <div class="space-y-1">
      <p class="text-sm uppercase tracking-wide text-primary font-semibold">Nouveau projet</p>
      <h3 class="text-lg font-semibold text-slate-900">Ajouter et mettre à jour en temps réel</h3>
    </div>
    <form class="space-y-3" @submit.prevent="submitForm">
      <div class="grid md:grid-cols-2 gap-3">
        <label class="text-sm font-medium text-slate-700 space-y-1">
          Nom du projet
          <input v-model.trim="draft.nom_projet" type="text" class="input" required />
        </label>
        <label class="text-sm font-medium text-slate-700 space-y-1">
          Image (URL)
          <input v-model.trim="draft.img_url" type="url" class="input" required />
        </label>
      </div>
      <label class="text-sm font-medium text-slate-700 space-y-1">
        Description courte
        <input v-model.trim="draft.description_courte" type="text" class="input" required />
      </label>
      <label class="text-sm font-medium text-slate-700 space-y-1">
        Description longue
        <textarea v-model.trim="draft.description_longue" rows="3" class="input" required></textarea>
      </label>
      <div class="grid md:grid-cols-2 gap-3">
        <label class="text-sm font-medium text-slate-700 space-y-1">
          Lien GitHub (optionnel)
          <input v-model.trim="draft.lien_github" type="url" class="input" />
        </label>
        <label class="text-sm font-medium text-slate-700 space-y-1">
          Lien projet (optionnel)
          <input v-model.trim="draft.lien_projet" type="url" class="input" />
        </label>
      </div>
      <div class="flex items-center gap-3">
        <button type="submit" class="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:shadow">
          Ajouter
        </button>
        <p v-if="feedback" class="text-green-600 text-sm font-medium">Projet ajouté !</p>
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';

const emit = defineEmits(['submit']);

const draft = reactive({
  nom_projet: '',
  description_courte: '',
  description_longue: '',
  img_url: '',
  lien_github: '',
  lien_projet: '',
});

const feedback = ref(false);

const submitForm = () => {
  feedback.value = false;
  emit('submit', { ...draft });
  Object.keys(draft).forEach((key) => (draft[key] = ''));
  feedback.value = true;
};
</script>

<style scoped>
.input {
  @apply w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30;
}
</style>
