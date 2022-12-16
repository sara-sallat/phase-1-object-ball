
const gameObject = () =>{
  return {home:{
      teamName: "Brooklyn Nets",
      colors: ["Black","White"],
      players: {
          "Alan Anderson": {Number: 0, Shoe: 16, Points: 22, Rebounds: 12, Assists: 12, Steals: 3, Blocks: 1, SlumDunks: 1 },
          "Reggie Evans": {Number: 30, Shoe: 14, Points: 12, Rebounds: 12, Assists: 12, Steals: 12, Blocks: 12, SlumDunks: 7 },
         "Brook Lopez": {Number: 11, Shoe: 17, Points: 17, Rebounds: 19, Assists: 10, Steals: 3, Blocks: 1, SlumDunks: 15 },
          "Mason Plumlee": {Number: 1, Shoe: 19, Points: 26, Rebounds: 12, Assists: 6, Steals: 3, Blocks: 8, SlumDunks: 5 },
          "Jason Terry": {Number: 31, Shoe: 15, Points: 19, Rebounds: 2, Assists: 2, Steals: 4, Blocks: 11, SlumDunks: 1 }
      }
  },
  away:{
      teamName: "Charlotte Hornets",
      colors: ["Turquoise","Purple"],
      players: {
          "Jeff Adrien": {Number: 4, Shoe: 18, Points: 10, Rebounds: 1, Assists: 1, Steals: 2, Blocks: 7, SlumDunks: 2 },
          "Bismak Biyombo": {Number: 0, Shoe: 16, Points: 12, Rebounds: 4, Assists: 7, Steals: 7, Blocks: 15, SlumDunks: 10 },
         "DeSagna Diop": {Number: 2, Shoe: 14, Points: 24, Rebounds: 12, Assists: 12, Steals: 4, Blocks: 5, SlumDunks: 5 },
          "Ben Gordon": {Number: 8, Shoe: 15, Points: 33, Rebounds: 3, Assists: 2, Steals: 1, Blocks: 1, SlumDunks: 0 },
          "Brendan Haywood": {Number: 33, Shoe: 15, Points: 6, Rebounds: 12, Assists: 12, Steals: 22, Blocks: 5, SlumDunks: 12 }
      }
      }
}
};
function numPointsScored(playerName){
let object = gameObject();

let getPlayresHome = ()=> {for(let playersHome in object.home){
   return (playersHome,object.home['players'])
}}
 
let getPlayresAway = ()=>{ for(let playersAway in object.away){
 return (playersAway,object.away['players'])
};}
let players1 = getPlayresHome();
let players2 = getPlayresAway();
let players = {...players1, ...players2};
return players[playerName].Points;
};


function shoeSize(playerName){
let object = gameObject();

let getPlayresHome = ()=> {for(let playersHome in object.home){
   return (playersHome,object.home['players'])
}}
 
let getPlayresAway = ()=>{ for(let playersAway in object.away){
 return (playersAway,object.away['players'])
};}
let players1 = getPlayresHome();
let players2 = getPlayresAway();
let players = {...players1, ...players2};
return players[playerName].Shoe;
};


function teamColors(teamName){
let object = gameObject();
return object[teamName].colors

};

function teamNames(teamName){
let object = gameObject();
let names = object[teamName].players;
return Object.keys(names);
};


function playerNumbers(teamName){
 let object = gameObject();
 let names = object[teamName].players;
 let namesarr = Object.values(names);
 let numbersarr =  namesarr.map(obj=>obj.Number);
return numbersarr;
};


function playerStats(playerName){
let object = gameObject();

let getPlayresHome = ()=> {for(let playersHome in object.home){
   return (playersHome,object.home['players'])
}}
 
let getPlayresAway = ()=>{ for(let playersAway in object.away){
 return (playersAway,object.away['players'])
};}
let players1 = getPlayresHome();
let players2 = getPlayresAway();
let players = {...players1, ...players2};
let state = players[playerName];
return state;
}


function bigShoeRebounds(){
let object = gameObject();

let getPlayresHome = ()=> {for(let playersHome in object.home){
   return (playersHome,object.home['players'])
}}
 
let getPlayresAway = ()=>{ for(let playersAway in object.away){
 return (playersAway,object.away['players'])
};}
let players1 = getPlayresHome();
let players2 = getPlayresAway();
let players = {...players1, ...players2};
let state = Object.values(players);
let maxShoe =  Math.max(...state.map(({ Shoe }) => Shoe));
let statearr = state.filter(obj=>{return obj.Shoe === maxShoe})
let rebounds = statearr.map(obj=>{return obj.Rebounds}) 
return rebounds;

}

function mostPointsScored(){
let object = gameObject();

let getPlayresHome = ()=> {for(let playersHome in object.home){
    return (playersHome,object.home['players'])
 }}
  
 let getPlayresAway = ()=>{ for(let playersAway in object.away){
  return (playersAway,object.away['players'])
 };}
 let players1 = getPlayresHome();
 let players2 = getPlayresAway();
 let players = {...players1, ...players2};
 let state = Object.values(players);
 let maxPoints =  Math.max(...state.map(({ Points }) => Points));
 let maxPointsobj = state.find(obj => {
  return obj.Points === maxPoints
});


  function getKeyByValue(players, maxPointsobj) {
  return Object.keys(players).find(key => players[key] === maxPointsobj);
};
 
let mostPointsScoredPlayerName = getKeyByValue(players, maxPointsobj);
return mostPointsScoredPlayerName; 
 
 
};


function winningTeam(){
let object = gameObject();

let getPlayresHome = ()=> {for(let playersHome in object.home){
    return (playersHome,object.home['players'])
 }}
  
 let getPlayresAway = ()=>{ for(let playersAway in object.away){
  return (playersAway,object.away['players'])
 };}
 let players1 = getPlayresHome();
 let players2 = getPlayresAway();


 let state1 = Object.values(players1);
 let state2 = Object.values(players2);
 let pointsHome = state1.map(obj=>obj.Points  )
 let pointsAway = state2.map(obj=>obj.Points)
 
 let homeResult = pointsHome.reduce((accumulator, currentValue,) => {return accumulator + currentValue
}, 0);
let awayResult = pointsAway.reduce((accumulator, currentValue,) => {return accumulator + currentValue
}, 0);
let result;
if(homeResult>awayResult){return result = `${object.home.teamName} Team win`}
else if(homeResult<awayResult){return result = `${object.away.teamName} Team win`}
return result;
}


function playerWithLongestName(){
let object = gameObject();

let getPlayresHome = ()=> {for(let playersHome in object.home){
   return (playersHome,object.home['players'])
}}
 
let getPlayresAway = ()=>{ for(let playersAway in object.away){
 return (playersAway,object.away['players'])
};}
let players1 = getPlayresHome();
let players2 = getPlayresAway();
let players = {...players1, ...players2};
let allPlayersNames = Object.keys(players);
let longestName =  allPlayersNames.reduce((a, b)=> a.length > b.length ? a : b);
return longestName;
}
