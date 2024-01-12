import { mount } from '@vue/test-utils'
import HelloComponent from '@/components/HelloComponent.vue'

describe('HelloComponent.vue Test', () => {
  it('renders newTaskButton when saveBtnActive is true', async () => {
    const wrapper = mount(HelloComponent)

    // Set up your mock data for saveBtnActive being true
    await wrapper.setData({ validationErrMsg: '', saveBtnActive: true })

    expect(wrapper.find('#newTaskButton').exists()).toBe(true)
  })

  it('renders validation error message when saveBtnActive is false', async () => {
    const wrapper = mount(HelloComponent)

    // Set up your mock data for saveBtnActive being false and a validation error message
    await wrapper.setData({ validationErrMsg: 'test validation error message', saveBtnActive: false })

    expect(wrapper.find('#taskInvalidRoleMsg').exists()).toBe(true)
    expect(wrapper.find('#taskInvalidRoleMsg').text()).toContain('Your validation error message')
  })

})
