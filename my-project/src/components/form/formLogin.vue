<template>
  <div>
    <b-modal id="modal-form-login" title="Form Login">
      <div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary" @click="login">Submit</button>
          <b-button variant="primary" v-b-modal.modal-form-sign-up>Creat account</b-button>
        </form>
      </div>
    </b-modal>
    <FormSignUp/>
  </div>
</template>
<script>
import firebase from 'firebase'
import FormSignUp from './FormSignUp'
export default {
  components: {FormSignUp},
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      const auth = firebase.auth()
      await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      try {
        await auth.signInWithEmailAndPassword(this.email, this.password)
        window.location.href = ''
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
