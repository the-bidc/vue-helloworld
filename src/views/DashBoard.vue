<template>
    <div class="container dashboard">
        <div class="row">
            <h3>Welcome Jane Doe</h3>
            <div class="spacer"></div>

            <table class = "table table-sm table-striped caption-top" id="myRequestsTable" aria-label="myRequests Results Table">
                <caption>My Pending Requests: </caption>
                    <thead>
                        <th>Requested On</th>
                        <th>Request Type</th>
                        <th>Project Owning Org.</th>
                        <th>Approving Department</th>
                        <th>Request Details</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>7/22/2022</td>
                            <td>New Sponsored Project</td>
                            <td>Chemistry and Biochemistry</td>
                            <td>Financial Analysis Office</td>
                            <td><em class="bi bi-pencil-square" title="Open"></em></td>
                        </tr>
                        <tr>
                            <td>7/23/2022</td>
                            <td>New recharge project</td>
                            <td>ACC</td>
                            <td>Financial Analysis Office</td>
                            <td><em class="bi bi-pencil-square" title="Open"></em></td>
                        </tr>
                    </tbody>
            </table>
            <!-- <div class="spacer"></div>

            <table class = "table table-sm table-striped caption-top" id="myApprovalsTable" aria-label="myApprovals Results Table">
                <caption>Pending Approvals: </caption>
                    <thead>
                        <th>Requested On</th>
                        <th>Requested By</th>
                        <th>Request Type</th>
                        <th>Project Owning Org.</th>
                        <th>SPF Accountant</th>
                        <th>Request Details</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>7/22/2022</td>
                            <td>Jane Doe</td>
                            <td>New recharge project</td>
                            <td>Chemistry and Biochemistry</td>
                            <td></td>
                            <td><em class="bi bi-pencil-square" title="Open"></em></td>
                        </tr>
                        <tr>
                            <td>7/23/2022</td>
                            <td>John Cena</td>
                            <td>New recharge task on non-recharge project </td>
                            <td>ACC</td>
                            <td></td>
                            <td><em class="bi bi-pencil-square" title="Open"></em></td>
                        </tr>
                    </tbody>
            </table> -->

            <div class="spacer"></div>
            <div class="row my_border">
                <h4>Request Type: New General Project on 12100 Fund</h4>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="comment">Request Details:</label>
                            <textarea class="form-control" rows="18" id="comment" disabled>"ProjectName":"CFEL Project for demo"
"OwningOrganizationName":"Chemistry and Biochemistry"
"ProjectClassifications":[{
	"ClassCategory":"Cost Tracking"
	"ClassCode":"Campus Fellowships"
	}]
"ProjectDFF":[{"departmentReportingCategory":"Department Controlled"}]
"ProjectStartDate":"2021-07-01"
"ProjectEndDate":"2031-06-30"
"SourceTemplateName":"Campus General Project Template"
"Tasks":[{
	"TaskNumber":"1"
	"TaskName":"Basic Task"	
	"TasksDFF":[{
		"fund":"12100"
		"funct":"410"}]
	}]
                            </textarea>
                        </div> 
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="comment">Request Notes:</label>
                            <textarea class="form-control" rows="6" id="comment" disabled>Need to create a new Project to track abc expenses seperately
                            </textarea>
                        </div> 
                    </div>
                </div>
                <div class="spacer"></div>
                <!-- <div class="row">
                    <div class="col-md-10">
                        <div class="form-group">
                            <label for="comment">Approve/Reject Comments:</label>
                            <textarea class="form-control" rows="3" id="comment">I am rejecting this request because abc expenses dont need to be tracked seperately. please use Project 1234567 Task 1 for that.                             
                            </textarea>
                        </div> 
                    </div>

                </div>                
                <div class="spacer"></div>

                <div class="row">
                    <div class="col-md-1 offset-md-5">
                        <button type="button" class="btn btn-success">Approve</button>                        
                    </div>
                    <div class="col-md-1">
                        <button type="button" class="btn btn-danger">Reject</button>
                    </div>
                    <div class="col-md-5"></div>

                    <div class="spacer"></div>
                </div> -->
            </div>

            
        </div>
    </div>
</template>

<style scoped>
caption {
    font-size: large;
    font-weight:bold;
}
h4 {
    padding: 10px;
}
.my_border {
    border:1px solid black;
    border-radius: 10px;
}
label {
     font-weight:bold;
}
textarea {
    align-content: left;
}
</style>
