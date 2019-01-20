<template>
  <div class="home">
    <navbar></navbar>
    <div class="header-jumbotron text-center">
      <div class="container-logo text-center">
        <div class="row">
          <div class="col-md-12">
            <h1 class="material-icons md-48 text-white">
                school
            </h1>
          </div>
          <div class="col-md-12">
            <h1 class="text-white">
              IST Research Internship 2019
            </h1>
          </div>
        </div>
      </div>
    </div>
    <key-dates class="bg-stripe"></key-dates>
    <areas-of-interest class="bg-stripe"></areas-of-interest>
    <benefits class="bg-stripe"></benefits>
    <application class="bg-stripe"></application>
    <contact class="bg-stripe"></contact>
    <cs-footer></cs-footer>
  </div>
</template>

<script>
  import KeyDates from '@/components/Home/KeyDates'
  import AreasOfInterest from '@/components/Home/AreasOfInterest'
  import Benefits from '@/components/Home/Benefits'
  import Application from '@/components/Home/Application'
  import Contact from '@/components/Home/Contact'
  import Navbar from '@/components/Home/Navbar'
  import CsFooter from '@/components/Home/Footer'
  export default {
    name: 'Home',
    methods: {},
    components: {
      KeyDates,
      AreasOfInterest,
      Benefits,
      Application,
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
    /* background: linear-gradient(to bottom, #fff 0%, #f0f0f0 100%); */
    background-image: url('../../assets/bg-hero.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* background-clip: border-box; */
  }

  .header-jumbotron h1 {
    font-size: 3rem;
  }

  @media (min-width: 992px) {
    .header-jumbotron {
      padding: 50px 20% 30px;
    }
    .header-jumbotron h1 {
      font-size: 5rem;
    }
  }

  .container-logo {
    width: 100%;
    padding-bottom: 10%;
  }

  .img-logo {
    margin-bottom: .75vh;
    max-height: 30vh;
  }

  .img-separator {
    margin: 2vh 0;
    max-height: 5vh;
    max-width: 10vh;
  }

  .img-hero-bg {
    position: absolute;
    width: 100%;
    bottom: -7.5vh;
    opacity: .75;
  }

  .bg-stripe:nth-of-type(odd) {
    background-color: #f0f0f0 !important;
  }
</style>
