<template>
  <div>
    <navbar></navbar>
    <header>
      <div class="container pt-5 pb-3 mb-3">
        <div class="row">
          <div class="col-sm-12">
            Submit Query
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">          
          <form class="form-horizontal" @submit.prevent="search">
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('subject')}">
              <label class="control-label" for="subject">Subject</label>
              <select v-model="subject" class="form-control" name="subject" options="subject">
                <option disabled value="">Select subject</option>
                <option v-for="option in subjects" v-bind:value="option.value" v-bind:key="option.value">
                  {{ option.text }}
                </option>
              </select>
              <i v-show="errors.has('subject')" class="fa fa-warning"></i>
              <span v-show="errors.has('subject')" class="help text-error">{{ errors.first('subject') }}</span>
            </div>

            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('name')}">
              <label class="control-label" for="name">Name</label>
              <p class="control has-icon has-icon-right">
                <input v-model="name" v-validate="'required'" name="name" class="input form-control" type="text" placeholder="John Doe">
                <i v-show="errors.has('name')" class="fa fa-warning"></i>
                <span v-show="errors.has('name')" class="help text-error">{{ errors.first('name') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('organization')}">
              <label class="control-label" for="organization">Organization</label>
              <p class="control has-icon has-icon-right">
                <input v-model="organization" v-validate="'required'" name="organization" class="input form-control" type="text" placeholder="John S. Doe Institute of Technology">
                <i v-show="errors.has('organization')" class="fa fa-warning"></i>
                <span v-show="errors.has('organization')" class="help text-error">{{ errors.first('organization') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('country')}">
              <label class="control-label" for="country">Country</label>
              <p class="control has-icon has-icon-right">
                <input v-model="country" v-validate="'required'" name="country" class="input form-control" type="text" placeholder="Thailand">
                <i v-show="errors.has('country')" class="fa fa-warning"></i>
                <span v-show="errors.has('country')" class="help text-error">{{ errors.first('country') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('email')}">
              <label class="control-label" for="email">Email</label>
              <p class="control has-icon has-icon-right">
                <input v-model="email" v-validate="'required'" name="email" class="input form-control" type="text" placeholder="john.d@institute.edu">
                <i v-show="errors.has('email')" class="fa fa-warning"></i>
                <span v-show="errors.has('email')" class="help text-error">{{ errors.first('email') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('question')}">
              <label class="control-label" for="question">Question and Comment</label>
              <p class="control has-icon has-icon-right">
                <textarea v-model="question" v-validate="'required'" name="question" class="input form-control" type="text" placeholder="How do I submit my thesis?" rows=10></textarea>
                <i v-show="errors.has('question')" class="fa fa-warning"></i>
                <span v-show="errors.has('question')" class="help text-error">{{ errors.first('question') }}</span>
              </p>
            </div>
          </form>
        </div>
      </div>
     <button type="button" class="btn btn-lg btn-primary btn-block mb-3" data-toggle="modal" data-target=".bs-example-modal-sm" v-on:click="postPost()">Submit query</button>
    </div>
    <cs-footer></cs-footer>
  </div>
</template>

<script>
import myDatepicker from 'vue-datepicker/vue-datepicker-es6.vue'
import axios from 'axios'
import Navbar from '@/components/Forms/Navbar'
import CsFooter from '@/components/Home/Footer'

const BASE_URL = 'https://api.ivaa.space/api/'

export default {
  components: {
    Navbar,
    CsFooter,
    'date-picker': myDatepicker
  },
  name: 'Query',
  data () {
    return {
      name: '',
      subjects: [
        { text: 'Registration', value: 'registration' },
        { text: 'Submission', value: 'submission' },
        { text: 'Other', value: 'other' }
      ],
      subject: '',
      organization: '',
      country: '',
      email: '',
      question: ''
    }
  },
  computed: {
  },
  props: {
    loggingIn: {
      default: false
    }
  },
  methods: {
    postPost () {
      this.$validator.validateAll().then(result => {
        if (result) {
          console.log('in')
          axios.post(BASE_URL + `questions/`, {
            subject: this.subject,
            organization: this.organization,
            country: this.country,
            email: this.email,
            question: this.question
          })
            .then(response => {
              console.log(response)
              console.log('send')
              alert('Submit successful, Thank You')
            })
            .catch(e => {
              console.log(e)
            })
          return
        }
      })
    }
  },
  created () {
  }
}
</script>

<style scoped>
header {
  background: linear-gradient(-90deg, rgb(88, 46, 145), rgb(160, 34, 58));
  color: rgba(255,255,255,1);
  font-size: 4rem;
  line-height: 4rem;
}

.btn-primary {
  background: linear-gradient(-90deg, rgb(88, 46, 145), rgb(160, 34, 58));  
  font-weight: 600;
}
</style>