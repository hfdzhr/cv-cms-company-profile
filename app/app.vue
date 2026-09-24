<script setup>
const route = useRoute()
const siteUrl = 'https://cipta-sampling.vercel.app'

useHead({
  link: [
    {
      rel: 'canonical',
      href: computed(() => {
        const path = route.path === '/' ? '' : route.path.replace(/\/$/, '')
        return `${siteUrl}${path}`
      })
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
