<template>
  <div>
    <HeroSection />
    <SkillsSection :skills="skills" />
    <ProjectList :projects="highlightedProjects" />
    <ContactForm />
  </div>
</template>

<script setup>
import ContactForm from '../components/ContactForm.vue';
import HeroSection from '../components/HeroSection.vue';
import ProjectList from '../components/ProjectList.vue';
import SkillsSection from '../components/SkillsSection.vue';
import { usePortfolioData } from '../composables/usePortfolioData';

const { highlightedProjects, skills } = usePortfolioData();
</script>
