<template>
<ValidationProvider rules="required"  v-slot="{ errors }">
  <input v-model="todo" type="text">
  <span>{{ errors[0] }}</span>
</ValidationProvider>

</template>
<script>
import { ValidationProvider } from 'vee-validate'
import { extend } from 'vee-validate';

extend('required', {
  validate (value) {
    return {
      required: true,
      // valid: ['', null, undefined].indexOf(value) === -1
    };
  },
  computesRequired: true
});

export default {
  name: 'add',
  components: {ValidationProvider},
  data () {
    return (
      {
        todo: ''
      }
    )
  },
  methods: {
    addTodo () {
      this.$store.dispatch('addTodo', this.todo)
      this.todo = ''
    }
  }
}
</script>
<style scoped>
.input_add {
    width: 70%;
    height: 21px;
    padding: 7px;
    border: 1px solid;
    border-radius: 5px;
}
</style>
