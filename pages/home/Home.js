import { request } from '../../request/index'

Page({
  data: {
    swiperList: [],
    catesList: [],
    floorList: []
  },
  onLoad: function(options) {
    this.getSwiperList()
    this.getCatesList()
    this.getFloorList()
  },
  getSwiperList() {
    request({url: '/home/swiperdata'})
    .then(res => {
      this.setData({
        swiperList: res
      })
    })
  },
  getCatesList() {
    request({url: '/home/catitems'})
    .then(res => {
      this.setData({
        catesList: res
      })
    })
  },
  getFloorList() {
    request({url: '/home/floordata'})
    .then(res => {
      this.setData({
        floorList: res
      })
    })
  }
})
