<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "@/components/NavBar";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    NavBar,
  },
  computed: mapGetters(["getUsers"]),
  methods: {
    ...mapActions(["fetchUsers"]),
  },
  mounted() {
    if (this.getUsers.length === 0) this.fetchUsers();
  },
};
</script>

<style></style>
