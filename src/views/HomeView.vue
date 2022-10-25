<template>
  <div class="home">
    <div class = "row">
      <div class="col-3 form-group"> 
        <label for="days">Number Of Days:</label> 
        <input type="number" class="form-control" maxlength="3" v-model="data.noOfDays" autocomplete="off">
        <small class="form-text text-muted">Approval Required: {{isApprovalReqd}}</small>
      </div>
      <div class="col-3 form-group"> 
        <label for="days">Location:</label> 
        <input type="text" class="form-control" maxlength="12" v-model="data.request.location" autocomplete="off">
        <small class="form-text text-muted">Approval Required: {{isApprovalReqd}}</small>
      </div>
      <div class="col-3 form-group"> 
        <label for="days">Request Type:</label> 
        <select class="form-select"  v-model="data.requestType" >
            <option value="Vacation">Vacation</option>
            <option value="FMLA">FMLA</option>
            <option value="Medical">Medical</option>     
        </select>
        <small class="form-text text-muted">isReadOnly: {{isReadOnly}}</small>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from 'vue';

export default defineComponent({

  setup() {
    const data = reactive({ name:'', title:'', department:'', requestType:'', status:'Pending', noOfDays:0, request:{position:'', serviceYears:0, location:''}});

    const isReadOnly = computed(() => {
       console.log('isReadOnly called')
       return data.requestType === 'Medical'
    })

    const isApprovalReqd = computed(() => {
       console.log('isApprovalReqd called')
       return data.noOfDays >3 || data.request.location === 'Europe'
    })

    return {data, isReadOnly, isApprovalReqd}

  }
});
</script>
