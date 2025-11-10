<script lang="ts" setup>
const title = 'De Brabantse 11 Stedentocht.';
const description =
  'Acht Tilburgse vaders lopen 200 kilometer voor kinderen in kwetsbare situaties.';
const image = 'https://www.debrabantse11stedentocht.nl/background.jpg';

useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,
  description,
  ogDescription: description,
  twitterDescription: description,
  ogImage: image,
  twitterImage: image,
  twitterCard: 'summary_large_image',
  ogUrl: 'https://www.debrabantse11stedentocht.nl',
  lang: 'nl-NL',
  icon: '/favicon.svg',
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <ComingSoon />
  </div>
</template>
