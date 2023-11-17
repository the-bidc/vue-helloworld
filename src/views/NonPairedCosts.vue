<template>
    <div class="container-fluid">
        <div class="row" style="margin:5px">
            <h3>Non-Paired Transactions</h3>
            <div class="spacer"></div>

            <div class="form-group row">
                <label for="documentEntry" class="col-sm-1 col-form-label">Document Entry:</label>
                <div class="col-sm-4">
                    <select class="form-select" >
                        <option value="">--- Please select ---</option>
                        <option value="IGPP Support Services - Network Ops - Recharges">IGPP Support Services - Network Ops - Recharges</option>
                    </select>
                </div>
                <div class="col-sm-2">
                    <button type="button" class="btn btn-outline-primary">+ Add Line</button>
                </div>
                <div class="spacer-sm"></div>
            </div>
            <hr class="new4">
            
            <div class="row">
                <div class="col-1 form-group" style="width:5%">
                    <label for="project" class="form-label">Line #</label>
                    <input type="text" class="form-control" disabled value="1"/>
                </div>
                <div class="col-1 form-group">
                    <label for="lineType" class="form-label">Line Type:*</label>
                    <select class="form-select" >
                        <option value="">Provider</option>
                        <option value="">Receiver</option>
                    </select>
                </div>
                <div class="col-1 form-group" >
                    <label for="project" class="form-label">Project# *</label>
                    <input type="text" class="form-control" placeholder="Enter Project Number"/>
                </div>
                <div class="col-1 form-group">
                    <label for="task" class="form-label">Task# *</label>
                    <input type="text" class="form-control" placeholder="Task Number"/>
                </div>
                <div class="col-1 form-group">
                    <label for="task" class="form-label">Funding Source# </label>
                    <input type="text" class="form-control" placeholder="Optional"/>
                </div>
                <div class="col-1 form-group">
                    <label for="task" class="form-label">Amount * </label>
                    <input type="text" class="form-control" placeholder="Amount" value="-90.45"/>
                </div>
                <div class="col-1 form-group">
                    <label for="task" class="form-label">Service Date * </label>
                    <input type="text" class="form-control" placeholder="Enter Date" value="2023-06-30"/>
                </div>
                <div class="col-1 form-group">
                    <label for="lineType" class="form-label">Paying Department:*</label>
                    <select class="form-select" >
                        <option value="">HS Dermatology</option>
                        <option value="">Institute for Neural Computation</option>
                        <option value="">Qualcomm Institute</option>                            
                        <option value="">ITS AII Enterprise Network</option>
                    </select>
                </div>
                <div class="col-2 form-group">
                    <label for="lineType" class="form-label">Expenditure Type:*</label>
                    <select class="form-select" >
                        <option value="">770002 - NGN Communication Recharge - Debit</option>
                        <option value="">770000 - Matl Mgmt Moving Service Recharge - Debit</option>        
                    </select>
                </div>
                <div class="col-2 form-group">
                    <label for="task" class="form-label">Comments </label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                </div>
            </div>
            <!-- End of Row1 !-->
            <div class="row">
                <div class="col-1 form-group" style="width:5%">
                    <label for="project" class="form-label">Line #</label>
                    <input type="text" class="form-control" disabled value="2"/>
                </div>
                <div class="col-1 form-group">
                        <label for="lineType" class="form-label">Line Type:*</label>
                        <select class="form-select" >
                            <option value="">Receiver</option>
                            <option value="">Provider</option>
                        </select>
                </div>
                <div class="col-1 form-group" >
                    <label for="project" class="form-label">Project# *</label>
                    <input type="text" class="form-control" placeholder="Enter Project Number"/>
                </div>
                <div class="col-1 form-group">
                    <label for="task" class="form-label">Task# *</label>
                    <input type="text" class="form-control" placeholder="Task Number"/>
                </div>
                <div class="col-1 form-group">
                    <label for="task" class="form-label">Funding Source# </label>
                    <input type="text" class="form-control" placeholder="Optional"/>
                </div>
                <div class="col-1 form-group">
                    <label for="task" class="form-label">Amount * </label>
                    <input type="text" class="form-control" placeholder="Amount" value="40.00"/>
                </div>
                <div class="col-1 form-group">
                    <label for="task" class="form-label">Service Date * </label>
                    <input type="text" class="form-control" placeholder="Enter Date" value="2023-07-11"/>
                </div>
                <div class="col-1 form-group">
                    <label for="lineType" class="form-label">Receiver Department:*</label>
                    <select class="form-select" >
                        <option value="">ITS AII Enterprise Network</option>
                        <option value="">HS Dermatology</option>
                        <option value="">Institute for Neural Computation</option>
                        <option value="">Qualcomm Institute</option>                            
                        <option value="">ITS AII Enterprise Network</option>
                    </select>
                </div>
                <div class="col-2 form-group">
                    <label for="lineType" class="form-label">Expenditure Type:*</label>
                    <select class="form-select" >
                        <option value="">775000 - Recharge Income Self Supporting Activities - Credit</option>
                        <option value="">511003 - Graduate Tuition and Fees</option>        
                    </select>
                </div>
                <div class="col-2 form-group">
                    <label for="task" class="form-label">Comments </label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                </div>
            </div>
            <!-- End of Row2 !-->
            <div class="row">
                <div class="col-1 form-group" style="width:5%">
                    <label for="project" class="form-label">Line #</label>
                    <input type="text" class="form-control" disabled value="3"/>
                </div>
                <div class="col-1 form-group">
                        <label for="lineType" class="form-label">Line Type:*</label>
                        <select class="form-select" >
                            <option value="">Receiver</option>
                            <option value="">Provider</option>
                        </select>
                </div>
                <div class="col-1 form-group" >
                    <label for="project" class="form-label">Project# *</label>
                    <input type="text" class="form-control" placeholder="Enter Project Number"/>
                </div>
                <div class="col-1 form-group">
                    <label for="task" class="form-label">Task# *</label>
                    <input type="text" class="form-control" placeholder="Task Number"/>
                </div>
                <div class="col-1 form-group">
                    <label for="task" class="form-label">Funding Source# </label>
                    <input type="text" class="form-control" placeholder="Optional"/>
                </div>
                <div class="col-1 form-group">
                    <label for="task" class="form-label">Amount * </label>
                    <input type="text" class="form-control" placeholder="Amount" value="50.45"/>
                </div>
                <div class="col-1 form-group">
                    <label for="task" class="form-label">Service Date * </label>
                    <input type="text" class="form-control" placeholder="Enter Date" value="2023-07-11"/>
                </div>
                <div class="col-1 form-group">
                    <label for="lineType" class="form-label">Receiver Department:*</label>
                    <select class="form-select" >
                        <option value="">ITS AII Enterprise Network</option>
                        <option value="">HS Dermatology</option>
                        <option value="">Institute for Neural Computation</option>
                        <option value="">Qualcomm Institute</option>                            
                        <option value="">ITS AII Enterprise Network</option>
                    </select>
                </div>
                <div class="col-2 form-group">
                    <label for="lineType" class="form-label">Expenditure Type:*</label>
                    <select class="form-select" >
                        <option value="">775000 - Recharge Income Self Supporting Activities - Credit</option>
                        <option value="">511003 - Graduate Tuition and Fees</option>        
                    </select>
                </div>
                <div class="col-2 form-group">
                    <label for="task" class="form-label">Comments </label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                </div>
            </div>
            <div class="spacer-sm"></div>
            <!-- End of Row3 !-->
            <hr class="new2">
            <div class="row">
                <div class="col-5 form-group" style="text-align:right; padding-right:55px">
                    <label for="task" class="form-label">Sum Total:  </label>
                </div>
                <div class="col-4 form-group" style="margin-left:-45px">
                    <label for="task" class="form-label">$0.00 </label>
                </div>
            </div>
        </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref, inject } from "vue";

export default defineComponent({
    setup() {

    },
});
</script>