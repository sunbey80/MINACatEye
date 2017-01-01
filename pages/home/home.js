var app = getApp()

Page({
    data:{
        G_DOMAIN: app.globalData.G_DOMAIN,
        onsale: 'true'
    },
    onLoad:function(){

        this.findMovies({onsale:this.data.onsale})
        
    },
    switchOnSale: function(e){
        this.setData({
            onsale: e.target.dataset.onsale
        })
        this.findMovies({onsale:this.data.onsale})
    },
    findMovies: function(queryData){
        var that = this
        wx.request({
            url: 'http://'+ app.globalData.G_DOMAIN +'/APImovies',
            data: queryData,
            method: 'GET', 
            success: function(res){
                // success
                that.setData({
                    movies:res.data
                })
            }
        })
    }
})