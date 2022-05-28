<template>
  <div class="container w-full">
    <div
      class="
        flex flex-col
        border-2 border-cyan-800
        rounded-md
        p-4
        text-cyan-800
      "
    >
      <div class="flex">
        <div class="w-1/5 mx-2">
          <p>First name</p>
        </div>
        <div class="w-1/5 mx-2">
          <p>Last name</p>
        </div>
        <div class="w-2/5 mx-2">
          <p>Address</p>
        </div>
        <div class="w-1/5 mx-2">
          <p>Ssn</p>
        </div>
      </div>
      <hr class="border-solid border-thin border-cyan-800 w-11/12 mb-4" />
      <div class="flex flex-col text-sm">
        <div
          v-for="user in users"
          :key="user.ssn"
          class="w-full flex flex-row mb-4"
        >
          <div class="w-1/5 mx-2">
            <p>{{ user.firstName }}</p>
          </div>
          <div class="w-1/5 mx-2">
            <p>{{ user.lastName }}</p>
          </div>
          <div class="w-2/5 mx-2">
            <p>{{ user.address }}</p>
          </div>
          <div class="w-1/5 mx-2">
            <p>{{ user.ssn }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      userLogin: "sarah",
      passwordLogin: "connor",
      firstName: "",
      lastName: "",
      address: "",
      ssn: "",
    };
  },
};
</script>
