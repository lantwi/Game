$(function() {
  console.log("Loaded");
  var p1name = prompt("Please enter your name");
  var p2name = prompt("Please enter your name");


  $('.disk').on('click', Table);

});


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

      Disk.prototype.setColor= function () {
      if(this.currentPlayer) {
      return (this.currentPlayer = $('#id').css('background-color','black'))
      } else if (this.currentPlayer = $('#id').css('background-color','red')) {
      } else {
      this. currentPlayer =$('#id').css('background-color','black');

      }
  };

      var Table = function (){
                  this.disks = [];
       }

      Table.prototype.settingDisk = function (){
      $('.disk').forEach(function(cell){
                   this.disks.push(new Disk());

      });
   }

       Table.prototype.changeColor = function (plot) {
         var moveDisk = this.disks[plot];
         if (moveDisk && moveDisk.playable()) {
              return moveDisk.setColor;
      }
};








/*  Table.prototype.checkrow = function() {
    var rowA,rowB,rowC,rowD,rowE,rowF;
    var colA,colB,colC,colD,colE,colF,colG;

  rowA = [$('#1'),$('#2'),$('#3'),$('#4'),$('#5'),$('#6'),('#7')];
  rowB = [$('#8'),$('#9'),$('#10'),$('#11'),$('#12'),$('#13'),('#14')];
  rowC = [$('#15'),$('#16'),$('#17'),$('#18'),$('#19'),$('#20'),('#21')];
  rowD = [$('#22'),$('#23'),$('#24'),$('#25'),$('#26'),$('#27'),('#28')];
  rowE = [$('#29'),$('#30'),$('#31'),$('#32'),$('#33'),$('#34'),('#35')];
  rowF = [$('#36'),$('#37'),$('#38'),$('#39'),$('#40'),$('#41'),('#42')];

  colA = [$('#1'),$('#8'),$('#15'),$('#22'),$('#29'),$('#36')];
  colB = [$('#2'),$('#9'),$('#16'),$('#23'),$('#30'),$('#37')];
  colC = [$('#3'),$('#10'),$('#17'),$('#24'),$('#31'),$('#38')];
  colD = [$('#4'),$('#11'),$('#18'),$('#25'),$('#32'),$('#39')];
  colE = [$('#5'),$('#12'),$('#19'),$('#26'),$('#33'),$('#40')];
  colF = [$('#6'),$('#13'),$('#20'),$('#27'),$('#30'),$('#41')];
  colG = [$('#7'),$('#14'),$('#21'),$('#28'),$('#31'),$('#42')];

});

Table .prototype.newDisk =

//
// playtime
var currentPlayer:
mydisc = new Disk
mytable = new Table */
