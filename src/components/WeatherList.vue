/* eslint-disable */
<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Description</th>
            <th>Temperature</th>
            <th>Degrees</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="reg in registers" :key="reg.key">
            <td>{{ reg.description }}</td>
            <td>{{ reg.temp }}</td>
            <td>{{ reg.degr }}</td>
            <td>
              <button
                @click.prevent="deleteProduct(reg.key)"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      registers: [],
    };
  },
  created() {
    db.collection("registers").onSnapshot((snapshotChange) => {
      this.registers = [];
      snapshotChange.forEach((doc) => {
        this.registers.push({
          key: doc.id,
          description: doc.data().description,
          temp: doc.data().temp,
          degr: doc.data().degr,
        });
      });
    });
    console.log(this.registers);
  },
  methods: {
    deleteProduct(id) {
      if (window.confirm("Are you sure you want to delete this register?")) {
        db.collection("registers")
          .doc(id)
          .delete()
          .then(() => {
            alert("Register succesfully deleted.");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
<style>
.btn-primary {
  margin-right: 12px;
}
</style>
