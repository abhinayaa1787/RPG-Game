var charpoint;
var enemypoint;
var defenderpoint;
var charattackPt;
var defattackPt;
$(".char").on("click",function(){
    var character=$(this).remove();
    var charpoint=$(this).find(".point").text();
    console.log(charpoint);
    $("#yourCharDiv").append(character);
     var enemies=$(".char").not($(this)).remove();
    enemies.css({"background-color":"red","border":"solid 1px black"});
     enemies.addClass("enemy");
     $("#enemiesDiv").append(enemies);
     $(".enemy").on("click",function(){
        $(".enemy").off("click");
        enemies.addClass("defender");
        var defender=$(this).remove();
        var defenderpoint=$(this).find(".point").text();
        console.log(defenderpoint);
    
    defender.css({'background-color':'black','color':'white','border':' solid 1px rgb(88, 218, 88)'});
        $("#defenderSection").append(defender);

    })
   $("#fightBtn").on("click",function(){

   })
})
