/* eslint-disable */
<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Add Register</h3>
      <form @submit.prevent="onFormSubmit">
        <div class="form-groupclear">
          <label>Description</label>
          <input
            type="text"
            class="form-control"
            v-model="register.description"
            required
          />
        </div>
        <div class="form-group">
          <label>Temperature</label>
          <input
            type="text"
            class="form-control"
            v-model="register.temp"
            required
          />
        </div>
        <div class="form-group">
          <label>Degrees</label>
          <input
            type="text"
            class="form-control"
            v-model="register.degr"
            required
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block">Add Register</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      register: {
        description: "",
        temp: "",
        degr: "",
      },
    };
  },
  methods: {
    onFormSubmit(event) {
      //alert(JSON.stringify(this.product));
      event.preventDefault();
      db.collection("registers")
        .add(this.register)
        .then(() => {
          alert("Weather successfully registered!");
          this.register.description = "";
          this.register.temp = "";
          this.register.degr = "";
          if (window.confirm("Do you want to upload another register?")) {
            this.$router.push("/AddData");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
