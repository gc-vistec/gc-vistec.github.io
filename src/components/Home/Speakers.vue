<template>
  <section id="areas-of-interest">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <h2>Areas of Interest</h2>
        </div>
        <div class="col-lg-6 col-md-12 text-center card-speaker" v-for="speaker in speakers" v-bind:key="speaker.name">
            <!-- <a class="img" :href="speaker.link" target="_blank"> -->
              <!-- <div class="img-overlay"><i class="fa fa-external-link"></i></div> -->
              <!-- <img class="img-speaker" :src="speaker.imageSrc"> -->
              <span class="aoi-icon fa" :class="speaker.iconName"></span>
            <!-- </a> -->
            <div>
              <!-- <small>{{speaker.title}}</small> -->
              <h3>{{speaker.name}}</h3>
              <h6>{{speaker.bio}}</h6>
              <!-- <small>FROM</small>
              <h6>{{speaker.university}}</h6>
              <small>ON THE TOPIC OF</small>
              <h6>{{speaker.topic}}</h6> -->
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
      speakers: [
        {
          name: 'Biomedical and Health Informatics',
          bio: '',
          iconName: 'fa-stethoscope'
        },
        {
          name: 'Brain-Computer Interactions',
          bio: '',
          iconName: 'fa-link'
        },
        {
          name: 'Computer Vision',
          bio: '',
          iconName: 'fa-eye'
        },
        {
          name: 'Drug-driven Drug Discovery',
          bio: '',
          iconName: 'fa-flask'
        },
        {
          name: 'Deep Learning',
          bio: '',
          iconName: 'fa-cogs'
        },
        {
          name: 'Robotics',
          bio: '',
          iconName: 'fa-android'
        },
        {
          name: 'Scalable Data Mining and Machine Learning',
          bio: '',
          iconName: 'fa-database'
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

  .aoi-icon {
    font-size: 6rem;
    color: rgb(131, 131, 131);
    margin-bottom: 1rem;
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

  .card-speaker {
    padding: 30px;
    float: none;
    margin: 0 auto;
  }

  .card-speaker small {
    font-size: 120%;
  }

  .card-speaker small, .card-speaker h3 {
    font-weight: 600;
  }

  #speaker {
    padding-bottom: 30px;
  }
</style>
