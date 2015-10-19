$(document).ready(function() {
  console.log("Loaded");
  var p1name = prompt("Please enter your name");
  var p2name = prompt("Please enter your name");

  $('.disk').on('click',function() {
   var col = $(this).attr('id');
   game.play(col);
  })

})


   //Disk contructor setting value equal null if so return value of disk
   var Disk = function() {
                this.value = null;
                this.currentPlayer = null;
    }
     Disk.prototype.playable = function() {
     if(this.value) {
     return this.value;
     } else {
     alert ("choose another move");
     }
   }
      Disk.prototype.setColor= function () {
      if(this.currentPlayer) {
      return (this.currentPlayer = $('#id').css('background-color','black'))
      } else if (this.currentPlayer = $('#id').css('background-color','red')) {
      } else {
      this. currentPlayer =$('#id').css('background-color','black');

      }
  }
      var Table = function (){
                  this.disks = [];
                  this.winner = null;
  }
      Table.prototype.settingDisk = function (){
      $('.disk').forEach(function(cell){
                   this.disks.push(new Disk());
      })
   }

       Table.prototype.changeColor = function (plot) {
         var moveDisk = this.disks[plot];
         if (moveDisk && moveDisk.playable()) {
            return moveDisk.setColor;
      }

      Table.prototype.checkWinner = function() {
          var columnList = document.querySelectorAll('.column')
          for(var i = 0; i < column.length; i++);
          if (columnList[i] === )


     });
  }
      var game = {
       table :'',
       makeTable: function () {
               this.table = new Table();

      },
      start: function () {
             this.makeTable();
             this.table.settingDisk();
      },
      play: function(plot) {
          this.table.changeColor(plot);
     }

  };
