<template>
  <div class="home">
    <navbar></navbar>
    <div class="header-jumbotron text-center">
      <div class="container-logo text-center">
        <div>
          <img class="img-logo" src="../../assets/logo_istfr.svg" alt="Logo">
        </div>
        <div>
          <img class="img-separator" src="../../assets/separator.svg">
        </div>
        <div class="row">
          <div class="col-md-12">
            Promoting academic excellence in
            Computer Science through academic
            industry collaborative research
          </div>
        </div>
      </div>
      <div class="div-scroll-down"></div>
      <img class="img-hero-bg" src="../../assets/line_header.svg">
    </div>
    <key-dates class="bg-stripe"></key-dates>
    <announcements class="bg-stripe"></announcements>
    <committee class="bg-stripe"></committee>
    <program class="bg-stripe"></program>
    <speakers class="bg-stripe"></speakers>
    <!-- <accommodation class="bg-stripe"></accommodation> -->
    <registration class="bg-stripe"></registration>
    <submission class="bg-stripe"></submission>
    <venue class="bg-stripe"></venue>
    <!-- <faq class="bg-stripe"></faq> -->
    <contact class="bg-stripe"></contact>
    <cs-footer></cs-footer>
  </div>
</template>

<script>
  import KeyDates from '@/components/Home/KeyDates'
  import Announcements from '@/components/Home/Announcements'
  import Committee from '@/components/Home/Committee'
  import Program from '@/components/Home/Program'
  import Speakers from '@/components/Home/Speakers'
  import Accommodation from '@/components/Home/Accommodation'
  import Registration from '@/components/Home/Registration'
  import Submission from '@/components/Home/Submission'
  import Venue from '@/components/Home/Venue'
  import Contact from '@/components/Home/Contact'
  import Navbar from '@/components/Home/Navbar'
  import CsFooter from '@/components/Home/Footer'
  // import Faq from '@/Components/Home/FAQ'
  export default {
    name: 'Home',
    methods: {},
    components: {
      KeyDates,
      Announcements,
      Committee,
      Program,
      Speakers,
      Accommodation,
      Registration,
      Submission,
      Venue,
      Contact,
      Navbar,
      CsFooter
      // Faq
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
    background: linear-gradient(to bottom, #fff 0%, #f0f0f0 100%)
  }

  @media (min-width: 992px) {
    .header-jumbotron {
      padding: 50px 20% 30px;
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
