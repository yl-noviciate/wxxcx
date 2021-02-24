Component({
  properties: {
    tabs: {
      type: Array,
      value: []
    }
  },
  data: {

  },
  methods: {
    handleItemTap(e) {
      const {index} = e.currentTarget.dataset
      this.triggerEvent("tabsItemChange", {index})
    }
  }
})
