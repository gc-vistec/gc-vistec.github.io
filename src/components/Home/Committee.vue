<template>
  <section id="committee">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <h2>COMMITTEE</h2>
        </div>
        <div class="col-lg-6 col-sm-12 text-center card-committee" v-for="committee in committees" v-bind:key="committee.name">
            <!-- <a class="img" :href="committee.link" target="_blank">
              <div class="img-overlay"><i class="fa fa-external-link"></i></div>
              <img class="img-committee" :src="committee.imageSrc">
            </a> -->
            <div>
              <small>{{committee.title}}</small>
              <h3>{{committee.name}}</h3>
              <h6>{{committee.position}}</h6>
              <!-- <h6>{{committee.school}}</h6>
              <h6>{{committee.university}}</h6>  -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      committees: [
        {
          title: 'Dr.',
          name: 'Sarana Nutanong',
          imageSrc: require('../../assets/committee/dr_sarana_nutanong.png'),
          position: 'General Chairman',
          school: 'School of Information Science & Technology',
          university: 'Vidyasirimedhi Institute of Science & Technology',
          link: 'http://www.vistec.ac.th/academic/faculty_detail.php?school=IST&id=55'
        },
        {
          title: 'Prof. Dr.',
          name: 'Chokchai  Leangsuksun',
          imageSrc: require('../../assets/committee/dr_sarana_nutanong.png'),
          position: 'Undergraduate Thesis Program',
          school: 'School of Information Science & Technology',
          university: 'Vidyasirimedhi Institute of Science & Technology',
          link: 'http://www.vistec.ac.th/academic/faculty_detail.php?school=IST&id=55'
        },
        {
          title: 'Prof. Dr.',
          name: 'Poramate Manoonpong',
          imageSrc: require('../../assets/committee/dr_sarana_nutanong.png'),
          position: 'Undergraduate Thesis Program',
          school: 'School of Information Science & Technology',
          university: 'Vidyasirimedhi Institute of Science & Technology',
          link: 'http://www.vistec.ac.th/academic/faculty_detail.php?school=IST&id=55'
        },
        {
          title: 'Dr.',
          name: 'Theerawit Wilaiprasitporn',
          imageSrc: require('../../assets/committee/dr_sarana_nutanong.png'),
          position: 'Undergraduate Thesis Program',
          school: 'School of Information Science & Technology',
          university: 'Vidyasirimedhi Institute of Science & Technology',
          link: 'http://www.vistec.ac.th/academic/faculty_detail.php?school=IST&id=55'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .img {
    border-radius: 100%;
    display: inline-block;
    flex: 0 0 200px;
    height: 200px;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 200px;
  }

  .img img {
    height: 100%;
  }

  .img-overlay {
    align-items: center;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 0.25s;
    z-index: 1;
  }

  .img-overlay:hover {
    opacity: 1;
    background-color: rgba(46,204,113,0.4);
    background: linear-gradient(65deg, rgba(88, 46, 145, 0.4), rgba(160, 34, 58, 0.4));
    color: #fafafa;
    font-size: 24px;
  }

  .card-committee {
    padding: 30px;
    float: none;
    margin: 0 auto;
  }

  .card-committee small {
    font-size: 120%;
  }

  .card-committee small, .card-committee h3 {
    font-weight: 600;
  }

  #committee {
    padding-bottom: 30px;
  }
</style>
