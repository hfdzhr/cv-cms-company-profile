<template>
  <footer class="footer">
    <div class="container grid">
      <div class="col">
        <NuxtLink to="/" class="footer-brand-link">
          <img src="/image/cv-cipta-mandiri-sampling-logo-background-remove.png" alt="Cipta Mandiri Sampling Logo" class="footer-logo" />
        </NuxtLink>
        <p>Mitra terpercaya Anda untuk solusi alat sampling lingkungan berkualitas tinggi.</p>
      </div>
      
      <div class="col">
        <h4 class="!text-white">Navigasi</h4>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About Us</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </div>

      <div class="col">
        <h4 class="!text-white">Kontak</h4>
        <ul class="contact-info">
          <li><strong>Phone:</strong> +62 812-3456-7890</li>
          <li><strong>Email:</strong> info@blocksampling.com</li>
          <li><strong>Address:</strong> Jl. Raya Sampling No. 123, Jakarta</li>
        </ul>
      </div>
    </div>
    <div class="copyright text-center text-white">
      <p>&copy; {{ new Date().getFullYear() }} CV Cipta Mandiri Sampling. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-primary);
  color: #fff;
  padding-top: 60px;
  margin-top: auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-brand-link {
  display: inline-block;
  margin-bottom: 20px;
}

.footer-logo {
  height: 60px; /* Slightly larger in footer */
  width: auto;
  object-fit: contain;
  background-color: rgba(255, 255, 255, 0.9); /* Add background for visibility on dark footer */
  padding: 5px;
  border-radius: 8px;
}

h4 {
  color: var(--color-accent);
  margin-bottom: 20px;
  font-size: 1.2rem;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

a {
  color: #cbd5e1;
}

a:hover {
  color: var(--color-accent);
  padding-left: 5px;
}

.contact-info li {
  color: #cbd5e1;
}

.contact-info li:hover {
  color: var(--color-slate-900);

}

.copyright {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 20px 0;
  color: var(--color-white);
  font-size: 0.9rem;
}
</style>
