import { computed, ref } from 'vue';
import rawProjects from '../assets/data/projects.json';
import rawSkills from '../assets/data/skills.json';

const projects = ref([...rawProjects]);
const skills = ref([...rawSkills]);

export function usePortfolioData() {
  const findProject = (id) => projects.value.find((p) => p.id === Number(id));

  const highlightedProjects = computed(() => projects.value.slice(0, 6));

  return { projects, skills, findProject, highlightedProjects };
}
