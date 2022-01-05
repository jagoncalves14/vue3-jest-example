import { mount } from '@vue/test-utils'
import Homepage from '@/views/homepage/homepage.vue'

describe('Homepage', () => {
  describe('Mount', () => {
    it('should mount correctly', () => {
      const wrapper = mount(Homepage)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
