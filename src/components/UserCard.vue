<!-- User.vue -->
<template>
  <div class="card m-2" style="width: 21rem;" @click="handleOnClick">
    <div class="card-body w-xl">
      <h3 class="card-title">{{ user.name }}</h3>
      <h6 class="card-subtitle mb-4 text-muted">@{{ user.username }}</h6>
      <p class="card-text mb-1"><strong>User Id:</strong> {{ user.id }}</p>
      <p class="card-text mb-1"><strong>Email:</strong> {{ user.email }}</p>
      <p class="card-text mb-1"><strong>Phone:</strong> {{ user.phone }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleOnClick() {
      this.$router.push({ path: `/users/view/${this.user.id}` });
    },
  },
};
</script>

<style scoped>
/* Add any custom styles for the component here */
</style>
