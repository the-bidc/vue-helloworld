import { ref } from "vue";
import axios from "axios";
import UserDepartment from "@/types/UserDepartment";

const getUserDepartment = () => {
  const userDeptAndRole = ref<UserDepartment>();
  const deptLookupErr = ref("");

  const lookupDeptAndRoles = async (emailAddress: string) => {
    axios
      .get("/api/user-department", {
        params: { emailAddress: emailAddress }
      })
      .then((response) => {
        if (!response.data || response.data.length == 0) {
          deptLookupErr.value = "Error; Your person record not found in system";
        } else if(isEmpty(response.data.ROLES)) {
            deptLookupErr.value = "Role not found for this user";
        } else {
          userDeptAndRole.value = response.data;
        }
      })
      .catch((err) => {
        console.log("Error: " + err);
        deptLookupErr.value = err.response.data.error;
      });
  };

  return { userDeptAndRole, deptLookupErr, lookupDeptAndRoles };
};

function isEmpty(str:string){
    // will return true if empty string and false if string is not empty
      return (!str || str.length === 0 );
}
export default getUserDepartment;
