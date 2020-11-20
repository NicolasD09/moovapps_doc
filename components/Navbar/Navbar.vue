<template>
  <nav class="flex flex-row items-center justify-between h-16 shadow-lg">
    <nuxt-link class="xl:mx-10 lg:mx-6" to="/">
      <span class="text-xl">Accueil</span>
    </nuxt-link>
    <div>
      <nuxt-link class="xl:mx-4 lg:mx-2" to="/functions">
        <span class="text-xl">Fonctions</span>
      </nuxt-link>
      <nuxt-link class="xl:mx-4 lg:mx-2" to="/admin">
        <span class="text-xl">Admin</span>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
