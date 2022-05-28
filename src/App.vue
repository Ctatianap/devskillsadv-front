<template>
  <div class="flex flex-col justify-between h-screen">
    <NavHeader />
    <main class="container mx-auto flex">
      <AddUser
        class="mr-2"
        :ssnCodes="ssnCodes"
        @onSaveUser="users.push($event)"
        @onUpdateForm="listenInactivity"
      />
      <ShowData class="ml-2" :users="users" v-loading="loading" />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavHeader from "./components/NavHeader.vue";
import AddUser from "./components/AddUser.vue";
import ShowData from "./components/ShowData.vue";
import Footer from "./components/Footer.vue";
import { saveToken, getToken } from "./helpers/token";
import axios from "axios";

export default {
  name: "App",
  components: {
    NavHeader,
    AddUser,
    ShowData,
    Footer,
  },
  data() {
    return {
      userLogin: {
        username: "sarah",
        password: "connor",
      },
      users: [],
      inactivityCounterId: null,
      loading: 0,
    };
  },
  computed: {
    ssnCodes() {
      return this.users.map((u) => u.ssn);
    },
  },
  created() {
    this.login();
  },
  mounted() {
    window.addEventListener("mousemove", this.listenInactivity);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.listenInactivity);
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          "http://localhost:8081/auth",
          this.userLogin
        );
        saveToken(response?.data?.token);
        this.getUsers();
      } catch (error) {
        console.log("Error de inicio de sesion");
        console.error(error);
      }
    },
    listenInactivity() {
      const totalInactivitySeconds = 120;
      let inactivitySeconds = 0;
      clearInterval(this.inactivityCounterId);
      this.inactivityCounterId = setInterval(() => {
        inactivitySeconds++;
        console.log(inactivitySeconds);
        if (inactivitySeconds % totalInactivitySeconds === 0) {
          this.getUsers();
        }
      }, 1000);
    },
    async getUsers() {
      try {
        this.loading++;
        const response = await axios.get("http://localhost:8081/api/members", {
          headers: { authorization: getToken() },
        });
        this.users = response?.data || [];
      } catch (error) {
        console.error(error);
      } finally {
        this.loading--;
      }
    },
  },
};
</script>
