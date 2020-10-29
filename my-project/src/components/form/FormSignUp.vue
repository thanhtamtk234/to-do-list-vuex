<template>
  <b-modal id="modal-form-sign-up" title="Form Sign up">
    <div>
      <form @submit.prevent="signUpWithEmail">
        <div class="form-group">
          <label for="inputEmail1">Email address</label>
          <input type="email" class="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model="password">
        </div>
        <div class="form-group">
          <label for="inputPasswordConfirm">Password confirm</label>
          <input type="password" class="form-control" id="inputPasswordConfirm" placeholder="Password Confirm" v-model="password_confirm">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </b-modal>
</template>
<script>
import firebase from 'firebase'
import {getProfileUser} from '../../api/my_profile/profile'
export default {
  name: 'FormSignUp',
  data () {
    return {
      email: '',
      password: '',
      password_confirm: ''
    }
  },
  methods: {
    async signUpWithEmail () {
      const auth = firebase.auth()
      // await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      await auth.createUserWithEmailAndPassword(this.email, this.password)
      await getProfileUser()
    }
  }
}
</script>
