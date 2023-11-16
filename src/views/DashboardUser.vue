<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">
          Dashboard User
          <router-link to="/users/add" class="btn btn-success btn-sm"
            ><i class="fa fa-plus-circle"></i> New</router-link
          >
        </p>
        <p class="fst-italic">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ducimus,
          illum pariatur fugit voluptate laborum voluptatem quibusdam possimus
          maxime impedit maiores placeat sunt! Ratione autem necessitatibus
          aliquid sequi nobis quasi.
        </p>
        <form @submit="onSubmitFilter">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="filterType"
                  >
                    <option value="" >Select filter</option>
                    <option value="id">ID</option>
                    <option value="name">Name</option>
                    <option value="username">Username</option>
                  </select>
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search User"
                    v-model="filterValue"
                  />
                </div>
                <div class="col">
                  <input type="submit" class="btn btn-outline-dark" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="flex row justify-content-center">
      <UserCard
        class="col-md-6"
        v-for="user in getUsers"
        :key="user.id"
        :user="user"
      />
    </div>
  </div>
</template>

<script>
import UserCard from "../components/UserCard.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "DashboardUser",
  data() {
    return {
      filterType: "",
      filterValue: "",
    };
  },
  components: {
    UserCard,
  },
  computed: mapGetters(["getUsers"]),
  methods: {
    ...mapMutations(["filterUser"]),
    onSubmitFilter(e) {
      e.preventDefault();
      const filter = {
        type: this.filterType,
        value: this.filterValue
      }
      this.filterUser(filter)
    }
  }
};
</script>

<style scoped></style>
