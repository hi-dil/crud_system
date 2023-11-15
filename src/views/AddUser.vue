<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Add User</p>
        <p class="fts-italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          nihil fugiat distinctio consequatur rem maxime dicta, quasi dolorum
          obcaecati perspiciatis consectetur libero aut quidem sit cupiditate
          commodi laborum enim nam.
        </p>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <form @submit="onSubmit">
          <h4>Personal Information</h4>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              v-model="formData.name"
              placeholder="Name"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              v-model="formData.username"
              placeholder="User Name"
            />
          </div>
          <div class="mb-2">
            <input
              type="email"
              class="form-control"
              v-model="formData.email"
              placeholder="Email"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              v-model="formData.phone"
              placeholder="Phone"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              v-model="formData.website"
              placeholder="Website"
            />
          </div>

          <h4 class="mt-4">Address</h4>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              v-model="formData.street"
              placeholder="Street"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              v-model="formData.suite"
              placeholder="Suite"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              v-model="formData.city"
              placeholder="City"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              v-model="formData.zipcode"
              placeholder="Zip Code"
            />
          </div>

          <h4 class="mt-4">Company Information</h4>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              v-model="formData.companyname"
              placeholder="Company Name"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              v-model="formData.catchphrase"
              placeholder="Company Catch Phrase"
            />
          </div>
          <div class="flex mb-2 justify-end">
            <input type="submit" class="btn btn-success" value="Create" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddUser",
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    ...mapActions(['addUser']),
    onSubmit(e) {
      e.preventDefault();
      this.addUser(this.formData);
      this.$router.push('/')
    },
  },
};
</script>

<style scoped></style>
