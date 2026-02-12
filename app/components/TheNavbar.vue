<template>
  <nav class="navbar glass">
    <div class="container navbar-content">
      <NuxtLink to="/" class="brand">
        <img src="/image/cv-cipta-mandiri-sampling-logo-background-remove.png" alt="Cipta Mandiri Sampling Logo" class="brand-logo" />
      </NuxtLink>
      
      <div class="menu-toggle" @click="isOpen = !isOpen">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>

      <ul class="nav-links" :class="{ 'active': isOpen }">
        <li><NuxtLink to="/" @click="isOpen = false">Home</NuxtLink></li>
        <li><NuxtLink to="/about" @click="isOpen = false">About</NuxtLink></li>
        <li><NuxtLink to="/products" @click="isOpen = false">Products</NuxtLink></li>
        <li><NuxtLink to="/contact" @click="isOpen = false" class="btn btn-primary !text-white">Contact</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const isOpen = ref(false)
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--header-height);
  z-index: 1000;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.brand {
  display: flex;
  align-items: center;
}

.brand-logo {
  height: 50px;
  width: auto;
  object-fit: contain;
}

.nav-links {
  display: flex;
  gap: 30px;
  align-items: center;
}

.nav-links a {
  font-weight: 500;
  color: var(--color-text);
  font-size: 1rem;
}

.nav-links a:hover, .nav-links a.router-link-active {
  color: var(--color-accent);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: var(--color-primary);
  border-radius: 3px;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: var(--header-height);
    left: 0;
    width: 100%;
    background-color: var(--color-white);
    flex-direction: column;
    padding: 20px 0;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.3s ease;
    z-index: -1;
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
