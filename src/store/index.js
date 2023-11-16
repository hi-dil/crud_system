import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    users: [],
    oldUsersList: [],
    totalUsers: 10,
  },
  getters: {
    getUsers: (state) => state.users,
    getUserDetails: (state) => (id) => {
      const userDetails = state.users.find((user) => user.id == id);
      console.log(userDetails);
      if (!userDetails) {
        return {
          id: 0,
          name: "",
          username: "",
          email: "",
          address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
          },
          phone: "",
          website: "",
          company: {
            name: "",
            catchPhrase: "",
          },
        };
      }

      return userDetails;
    },
  },
  mutations: {
    setUsers(state, userslist) {
      state.users = userslist;
    },
    newUser(state, userData) {
      userData.id = ++state.totalUsers;
      state.users.unshift(userData);
    },
    deleteUser(state, userID) {
      state.users = state.users.filter((user) => user.id != userID);
    },
    updateUser(state, userData) {
      const index = state.users.findIndex((user) => user.id == userData.id);
      if (index !== -1) {
        state.users.splice(index, 1, userData);
      }
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        commit("setUsers", response.data);
      } catch (error) {
        console.log(Object.keys(error), error.message);
      }
    },
    async addUser({ commit }, formData) {
      const request = {
        name: formData.name,
        username: formData.username,
        email: formData.email,
        address: {
          street: formData.street,
          suite: formData.suite,
          city: formData.city,
          zipcode: formData.zipcode,
        },
        phone: formData.phone,
        website: formData.website,
        company: {
          name: formData.companyname,
          catchPhrase: formData.catchphrase,
        },
      };

      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/users",
          request,
        );

        commit("newUser", response.data);
      } catch (error) {
        console.log(Object.keys(error), error.message);
      }
    },
    async removeUser({ commit }, id) {
      try {
        await axios.delete(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        );

        commit("deleteUser", id);
      } catch (error) {
        console.log(Object.keys(error), error.message);
      }
    },
    async editUser({ commit }, formData) {
      try {
        const response = await axios.patch(
          `https://jsonplaceholder.typicode.com/users/${formData.id}`,
          formData,
        );

        commit("editUserDetails", response.data);
      } catch (error) {
        console.log(Object.keys(error), error.message);
      }
    },
  },
  modules: {},
});
