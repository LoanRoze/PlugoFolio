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

    <div class="relative" v-if="displayedProjects.length">
      <div class="overflow-hidden rounded-2xl">
        <div
          class="flex transition-transform duration-500"
          :style="{ transform: `translateX(-${(activeIndex * 100) / slidesPerView}%)` }"
        >
          <div
            v-for="project in displayedProjects"
            :key="project.id"
            class="flex-shrink-0 px-2"
            :style="{ width: `${100 / slidesPerView}%` }"
          >
            <ProjectCard :project="project" />
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between mt-4">
        <div class="flex gap-2">
          <button
            type="button"
            class="nav-button"
            :disabled="activeIndex === 0"
            @click="goToPrevious"
            aria-label="Projet précédent"
          >
            ←
          </button>
          <button
            type="button"
            class="nav-button"
            :disabled="activeIndex >= maxIndex"
            @click="goToNext"
            aria-label="Projet suivant"
          >
            →
          </button>
        </div>
        <div class="flex gap-2">
          <span
            v-for="(project, index) in displayedProjects"
            :key="project.id"
            class="h-2 w-2 rounded-full transition"
            :class="index >= activeIndex && index < activeIndex + slidesPerView ? 'bg-primary' : 'bg-slate-300'"
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
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

const activeIndex = ref(0);
const slidesPerView = ref(1);

const maxIndex = computed(() => Math.max(displayedProjects.value.length - slidesPerView.value, 0));

const updateSlidesPerView = () => {
  const width = window.innerWidth;
  if (width >= 1200) {
    slidesPerView.value = 3;
  } else if (width >= 768) {
    slidesPerView.value = 2;
  } else {
    slidesPerView.value = 1;
  }
  activeIndex.value = Math.min(activeIndex.value, maxIndex.value);
};

const goToNext = () => {
  activeIndex.value = Math.min(activeIndex.value + 1, maxIndex.value);
};

const goToPrevious = () => {
  activeIndex.value = Math.max(activeIndex.value - 1, 0);
};

onMounted(() => {
  updateSlidesPerView();
  window.addEventListener('resize', updateSlidesPerView);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSlidesPerView);
});

watch(displayedProjects, () => {
  activeIndex.value = 0;
  updateSlidesPerView();
});
</script>

<style scoped>
.nav-button {
  @apply h-10 w-10 rounded-full border border-slate-200 text-slate-700 grid place-items-center hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed;
}
</style>
