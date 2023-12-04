<template>
  <div v-if="firstLesson">
    <NuxtLink
      class="underline font-medium"
      :to="firstLesson.path"
    >
      Go to first lesson
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import useFirstLesson from '@/composables/useFirstLesson';

const firstLesson = ref();

onMounted(async () => {
  firstLesson.value = await useFirstLesson();
});
</script>