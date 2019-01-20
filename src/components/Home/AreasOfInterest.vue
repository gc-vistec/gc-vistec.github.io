<template>
  <section id="areas-of-interest">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <h2>Areas of Interest</h2>
        </div>
        <div class="col-lg-6 col-md-12 text-center card-areaOfInterest" v-for="areaOfInterest in areasOfInterest" v-bind:key="areaOfInterest.name">
            <span class="aoi-icon fa" :class="areaOfInterest.iconName"></span>
            <div>
              <h3>{{areaOfInterest.name}}</h3>
              <h6>{{areaOfInterest.description}}</h6>
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
      areasOfInterest: [
        {
          name: 'Biomedical and Health Informatics',
          description: '',
          iconName: 'fa-stethoscope'
        },
        {
          name: 'Brain-Computer Interactions',
          description: '',
          iconName: 'fa-link'
        },
        {
          name: 'Computer Vision',
          description: '',
          iconName: 'fa-eye'
        },
        {
          name: 'Drug-driven Drug Discovery',
          description: '',
          iconName: 'fa-flask'
        },
        {
          name: 'Deep Learning',
          description: '',
          iconName: 'fa-cogs'
        },
        {
          name: 'Robotics',
          description: '',
          iconName: 'fa-android'
        },
        {
          name: 'Scalable Data Mining and Machine Learning',
          description: '',
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

  .card-areaOfInterest {
    padding: 30px;
    float: none;
    margin: 0 auto;
  }

  .card-areaOfInterest small {
    font-size: 120%;
  }

  .card-areaOfInterest small, .card-areaOfInterest h3 {
    font-weight: 600;
  }

  #areaOfInterest {
    padding-bottom: 30px;
  }
</style>
