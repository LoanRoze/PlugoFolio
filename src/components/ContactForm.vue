<template>
  <section id="contact" class="container-section py-12">
    <div class="card-surface p-6 md:p-8 space-y-6">
      <div class="space-y-2">
        <p class="text-sm uppercase tracking-wide text-primary font-semibold">Contact</p>
        <h2 class="text-2xl font-bold text-slate-900">Écrivons quelque chose ensemble</h2>
        <p class="text-slate-600">Validation côté client et redirection vers votre messagerie.</p>
      </div>
      <form class="space-y-4" @submit.prevent="handleSubmit">
        <div class="grid md:grid-cols-2 gap-4">
          <label class="space-y-2 text-sm font-medium text-slate-700">
            Nom complet
            <input
              v-model.trim="form.name"
              type="text"
              class="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            />
            <span v-if="errors.name" class="text-xs text-red-600">{{ errors.name }}</span>
          </label>
          <label class="space-y-2 text-sm font-medium text-slate-700">
            Email
            <input
              v-model.trim="form.email"
              type="email"
              class="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            />
            <span v-if="errors.email" class="text-xs text-red-600">{{ errors.email }}</span>
          </label>
        </div>
        <label class="space-y-2 text-sm font-medium text-slate-700">
          Message
          <textarea
            v-model.trim="form.message"
            rows="4"
            class="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
            required
          ></textarea>
          <span v-if="errors.message" class="text-xs text-red-600">{{ errors.message }}</span>
        </label>
        <div class="flex items-center gap-3">
          <button
            type="submit"
            class="bg-primary text-white px-4 py-2 rounded-lg font-medium shadow hover:shadow-md transition"
          >
            Envoyer
          </button>
          <p v-if="success" class="text-green-600 text-sm font-medium">Merci ! Votre messagerie va préparer l'email.</p>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({ name: '', email: '', message: '' });
const errors = reactive({ name: '', email: '', message: '' });
const success = ref(false);

const validate = () => {
  errors.name = form.name.length < 2 ? 'Le nom doit comporter au moins 2 caractères.' : '';
  errors.email = /\S+@\S+\.\S+/.test(form.email) ? '' : 'Email invalide.';
  errors.message = form.message.length < 10 ? 'Le message doit comporter au moins 10 caractères.' : '';

  return !errors.name && !errors.email && !errors.message;
};

const openMailClient = () => {
  const subject = encodeURIComponent('Contact portfolio');
  const body = encodeURIComponent(`Nom : ${form.name}\nEmail : ${form.email}\n\nMessage :\n${form.message}`);
  window.location.href = `mailto:loanroze33600@gmail.com?subject=${subject}&body=${body}`;
};

const handleSubmit = () => {
  success.value = false;
  if (!validate()) return;
  openMailClient();
  success.value = true;
  Object.assign(form, { name: '', email: '', message: '' });
};
</script>
