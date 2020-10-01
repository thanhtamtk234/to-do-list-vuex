<template>
  <div>
    <b-modal id="modal-1" title="Login" modal-ok>
      <div class="text-center">
        <b-button variant="primary" class="mr-2" @click="loginWithGoogle">Sign in with google</b-button>
        <b-button variant="secondary" v-b-modal.modal-form-login>Sign in with email</b-button>
      </div>
    </b-modal>
    <form-login/>
  </div>
</template>
<script>
import firebase from 'firebase'
import {getProfileUser} from '../api/my_profile/profile'
import FormLogin from "./form/formLogin";
export default {
  components: {FormLogin},
  data () {
    return {
      showFormLogin: false
    }
  },
  methods: {
    async loginWithGoogle () {
      const auth = firebase.auth()
      await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      const provider = new firebase.auth.GoogleAuthProvider()

      await firebase.auth().signInWithPopup(provider).then((result) => {
        this.$router.replace('list-product')
      }).catch((err) => {
        alert(err.message)
      })
      if (auth.currentUser) await getProfileUser()
    },
  }
}
</script>
