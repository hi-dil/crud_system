<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">View User</p>
        <p class="fts-italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure optio
          impedit a quisquam ex quod officiis eos, inventore sit! Aliquid ipsam
          sunt voluptatum aspernatur beatae ducimus, quas commodi voluptatem
          quisquam!
        </p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-4"></div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">
            Name : <span class="fw-bold">{{ getUser.name }}</span>
          </li>
          <li class="list-group-item">
            Username : <span class="fw-bold">{{ getUser.username }}</span>
          </li>
          <li class="list-group-item">
            Email : <span class="fw-bold">{{ getUser.email }}</span>
          </li>
          <li class="list-group-item">
            Phone : <span class="fw-bold">{{ getUser.phone }}</span>
          </li>
          <li class="list-group-item">
            Website : <span class="fw-bold">{{ getUser.website }}</span>
          </li>
          <li class="list-group-item">
            Address :
            <span class="fw-bold">{{
              `${getUser.address.street}, ${getUser.address.suite}, ${getUser.address.city}, ${getUser.address.zipcode}`
            }}</span>
          </li>
          <li class="list-group-item">
            Company Name : <span class="fw-bold">{{getUser.company.name}}</span>
          </li>
          <li class="list-group-item">
            Catch Phrase : <span class="fw-bold">{{getUser.company.catchPhrase}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <router-link to="/" class="btn btn-success"
          ><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ViewUser",
  computed: {
    ...mapGetters(["getUsers"]),
    getUser() {

      const user = this.getUsers.find(
        (user) => user.id == this.$route.params.userId
      );

      console.log(user);
      return user;
    },
  },
};
</script>

<style scoped></style>
