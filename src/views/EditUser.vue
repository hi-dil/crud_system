<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Edit User</p>
        <p class="fts-italic">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          vero cum illo doloremque impedit, nihil voluptas et consectetur
          repellat laudantium maiores reiciendis voluptatum quas doloribus,
          itaque quis, est debitis voluptatem.
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
              v-model="getUser.name"
              placeholder="Name"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              v-model="getUser.username"
              placeholder="User Name"
            />
          </div>
          <div class="mb-2">
            <input
              type="email"
              class="form-control"
              v-model="getUser.email"
              placeholder="Email"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              v-model="getUser.phone"
              placeholder="Phone"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              v-model="getUser.website"
              placeholder="Website"
            />
          </div>

          <h4 class="mt-4">Address</h4>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              v-model="getUser.address.street"
              placeholder="Street"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              v-model="getUser.address.suite"
              placeholder="Suite"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              v-model="getUser.address.city"
              placeholder="City"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              v-model="getUser.address.zipcode"
              placeholder="Zip Code"
            />
          </div>

          <h4 class="mt-4">Company Information</h4>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              v-model="getUser.company.name"
              placeholder="Company Name"
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              v-model="getUser.company.catchPhrase"
              placeholder="Company Catch Phrase"
            />
          </div>
          <div class="d-flex mb-2 justify-content-between">
            <button type="button" class="btn btn-danger" @click="onDelete">
              <i class="fa fa-trash"></i> Delete
            </button>

            <button type="submit" class="btn btn-success">
              <i class="fa fa-floppy-disk"></i> Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "EditUser",
  computed: {
    ...mapGetters(["getUsers", "getUserDetails"]),
    getUser() {
      return this.getUserDetails(this.$route.params.userId)
    },
  },
  methods: {
    ...mapActions(['removeUser', 'editUser']),
    async onDelete() {
      const userId = this.$route.params.userId;
      console.log(userId)
      await this.removeUser(this.$route.params.userId)
      this.$router.push("/")
    },
    async onSubmit(e) {
      e.preventDefault();
      await this.editUser(this.getUserDetails)
      this.$router.push({ path: `/users/view/${this.getUser.id}` })
    }
    
  }
};
</script>

<style scoped></style>
