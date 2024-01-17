<template>
    <div id="app" class="container mt-5">
        <h3>Test Email</h3>
        <div class="spacer"> </div>

        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="inputEmail" class="form-label">Email</label>
                <input v-model="email" type="email" class="form-control" id="inputEmail" @blur="handleValidEmail" placeholder="Enter your email">
            </div>
        </form>
        <div class="spacer"> </div>

        <div v-if="saveBtnActive" class="d-grid col-4 mt-1">
            <button type="button" class="btn btn-outline-primary" id ="newTaskButton" @click="addNewTask"> Add</button>
        </div>
        <div v-else>
            <div v-if="validationErrMsg" id="taskInvalidRoleMsg" class="alert alert-warning col-md-6 offset-md-3"> <strong> {{validationErrMsg}}</strong> </div>
        </div>
    </div>

</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";

export default defineComponent({
  setup() {
    const validationErrMsg = ref("Enter valid email");
    const isReadOnly = ref(true);
    const email = ref("");

    const addNewTask = () => {
      alert("Note yet implemented!");
    };

    const handleValidEmail = () => {
      const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(email.value)) {
        // if email is valid format
        validationErrMsg.value = "";
      }
    };

    const saveBtnActive = computed(() => {
      return validationErrMsg.value === "" && isReadOnly.value === true;
    });

    return {
      email, handleValidEmail, validationErrMsg, saveBtnActive, addNewTask
    }
  }

})
</script>
