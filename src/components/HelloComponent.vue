<template>
    <div v-if="saveBtnActive" class="d-grid col-4 mt-1">
        <button type="button" class="btn btn-outline-primary" id ="newTaskButton" @click="addNewTask"> Add</button>
    </div>
    <div v-else>
        <div v-if="validationErrMsg" id="taskInvalidRoleMsg" class="alert alert-warning col-md-6 offset-md-3"> <strong> {{validationErrMsg}}</strong> </div>
    </div>
</template>
<script lang="ts">
export default defineComponent({
     setup() {
        const validationErrMsg = ref('')
        const isReadOnly = ref(false)

        const addNewTask = function(() =>{
            alert'Note yet implemented!'
        })
        
        const saveBtnActive = computed(() => { 
            return validationErrMsg=== '' && isReadOnly.value === true
        })

        return {
            validationErrMsg, saveBtnActive, addNewTask
        }
     }