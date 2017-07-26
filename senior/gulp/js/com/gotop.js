  var $ = require('jquery')

  var gotop = (function(){
    function GoTop ($ct){
      this.ct = $ct;
      this.target = $('<button class="btn">回到顶部</button>');
      this.target.css({
        position: 'fixed',
        right: '100px',
        bottom: '50px',
        display: 'none',
        padding: '8px',
        cursor: 'pointer',
        border: '1px solid',
        borderRadius: '4px',
        background: "#ccc"
      })
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
        _this.ct.animate({
          scrollTop: 0
        },1000)
      })
    }

    return {
      init: function($node){
        new GoTop($node)
      }
    }
  })()

  module.exports =  gotop;

    
  // gotop.init($(body))