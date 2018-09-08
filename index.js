function theBeatlesPlay(musicians, instruments){
  var theBeatlesPlay = new Array();
  for (let i = 0; i < 4; i++){
    theBeatlesPlay.push(musicians[i]+ " plays " + instruments[i]);
  }
  return theBeatlesPlay;
}

function johnLennonFacts(facts){
  let i = 0;
  while(i < facts.length){
    facts.push([i] + "!!!");
    i++
  }
  return facts;
}
