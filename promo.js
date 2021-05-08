
function selectWinnerFromList (listOfThings) {
	indexOfRandomItem = Math.floor(Math.random()*listOfThings.length)
	return listOfThings[indexOfRandomItem]
}

var numberOfTier1Winners = 1  //number of grandprize winners
var numberOfTier2Winners = 3 
var numberOfTier3Winners = 10

var tier1Prize = "1 Trillion Tokens"
var tier2Prize = "100 Billion Tokens"
var tier3Prize = "10 Billion Tokens"

var tier1Winners = []
var tier2Winners = []
var tier3Winners = []

//promo(listOfQualifiedRetweets) // input list format is [{"id": "###########"},{"id": "###########"}]

function promo(qualifiedRetweets) {
  selectTier1(qualifiedRetweets)
  selectTier2(qualifiedRetweets)
  selectTier3(qualifiedRetweets)
}

function selectTier1(qualifiedRetweets) {
  for(i=0;i<numberOfTier1Winners;i++) {    
    tier1Winners.push(selectWinnerFromList(qualifiedRetweets).id)    
  }  
}

function selectTier2(qualifiedRetweets) {  
  for(i=0;i<numberOfTier2Winners;i++) {    
    tier2Winners.push(selectWinnerFromList(qualifiedRetweets).id)
  } 
} 

function selectTier3(qualifiedRetweets) {  
  for(i=0;i<numberOfTier3Winners;i++) {
    tier3Winners.push(selectWinnerFromList(qualifiedRetweets).id)
  }
}

for(i=0;i<numberOfTier1Winners;i++) {
  console.log("Winner of " + tier1Prize + ": "+ "tweetID = " + tier1Winners[i])
}

for(i=0;i<numberOfTier2Winners;i++) {
  console.log("Winner of " + tier2Prize + ": "+ "tweetID = " + tier2Winners[i])
}

for(i=0;i<numberOfTier3Winners;i++) {
  console.log("Winner of " + tier3Prize + ": "+ "tweetID = " + tier3Winners[i])
}
