<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container nav-container">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <scrollactive class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#page-top" data-toggle="collapse" data-target="navbar-collapse.show"><i class="fa fa-arrow-up"></i></a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#key-dates" data-toggle="collapse" data-target=".navbar-collapse.show">KEY DATES</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#announcements" data-toggle="collapse" data-target=".navbar-collapse.show">ANNOUNCEMENTS</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#committee" data-toggle="collapse" data-target=".navbar-collapse.show">COMMITTEE</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#program" data-toggle="collapse" data-target=".navbar-collapse.show">PROGRAM</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#speakers" data-toggle="collapse" data-target=".navbar-collapse.show">SPEAKERS</a>
          </li>
          <!-- <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#accommodation" data-toggle="collapse" data-target=".navbar-collapse.show">ACCOMMODATION</a>
          </li> -->
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#registration" data-toggle="collapse" data-target=".navbar-collapse.show">REGISTRATION</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#submission" data-toggle="collapse" data-target=".navbar-collapse.show">SUBMISSION</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#venue" data-toggle="collapse" data-target=".navbar-collapse.show">VENUE</a>
          </li>
          <!-- <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#faq" data-toggle="collapse" data-target=".navbar-collapse.show">FAQ</a>
          </li> -->
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#contact" data-toggle="collapse" data-target=".navbar-collapse.show">CONTACT</a>
          </li>
        </ul>
      </scrollactive>
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

  .is-active, .navbar-dark .navbar-nav .nav-link:hover {
    color: rgba(255, 255, 255, 1) !important;
  }

  .navbar-toggler {
    border: transparent;
  }
</style>

