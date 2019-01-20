import Counter from '../components/testingvue/counter.vue'

describe ('Counter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Counter)
  })

  it ('defaults to a count of 0', () => {
    expect(wrapper.vm.count).toBe(0)
  })

  it ('increments the count when the button is clicked', () => {
    expect(wrapper.vm.count).toBe(0)

    wrapper.find('button').trigger('click')

    expect(wrapper.vm.count).toBe(1)
  })

  it ('presents the current count', () => {
    expect(wrapper.find('.count').html()).toContain(0)

    wrapper.find('button').trigger('click')

    expect(wrapper.find('.count').html()).toContain(1)
  })

  it ('#hello', () => {
    expect(wrapper.vm.hello()).toBe('Hello world')
  })
})
