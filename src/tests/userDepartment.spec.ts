import UserDepartment from "@/types/UserDepartment"
import getUserDepartment from "@/composables/getUserDepartment"
import axios from 'axios'

jest.mock("axios");
const mockedAxios = axios as jest.MockedFunction<typeof axios>;

const mockData: UserDepartment = {
  PERSON_ID: "123456",
  EMAIL_ADDRESS: "abc@xyz.com",
  DEPARTMENT_NAME: "Communications",
  //ROLES: "WRITE_ROLE"
  ROLES: ""
};

mockedAxios.mockResolvedValueOnce({ 
    data: [ {
            mockData
        }],
      status: 200,
      statusText: 'Ok',
      headers: {},
      config: {},
 });

describe("getUserDepartment test", () => {
  afterEach(jest.clearAllMocks);

  xit("should return deptLookupErr empty if getUserDepartment found", async () => {
    const {userDeptAndRole,  deptLookupErr, lookupDeptAndRoles } = getUserDepartment();
    lookupDeptAndRoles("abc@xyz.com");

    expect(deptLookupErr.value).toEqual("");
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });

  it("should return deptLookupErr Error Message if ROLES is empty", async () => {
    const {userDeptAndRole,  deptLookupErr, lookupDeptAndRoles } = getUserDepartment();
    await lookupDeptAndRoles("abc@xyz.com");

    expect(deptLookupErr.value).toEqual("Role not found for this user");
  });
});
