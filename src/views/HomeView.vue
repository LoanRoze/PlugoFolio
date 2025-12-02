<template>
  <div>
    <HeroSection />
    <SkillsSection :skills="skills" />
    <ProjectList :projects="projects" :limit="3" />
    <ContactForm />
  </div>
</template>

<script setup>
import ContactForm from '../components/ContactForm.vue';
import HeroSection from '../components/HeroSection.vue';
import ProjectList from '../components/ProjectList.vue';
import SkillsSection from '../components/SkillsSection.vue';
import { usePortfolioData } from '../composables/usePortfolioData';

const { projects, skills } = usePortfolioData();
</script>
