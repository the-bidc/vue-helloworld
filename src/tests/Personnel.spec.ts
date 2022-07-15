import { mount } from "@vue/test-utils";
import Personnel from "@/views/Personnel.vue";
import { ref } from "vue";

describe("permission to add a new employee", () => {
  it("can edit", () => {
    const wrapper = mount(Personnel, {
      global: {
        provide: {
          userDeptAndRole: ref({
            PERSON_ID: "123456",
            EMAIL_ADDRESS: "abc@xyz.com",
            DEPARTMENT_NAME: "Communications",
            ROLES: "WRITE_ROLE"
          })
        }
      }
    });

    expect(wrapper.find('[data-test="new-employee"]').exists()).toBe(true);
  });

  it("cannot edit", () => {
    const wrapper = mount(Personnel, {
      global: {
        provide: {
          userDeptAndRole: ref({
            PERSON_ID: "123456",
            EMAIL_ADDRESS: "abc@xyz.com",
            DEPARTMENT_NAME: "Communications",
            ROLES: "READ_ROLE"
          })
        }
      }
    });

    expect(wrapper.find('[data-test="new-employee"]').exists()).toBe(false);
  });
});
