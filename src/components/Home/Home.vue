<template>
  <div class="home">
    <navbar></navbar>
    <div class="header-jumbotron text-center">
      <div class="container-logo text-center">
        <div class="row">
          <div class="logos col-md-12">
            <img class="gc-logo" alt="PTTGC" src="../../assets/pttgc-logo.svg">
            <span class="logo-separator">|</span>
            <div class="horizontal-logo-separator"><hr></div>
            <img class="vistec-logo" alt="VISTEC" src="../../assets/vistec-logo-no-subtitle.svg">
          </div>
          <div class="jumbotron-text col-md-12">
            <h3>
              โครงการฝึกอบรมเพื่อพัฒนาบุคลากรด้าน Data Science โดยความร่วมมือระหว่าง GC และ VISTEC
            </h3>
          </div>
        </div>
      </div>
    </div>
    <!-- <key-dates class="bg-stripe"></key-dates> -->
    <objectives class="bg-stripe"></objectives>
    <training-scheme class="bg-stripe"></training-scheme>
    <curriculum class="bg-stripe"></curriculum>
    <requirements class="bg-stripe"></requirements>
    <!-- <contact class="bg-stripe"></contact> -->
    <cs-footer></cs-footer>
  </div>
</template>

<script>
  import Objectives from '@/components/Home/Objectives'
  import TrainingScheme from '@/components/Home/TrainingScheme'
  import Curriculum from '@/components/Home/Curriculum'
  import Requirements from '@/components/Home/Requirements'
  import Contact from '@/components/Home/Contact'
  import Navbar from '@/components/Home/Navbar'
  import CsFooter from '@/components/Home/Footer'
  export default {
    name: 'Home',
    methods: {},
    components: {
      Objectives,
      TrainingScheme,
      Curriculum,
      Requirements,
      Contact,
      Navbar,
      CsFooter
    }
  }
</script>

<style>
  .header-jumbotron {
    padding: 50px 5% 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    height: 100vh;
    font-size: 1.25rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .logos {
    margin-bottom: 1rem;
  }

  .logo-separator {
    font-size: 4.25rem;
    opacity: .75;
    margin: 0 .5rem;
  }

  .logo-separator, .sep-text {
    font-weight: 100;
  }

  .gc-logo {
    height: 4rem;
  }

  .vistec-logo {
    height: 4rem;
    padding-top: .95rem;
  }

  .gc-logo, .vistec-logo {
    margin-top: -1.5rem;
    margin-bottom: 1rem;
  }

  .horizontal-logo-separator {
    display: none;
    width: 15rem;
    margin: 0 auto;
  }
  
  .horizontal-logo-separator hr {
    border-width: .15rem;
    border-color: #212529;
    opacity: .6;
  }

  .header-jumbotron h1 {
    font-size: 3rem;
  }

  @media (max-width: 992px) {
    .logo-separator {
      display: none;
    }

    .horizontal-logo-separator {
      display: block;
    }

    .gc-logo, .vistec-logo {
      margin: 0;
    }

    .vistec-logo {
      margin-top: -.95rem;
    }

    .logos {
      margin-bottom: 3rem;
    }

    .jumbotron-text h3 {
      font-size: 1.4rem !important;
    }
  }

  .bg-stripe:nth-of-type(odd) {
    background-color: #f0f0f0 !important;
  }
</style>
