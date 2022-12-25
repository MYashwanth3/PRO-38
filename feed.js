class Feed{
  constructor(){}   

  display(){
    fill("red")
   
    var button=createButton("Feed the Dog");
    button.position(400,125);

    if(button.mousePressed(function(){
       foodS=foodS-1; 
       gameState=1;
       database.ref('/').update({'gameState':gameState});
    }));
  }
}
