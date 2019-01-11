<template>
  <div>
    <navbar></navbar>
    <header>
      <div class="container pt-5 pb-3 mb-3">
        <div class="row">
          <div class="col-sm-12">
            Register
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <form class="form-horizontal" @submit.prevent="search">
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('participantCategory')}">
              <label class="control-label" for="participantCategory">Participant Category</label>
              <select v-model="participantCategory" class="form-control form-control-lg" name="participantCategory" options="participantCategory">
                  <option disabled value="">Select Category</option>
                  <option v-for="option in participantCategories" v-bind:value="option.value" v-bind:key="option.value">
                    {{ option.text }}
                  </option>
              </select>
              <i v-show="errors.has('participantCategory')" class="fa fa-warning"></i>
              <span v-show="errors.has('participantCategory')" class="help text-error">{{ errors.first('participantCategory') }}</span>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('title')}">
              <label class="control-label" for="title">Title</label>
              <select v-model="title" class="form-control form-control-lg" name="title" options="titles">
                <option disabled value="">Select Title</option>
                <option v-for="option in titles" v-bind:value="option.value" v-bind:key="option.value">
                  {{ option.text }}
                </option>
              </select>
              <i v-show="errors.has('title')" class="fa fa-warning"></i>
              <span v-show="errors.has('title')" class="help text-error">{{ errors.first('title') }}</span>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('firstName')}">
              <label class="control-label" for="firstName">First Name</label>
              <p class="control has-icon has-icon-right">
                <input v-model="firstName" v-validate="'required'" name="firstName" class="input form-control form-control-lg" type="text" placeholder="John">
                <i v-show="errors.has('firstName')" class="fa fa-warning"></i>
                <span v-show="errors.has('firstName')" class="help text-error">{{ errors.first('firstName') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': false, 'has-error': errors.has('middleName')}">
              <label class="control-label" for="middleName">Middle Name</label>
              <p class="control has-icon has-icon-right">
                <input v-model="middleName" v-validate="''" name="middleName" class="input form-control form-control-lg" type="text" placeholder="Smith">
                <i v-show="errors.has('middleName')" class="fa fa-warning"></i>
                <span v-show="errors.has('middleName')" class="help text-error">{{ errors.first('middleName') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('lastName')}">
              <label class="control-label" for="lastName">Last Name</label>
              <p class="control has-icon has-icon-right">
                <input v-model="lastName" v-validate="'required'" name="lastName" class="input form-control form-control-lg" type="text" placeholder="Doe">
                <i v-show="errors.has('lastName')" class="fa fa-warning"></i>
                <span v-show="errors.has('lastName')" class="help text-error">{{ errors.first('lastName') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'has-error': errors.has('nameOnBadge')}">
              <label class="control-label" for="nameOnBadge">Name on Badge</label>
              <input v-model="nameOnBadge" name="nameOnBadge" class="input form-control form-control-lg" type="text" placeholder="John S. Doe" required>
              <i v-show="errors.has('nameOnBadge')" class="fa fa-warning"></i>
              <span v-show="errors.has('nameOnBadge')" class="help text-error">{{ errors.first('Name On Badge') }}</span>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('email')}">
              <label class="control-label" for="email">Email</label>
              <p class="control has-icon has-icon-right">
              <input v-model="email" name="email" v-validate="'required|email'" class="input form-control form-control-lg" type="text" placeholder="john.d@institute.edu" required>
              <i v-show="errors.has('email')" class="fa fa-warning"></i>
              <span v-show="errors.has('email')" class="help text-error">{{ errors.first('email') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('phone')}">
              <label class="control-label" for="phone">Phone</label>
              <p class="control has-icon has-icon-right">
              <input v-model="phone" name="phone" v-validate="'required'" class="input form-control form-control-lg" type="text" placeholder="+662XXXXXXX" required>
              <i v-show="errors.has('phone')" class="fa fa-warning"></i>
              <span v-show="errors.has('phone')" class="help text-error">{{ errors.first('phone') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'has-error': errors.has('fax')}">
              <label class="control-label" for="fax">Fax</label>
              <input v-model="fax" name="fax" class="input form-control form-control-lg" type="text" placeholder="+662XXXXXXX" required>
              <i v-show="errors.has('fax')" class="fa fa-warning"></i>
              <span v-show="errors.has('fax')" class="help text-error">{{ errors.first('Name On Badge') }}</span>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('affiliation')}">
              <label class="control-label" for="affiliation">Affiliation/Company</label>
              <p class="control has-icon has-icon-right">
              <input v-model="affiliation" name="affiliation" v-validate="'required'" class="input form-control form-control-lg" type="text" placeholder="John S. Doe Institute of Technology" required>
              <i v-show="errors.has('affiliation')" class="fa fa-warning"></i>
              <span v-show="errors.has('affiliation')" class="help text-error">{{ errors.first('affiliation') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('department')}">
              <label class="control-label" for="department">Department</label>
              <p class="control has-icon has-icon-right">
              <input v-model="department" name="department" v-validate="'required'" class="input form-control form-control-lg" type="text" placeholder="School of Computer Science" required>
              <i v-show="errors.has('department')" class="fa fa-warning"></i>
              <span v-show="errors.has('department')" class="help text-error">{{ errors.first('department') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('maillingAddress1')}">
              <label class="control-label" for="maillingAddress1">Address Line 1</label>
              <p class="control has-icon has-icon-right">
              <input v-model="maillingAddress1" name="maillingAddress1" v-validate="'required'" class="input form-control form-control-lg" type="text" placeholder="House Number, Street" required>
              <i v-show="errors.has('maillingAddress1')" class="fa fa-warning"></i>
              <span v-show="errors.has('maillingAddress1')" class="help text-error">The mailling address field is required.</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'has-error': errors.has('maillingAddress2')}">
              <label class="control-label" for="maillingAddress2">Address Line 2</label>
              <input v-model="maillingAddress2" name="maillingAddress2" class="input form-control form-control-lg" type="text" placeholder="Building, Suite/Room/Flat No." required>
              <i v-show="errors.has('maillingAddress2')" class="fa fa-warning"></i>
              <span v-show="errors.has('maillingAddress2')" class="help text-error">{{ errors.first('Name On Badge') }}</span>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('city')}">
              <label class="control-label" for="city">City/District</label>
              <p class="control has-icon has-icon-right">
              <input v-model="city" name="city" v-validate="'required'" class="input form-control form-control-lg" type="text" placeholder="Wangchan" required>
              <i v-show="errors.has('city')" class="fa fa-warning"></i>
              <span v-show="errors.has('city')" class="help text-error">{{ errors.first('city') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('province')}">
              <label class="control-label" for="province">State/Province</label>
              <p class="control has-icon has-icon-right">
              <input v-model="province" name="province" v-validate="'required'" class="input form-control form-control-lg" type="text" placeholder="Rayong" required>
              <i v-show="errors.has('province')" class="fa fa-warning"></i>
              <span v-show="errors.has('province')" class="help text-error">{{ errors.first('province') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('postalCode')}">
              <label class="control-label" for="postalCode">Postal Code</label>
              <p class="control has-icon has-icon-right">
              <input v-model="postalCode" name="postalCode" v-validate="'required|numeric'" class="input form-control form-control-lg" type="text" placeholder="21210" required>
              <i v-show="errors.has('postalCode')" class="fa fa-warning"></i>
              <span v-show="errors.has('postalCode')" class="help text-error">{{ errors.first('postalCode') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('country')}">
              <label class="control-label" for="country">Country</label>
              <p class="control has-icon has-icon-right">
              <input v-model="country" name="country" v-validate="'required'" class="input form-control form-control-lg" type="text" placeholder="Thailand" required>
              <i v-show="errors.has('country')" class="fa fa-warning"></i>
              <span v-show="errors.has('country')" class="help text-error">{{ errors.first('country') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'has-error': errors.has('food')}">
              <label class="control-label" for="food">Food Allergies/Condition</label>
              <input v-model="food" name="food" class="input form-control" type="text" placeholder="allergic to shrimp" required>
              <i v-show="errors.has('food')" class="fa fa-warning"></i>
              <span v-show="errors.has('food')" class="help text-error">{{ errors.first('food') }}</span>
            </div>
          </form>
        </div>
      </div>
      <span v-show="fieldNotValid" class="help text-error">Please check your information</span>
     <button type="button" class="btn btn-lg btn-primary btn-block mb-3" data-toggle="modal" data-target=".bs-example-modal-sm" v-on:click="postPost()">Register</button>
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
  name: 'Register',
  data () {
    return {
      participantCategory: '',
      participantCategories: [
        { text: 'All delegates', value: 'regular' },
        { text: 'Full time students', value: 'student' },
        { text: 'Accompanying persons', value: 'accompany' }
      ],
      title: '',
      titles: [
        { text: 'Prof', value: 'Prof' },
        { text: 'Dr', value: 'Dr' },
        { text: 'Mr', value: 'Mr' },
        { text: 'Mrs', value: 'Mrs' },
        { text: 'Miss', value: 'Miss' }
      ],
      firstName: '',
      middleName: '',
      lastName: '',
      nameOnBadge: '',
      email: '',
      phone: '',
      fax: '',
      affiliation: '',
      department: '',
      maillingAddress1: '',
      maillingAddress2: '',
      city: '',
      province: '',
      postalCode: '',
      country: '',
      food: '',
      option: {
        format: 'DD-MM-YYYY'
      },
      fieldNotValid: ''
    }
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
          axios.post(BASE_URL + `participants/`, {
            participantType: this.participantCategory,
            title: this.title,
            firstName: this.firstName,
            middleName: this.middleName,
            lastName: this.lastName,
            nameOnBadge: this.nameOnBadge,
            email: this.email,
            phone: this.phone,
            fax: this.fax,
            affiliation: this.affiliation,
            department: this.department,
            maillingAddress1: this.maillingAddress1,
            maillingAddress2: this.maillingAddress2,
            city: this.city,
            province: this.province,
            postalCode: this.postalCode,
            country: this.country,
            food: this.food
          })
            .then(response => {
              console.log('send')
              console.log(response)
              this.$router.push('/forms/registration/thankyou')
            })
            .catch(e => {
              console.log(e)
            })
          return
        } else {
          this.fieldNotValid = true
        }
      })
    }
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
