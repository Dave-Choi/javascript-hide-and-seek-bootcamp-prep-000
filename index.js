function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function increaseRankBy(n){
  let rankNodes = document.querySelectorAll(".ranked-list li");
  for(let i=0; i<rankNodes.length; i++){
    let item = rankNodes[i];
    let value = parseInt(item.innerHTML);
    item.innerHTML = value + n;
  }
}

function deepestChild(){
  let root = document.getElementById("grand-node");
  let deepest = root;
  let depth = 0;
  
  while(deepest.querySelector("div")){
    deepest = deepest.querySelector("div");
    depth++;
  }
  return depth;
  return deepest;
}
