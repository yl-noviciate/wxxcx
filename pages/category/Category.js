import { request } from '../../request/index'

Page({
  data: {
    leftMenuList: [],
    rightContent: [],
    currentIndex: 0,
    scrollTop: 0
  },
  Cates: [],
  onLoad: function(options) {
    const Cates = wx.getStorageSync("cates")
    if (!Cates) {
      this.getCates()
    } else {
      if ((Date.now() - Cates.time) > (6000 * 10)) {
        this.getCates()
      } else {
        this.Cates = Cates.data
        let leftMenuList = this.Cates.map(item => item.cat_name)
        let rightContent = this.Cates[0].children
        this.setData({
          leftMenuList,
          rightContent
        })
      }
    }
  },
  getCates() {
    request({url: '/categories'})
    .then(res => {
      this.Cates = res
      wx.setStorageSync("cates", {time: Date.now(), data: this.Cates})
      let leftMenuList = this.Cates.map(item => item.cat_name)
      let rightContent = this.Cates[0].children
      this.setData({
        leftMenuList,
        rightContent,
        scrollTop: 0
      })
    })
  },
  handleItemTap(e) {
    const {index} = e.currentTarget.dataset
    let rightContent = this.Cates[index].children
    this.setData({
      currentIndex: index,
      rightContent
    })
  }
})
