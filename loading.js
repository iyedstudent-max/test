$(function(){
  $("#git_photo").on({
    mouseenter: function(){
      $(this).attr('src','git_o.png');
    },
    mouseleave: function(){
      $(this).attr('src','git.png');
    }
  });


  $("#bash_photo").on({
    mouseenter: function(){
      $(this).attr('src','bash_o.png');
    },
    mouseleave: function(){
      $(this).attr('src','bash.png');
    }
  });
  


  $("#github_photo").on({
    mouseenter: function(){
      $(this).attr('src','github_o.png');
    },
    mouseleave: function(){
      $(this).attr('src','github.png');
    }
  });
});