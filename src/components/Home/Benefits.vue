<template>
  <section class="lead" id="benefits">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <h2>Benefits</h2>
        </div>
        <div class="col-lg-6 col-md-12 text-center card-benefit" v-for="benefit in benefits" v-bind:key="benefit.name">
          <span class="aoi-icon fa" :class="benefit.iconName"></span>
          <div>
            <h3>{{benefit.name}}</h3>
            <h6>{{benefit.description}}</h6>
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
      benefits: [
        {
          name: 'GPU Compute Credits',
          description: '',
          iconName: 'fa-server'
        },
        {
          name: 'Gym Access',
          description: '',
          iconName: 'fa-link'
        },
        {
          name: 'Salary (THB20,000/mo.)',
          description: '',
          iconName: 'fa-money'
        },
        {
          name: 'Free Accommodation',
          description: '',
          iconName: 'fa-home'
        },
        {
          name: 'Free Weekly Transportation to/from Bangkok',
          description: '',
          iconName: 'fa-bus'
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

  .card-benefit {
    padding: 30px;
    float: none;
    margin: 0 auto;
  }

  .card-benefit small {
    font-size: 120%;
  }

  .card-benefit small, .card-benefit h3 {
    font-weight: 600;
  }

  #benefit {
    padding-bottom: 30px;
  }
</style>
