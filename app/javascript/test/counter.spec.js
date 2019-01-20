import Counter from '../components/testingvue/counter.vue'

describe ('Counter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Counter)
  })

  it ('defaults to a count of 0', () => {
    expect(wrapper.vm.count).toBe(0)
  })

  it ('increments the count when the increment button is clicked', () => {
    expect(wrapper.vm.count).toBe(0)

    wrapper.find('.increment').trigger('click')

    expect(wrapper.vm.count).toBe(1)
  })

  // it ('decrements the count when the decrement button is clicked', () => {
  //   expect(wrapper.vm.count).toBe(0)

  //   wrapper.find('.increment').trigger('click') // 1
  //   wrapper.find('.increment').trigger('click') // 2

  //   wrapper.find('.decrement').trigger('click') // 1

  //   expect(wrapper.vm.count).toBe(1)
  // })

  it ('decrements the count when the decrement button is clicked', () => {
    wrapper.setData({ count: 5 })

    wrapper.find('.decrement').trigger('click') // 4

    expect(wrapper.vm.count).toBe(4)
  })

  it.only ('never goes below 0', () => {
    expect(wrapper.vm.count).toBe(0)

    expect(wrapper.find('.decrement').element.style.display).toBe('none')
    expect(wrapper.find('.decrement').isVisible()).toBe(false)

    // wrapper.find('.increment').trigger('click') // 1
    wrapper.setData({ count: 1 })

    expect(wrapper.find('.decrement').isVisible()).toBe(true)
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
