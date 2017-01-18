var app = getApp()

Page({
    data:{
        G_DOMAIN: app.globalData.G_DOMAIN,
        wantToSee: false
    },
    onLoad:function(e){
        this.findMovies({_id:e.movieId})
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
                    movie:res.data[0]
                })
            }
        })
    },
    wantToSee: function(){
        this.setData({
            wantToSee: !this.data.wantToSee
        })
    },
    goComment: function(){
        
    }
})