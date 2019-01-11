<template>
  <nav class="navbar navbar-dark">
    <div class="container nav-container">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/"><i class="fa fa-arrow-left mr-2"></i>GO BACK</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  .navbar {
    background: linear-gradient(-90deg, rgb(88, 46, 145), rgb(160, 34, 58));
    color: rgba(255, 255, 255, 0.75) !important;
  }

  .nav-container {
    min-width: 100% !important;
    max-width: 100% !important;
    padding: 0;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, .6);
    font-size: .725rem;
    font-weight: 800;
  }

  .is-active, .navbar-dark .navbar-nav .nav-link:focus {
    color: rgba(255, 255, 255, 1) !important;
  }
</style>

