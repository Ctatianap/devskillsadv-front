<template>
  <div class="container w-full">
    <div class="w-full border-2 border-cyan-800 rounded-md p-4">
      <el-form
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        ref="ruleForm"
      >
        <el-form-item label="firstName" prop="firstName">
          <el-input v-model="ruleForm.firstName" placeholder="First name" />
        </el-form-item>
        <el-form-item label="lastName" prop="lastName">
          <el-input v-model="ruleForm.lastName" placeholder="Last name" />
        </el-form-item>
        <el-form-item label="address" prop="address">
          <el-input v-model="ruleForm.address" placeholder="address" />
        </el-form-item>
        <el-form-item label="ssn" prop="ssn">
          <el-input v-model="ruleForm.ssn" placeholder="ssn" />
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm">Reset</el-button>
          <el-button @click="submitForm" type="primary">Save</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ElInput, ElButton } from "element-plus";
import { getToken } from "../helpers/token";
import axios from "axios";
import { MEMBERS_URL } from "../constants/api";

export default {
  name: "AddUser",
  components: { ElInput, ElButton },
  props: {
    ssnCodes: {
      type: Array,
      default: [],
    },
  },
  watch: {
    ruleForm: {
      deep: true,
      handler() {
        this.$emit("onUpdateForm");
      },
    },
  },
  data() {
    return {
      ruleForm: {
        firstName: "",
        lastName: "",
        address: "",
        ssn: "",
      },
      rules: {
        firstName: [
          {
            required: true,
            message: "Please input First name",
            trigger: "blur",
          },
          {
            min: 1,
            message:
              "Length must be greater than 1 and must not contain spaces",
            trigger: "blur",
          },
        ],
        lastName: [
          {
            required: true,
            message: "Please input Last name",
            trigger: "blur",
          },
          {
            min: 1,
            message:
              "Length must be greater than 1 and must not contain spaces",
            trigger: "blur",
          },
        ],
        address: [
          { required: true, message: "Please input Address", trigger: "blur" },
          {
            min: 1,
            message:
              "Length must be greater than 1 and must not contain spaces",
            trigger: "blur",
          },
        ],
        ssn: [
          { required: true, message: "Ssn is required", trigger: "blur" },
          {
            required: true,
            pattern: /[0-9]{3}-[0-9]{2}-[0-9]{4}/,
            message:
              "ssn must be a number with the following structure ###-##-####",
          },
        ],
      },
    };
  },
  methods: {
    async sendUsers() {
      try {
        await axios.post(MEMBERS_URL, this.ruleForm, {
          headers: {
            authorization: getToken(),
          },
        });
        this.$emit("onSaveUser", { ...this.ruleForm });
        this.resetForm();
      } catch (error) {
        console.error(error);
      } finally {
      }
    },
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (this.ssnCodes.includes(this.ruleForm.ssn)) {
            window.alert("Duplicate Ssn");
          } else {
            this.sendUsers();
          }
        } else {
          window.alert("Some data seems to be wrong");
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>
