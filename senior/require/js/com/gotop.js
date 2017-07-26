define(['jquery'],function($){
  var gotop = (function(){
    function GoTop ($ct){
      this.ct = $ct;
      this.target = $('<button class="btn">GoTop</button>');
      this.creatNode();
      this.bindevent();
    }
    GoTop.prototype.creatNode = function(){
      this.ct.append(this.target);
      this.target.hide();
    }
    GoTop.prototype.bindevent = function(){
      var _this = this;
      $(window).on('scroll',function(){
        if($(window).scrollTop() > 100){
          _this.target.show(); //滚动大于100px，btn才出现
        }else{
          _this.target.hide();
        }
      })
      this.target.on('click',function(){
        $(window).scrollTop(0); //滚动到顶端
      });
    }

    return {
      init: function($node){
        new GoTop($node)
      }
    }
  })()

  return gotop;
})
 
/*  gotop.init($('.ct'))*/