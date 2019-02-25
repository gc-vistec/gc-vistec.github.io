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
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#news" data-toggle="collapse" data-target=".navbar-collapse.show">ข่าวสาร</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#objectives" data-toggle="collapse" data-target=".navbar-collapse.show">จุดประสงค์</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#training-scheme" data-toggle="collapse" data-target=".navbar-collapse.show">รูปแบบการเรียนการสอน</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#curriculum" data-toggle="collapse" data-target=".navbar-collapse.show">หลักสูตรและการแบ่งระดับผู้เรียน</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#application" data-toggle="collapse" data-target=".navbar-collapse.show">สมัคร</a>
          </li>
          <li class="nav-item">
            <a class="scrollactive-item nav-link js-scroll-trigger" href="#contact" data-toggle="collapse" data-target=".navbar-collapse.show">มีคำถาม?</a>
          </li>
        </ul>
      </scrollactive>
      <div class="d-flex flex-row order-2 order-lg-3">
        <ul class="navbar-nav flex-row">
          <li class="nav-item"><a class="nav-link" href="http://dexsparkprogram.pttgcgroup.com/moodle">Moodle <i class="fa fa-book"></i></a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .navbar {
    background: linear-gradient(to right, rgb(0, 80, 147) 0%, rgb(88, 46, 145) 50%, rgb(160, 34, 58) 100%);
    color: rgba(255, 255, 255, 0.75) !important;
  }

  .nav-container {
    min-width: 100% !important;
    max-width: 100% !important;
    padding: 0;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, .6);
    font-size: .9rem;
    font-weight: 700;
  }

  .is-active, .navbar-dark .navbar-nav .nav-link:hover {
    color: rgba(255, 255, 255, 1) !important;
  }

  .navbar-toggler {
    border: transparent;
  }
</style>

