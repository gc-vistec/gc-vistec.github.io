import Vue from 'vue'
import Router from 'vue-router'
import SubmissionForm from '@/components/Forms/Submit'
import RegistrationForm from '@/components/Forms/Register'
import Thankyou from '@/components/Forms/Thankyou'
import FAQForm from '@/components/Forms/Question'
import Home from '@/components/Home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/key-dates',
      component: Home
    },
    {
      path: '/announcements',
      component: Home
    },
    {
      path: '/committee',
      component: Home
    },
    {
      path: '/program',
      component: Home
    },
    {
      path: '/speakers',
      component: Home
    },
    {
      path: '/accomodation',
      component: Home
    },
    {
      path: '/registration',
      component: Home
    },
    {
      path: '/submission',
      component: Home
    },
    {
      path: '/venue',
      component: Home
    },
    {
      path: '/faq',
      component: Home
    },
    {
      path: '/contact',
      component: Home
    },
    {
      path: '/forms/registration',
      component: RegistrationForm,
      beforeEnter (to, from, next) {
        // Put the full page url including the protocol http(s) below
        window.location = 'https://goo.gl/forms/tGXprIOo4ekyLJKo2'
      }
    },
    {
      path: '/forms/registration/thankyou',
      component: Thankyou
    },
    {
      path: '/forms/submission',
      component: SubmissionForm,
      beforeEnter (to, from, next) {
        // Put the full page url including the protocol http(s) below
        window.location = 'https://goo.gl/forms/qbYWPTBKITYRCMKp1'
      }
    },
    {
      path: '/forms/query',
      component: FAQForm,
      beforeEnter (to, from, next) {
        // Put the full page url including the protocol http(s) below
        window.location = 'https://goo.gl/forms/BZCI0sYmBSKCIyI33'
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'history'
})
