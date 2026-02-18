<template>
  <div class="flex flex-col min-h-screen">
    <TheNavbar />
    <main class="flex-1" style="padding-top: var(--header-height);">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
