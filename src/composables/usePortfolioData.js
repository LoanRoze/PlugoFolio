import { computed, ref } from 'vue';
import rawProjects from '../assets/data/projects.json';
import rawSkills from '../assets/data/skills.json';

const projects = ref([...rawProjects]);
const skills = ref([...rawSkills]);

export function usePortfolioData() {
  const nextId = computed(() =>
    projects.value.length ? Math.max(...projects.value.map((p) => p.id)) + 1 : 1
  );

  const addProject = (payload) => {
    projects.value.push({ id: nextId.value, ...payload });
  };

  const findProject = (id) => projects.value.find((p) => p.id === Number(id));

  return { projects, skills, addProject, findProject };
}
