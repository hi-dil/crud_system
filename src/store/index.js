import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    users: [],
    totalUsers: 10,
  },
  getters: {
    getUsers: (state) => state.users,
    getUser: (state) => (id) => {
      return state.users.find((user) => user.id === id);
    },
  },
  mutations: {
    setUsers(state, userslist) {
      state.users = userslist;
    },
    newUser(state, userData) {
      userData.id = ++state.totalUsers;
      state.users.unshift(userData);
      console.log(state.users)
    },
    // deleteUser(userID) {},
    // updateUser(userID) {},
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
  },
  modules: {},
});
