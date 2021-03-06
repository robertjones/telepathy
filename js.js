'use strict';

const cards = [

{type: "most likely", challenge: "at the pub"}, 
{type: "most likely", challenge: "in the garden"}, 
{type: "most likely", challenge: "outside"}, 
{type: "most likely", challenge: "inside"}, 
{type: "most likely", challenge: "in a city"}, 
{type: "most likely", challenge: "in the countryside"}, 
{type: "most likely", challenge: "at a club"}, 
{type: "most likely", challenge: "at the gym"}, 
{type: "most likely", challenge: "at the office"}, 
{type: "most likely", challenge: "on a plane"}, 
{type: "most likely", challenge: "in the kitchen"}, 
{type: "most likely", challenge: "in front of a mirror"}, 
{type: "most likely", challenge: "on their phone"}, 
{type: "most likely", challenge: "reading a book"}, 
{type: "most likely", challenge: "listening to the radio"}, 
{type: "most likely", challenge: "reading Shakespeare"}, 
{type: "most likely", challenge: "reading Dawkins"}, 
{type: "most likely", challenge: "reading the Communist Party manifesto"}, 
{type: "most likely", challenge: "at a protest"}, 
{type: "most likely", challenge: "at a riot"}, 
{type: "most likely", challenge: "in bed"}, 
{type: "most likely", challenge: "asleep"}, 
{type: "most likely", challenge: "on a bike"}, 
{type: "most likely", challenge: "writing"}, 
{type: "most likely", challenge: "painting"}, 
{type: "most likely", challenge: "eating"}, 
{type: "most likely", challenge: "in prison"}, 
{type: "most likely", challenge: "watching a movie"}, 
{type: "most likely", challenge: "reading"}, 
{type: "most likely", challenge: "holding a medal"}, 
{type: "most likely", challenge: "pumping iron"}, 
{type: "most likely", challenge: "doing yoga"}, 
{type: "most likely", challenge: "cooking"}, 
{type: "most likely", challenge: "at a cookery class"}, 
{type: "most likely", challenge: "shouting"}, 
{type: "most likely", challenge: "singing"}, 
{type: "most likely", challenge: "acting"}, 
{type: "most likely", challenge: "schmoozing"}, 
{type: "most likely", challenge: "Googling"}, 
{type: "most likely", challenge: "using a thesaurus"}, 
{type: "most likely", challenge: "with a broken leg"}, 
{type: "most likely", challenge: "meditating"}, 
{type: "most likely", challenge: "writing a bestseller"}, 
{type: "most likely", challenge: "on TV"}, 
{type: "most likely", challenge: "on film"}, 
{type: "most likely", challenge: "with a hit single"}, 
{type: "most likely", challenge: "on the nine o'clock news"}, 
{type: "most likely", challenge: "whispering"}, 
{type: "most likely", challenge: "with a calculator"}, 
{type: "most likely", challenge: "collecting stamps"}, 
{type: "most likely", challenge: "hording"}, 
{type: "most likely", challenge: "speaking a foreign language"}, 
{type: "most likely", challenge: "eating avocado"}, 
{type: "most likely", challenge: "with red cheeks"}, 
{type: "most likely", challenge: "ignoring the doctor"}, 
{type: "most likely", challenge: "eating chocolate"}, 
{type: "most likely", challenge: "drinking cocktails"}, 
{type: "most likely", challenge: "eating fudge"}, 
{type: "most likely", challenge: "in a movie"}, 
{type: "most likely", challenge: "completing an iron man"}, 
{type: "most likely", challenge: "awake at 3am"}, 
{type: "most likely", challenge: "with their cables in a pool of water"}, 
{type: "most likely", challenge: "bungee jumping"}, 
{type: "most likely", challenge: "at the top of a mountain"}, 
{type: "most likely", challenge: "wearing a suit"}, 
{type: "most likely", challenge: "wearing a dress"}, 
{type: "most likely", challenge: "wearing a hat"}, 
{type: "most likely", challenge: "making a mess"}, 
{type: "most likely", challenge: "clearing up"}, 
{type: "most likely", challenge: "eating pizza"}, 
{type: "most likely", challenge: "speaking French"}, 
{type: "most likely", challenge: "speaking Italian"}, 
{type: "most likely", challenge: "speaking Spanish"}, 
{type: "most likely", challenge: "speaking Mandarin"}, 
{type: "most likely", challenge: "speaking Portuguese"}, 
{type: "most likely", challenge: "eating cheese"}, 
{type: "most likely", challenge: "wearing a beret"}, 
{type: "most likely", challenge: "running"}, 
{type: "most likely", challenge: "limping"}, 
{type: "most likely", challenge: "with a billion in the bank"}, 
{type: "most likely", challenge: "studying"}, 
{type: "most likely", challenge: "wearing pink"}, 
{type: "most likely", challenge: "wearing black"}, 
{type: "most likely", challenge: "wearing black tie"}, 
{type: "most likely", challenge: "wearing white tie"}, 
{type: "most likely", challenge: "at a Trump rally"}, 
{type: "most likely", challenge: "apologising"}, 
{type: "most likely", challenge: "buying"}, 
{type: "most likely", challenge: "selling"}, 
{type: "most likely", challenge: "instructing"}, 
{type: "most likely", challenge: "coding"}, 
{type: "most likely", challenge: "bashing their head"}, 
{type: "most likely", challenge: "buying new shoes"}, 
{type: "most likely", challenge: "eating foie gras groise"}, 
{type: "most likely", challenge: "drinking Champagne"}, 
{type: "most likely", challenge: "listening to Bach"}, 
{type: "most likely", challenge: "dancing"}, 
{type: "most likely", challenge: "looking for their keys"}, 
{type: "most likely", challenge: "looking at a screen"}, 
{type: "most likely", challenge: "paying Xbox"}, 
{type: "most likely", challenge: "breaking a sweat"}, 
{type: "most likely", challenge: "building something"}, 
{type: "top of mind", challenge: "drink"}, 
{type: "top of mind", challenge: "sport"}, 
{type: "top of mind", challenge: "food"}, 
{type: "top of mind", challenge: "film"}, 
{type: "top of mind", challenge: "song"}, 
{type: "top of mind", challenge: "thing we want more of"}, 
{type: "top of mind", challenge: "thing we want less of"}, 
{type: "top of mind", challenge: "place"}, 
{type: "top of mind", challenge: "holiday destination"}, 
{type: "top of mind", challenge: "game"}, 
{type: "top of mind", challenge: "celebrity"}, 
{type: "top of mind", challenge: "politician"}, 
{type: "top of mind", challenge: "country"}, 
{type: "top of mind", challenge: "phrase or saying"}, 
{type: "top of mind", challenge: "person we know"}, 
{type: "top of mind", challenge: "author"}, 
{type: "top of mind", challenge: "play"}, 
{type: "top of mind", challenge: "number from one to ten"}, 
{type: "top of mind", challenge: "colour"}, 
{type: "top of mind", challenge: "book"}, 
{type: "top of mind", challenge: "word"}, 
{type: "top of mind", challenge: "thing you find in a wallet"}, 
{type: "top of mind", challenge: "thing you find in the kitchen"}, 
{type: "top of mind", challenge: "thing you find in the bedroom"}, 
{type: "top of mind", challenge: "painting"}, 
{type: "top of mind", challenge: "way of cooking eggs"}, 
{type: "top of mind", challenge: "fruit"}, 
{type: "top of mind", challenge: "breakfast"}, 
{type: "top of mind", challenge: "meal"}, 
{type: "top of mind", challenge: "job"}, 
{type: "top of mind", challenge: "hobby"}, 
{type: "top of mind", challenge: "messy place"}, 
{type: "top of mind", challenge: "thing that is missing right now"}, 
{type: "a or b", challenge: "fiction or non-fiction books"}, 
{type: "a or b", challenge: "summer or winter"}, 
{type: "a or b", challenge: "badminton or table tennis"}, 
{type: "a or b", challenge: "swimming or cycling"}, 
{type: "a or b", challenge: "walking or watching films"}, 
{type: "a or b", challenge: "day or night"}, 
{type: "a or b", challenge: "dishwasher or washing machine"}, 
{type: "a or b", challenge: "oven or microwave"}, 
{type: "a or b", challenge: "steamer or mop"}, 
{type: "a or b", challenge: "bath or shower"}, 
{type: "a or b", challenge: "Spain or France"}, 
{type: "a or b", challenge: "mountains or the sea"}, 
{type: "a or b", challenge: "too late or too early"}, 
{type: "a or b", challenge: "accountant or banker"}, 
{type: "a or b", challenge: "musician or painter"}, 
{type: "a or b", challenge: "apples or pears"}, 
{type: "a or b", challenge: "eat in or eat out"}, 
{type: "a or b", challenge: "pub or park"}, 
{type: "a or b", challenge: "train or car"}, 
{type: "a or b", challenge: "driver or passenger"}, 
{type: "a or b", challenge: "learning or teaching"}, 
{type: "a or b", challenge: "talking or listening"}, 
{type: "a or b", challenge: "sailing or surfing"}, 
{type: "a or b", challenge: "family or friends"}, 
{type: "a or b", challenge: "Shreddies or Weetabix"}, 
{type: "a or b", challenge: "milk or juice"}, 
{type: "a or b", challenge: "statements or questions"}, 
{type: "a or b", challenge: "money or power"}, 
{type: "a or b", challenge: "iPhone or Android"}, 
{type: "a or b", challenge: "city or countryside"}, 
{type: "a or b", challenge: "snakes or spiders"}, 
{type: "a or b", challenge: "daddy or chips"}, 
{type: "most likely", challenge: "in a bunker"}, 
{type: "most likely", challenge: "wearing a sombrero "}, 
{type: "most likely", challenge: "wearing jewellery"}, 
{type: "most likely", challenge: "wearing makeup"}, 
{type: "most likely", challenge: "eating haggis "}, 
{type: "most likely", challenge: "lighting candles"}, 
{type: "most likely", challenge: "blagging"}, 
{type: "most likely", challenge: "with a hangover"}, 
{type: "most likely", challenge: "gesturing"}, 
{type: "most likely", challenge: "suing someone "}, 
{type: "most likely", challenge: "winning the lottery "}, 
{type: "most likely", challenge: "fixing something"}, 
{type: "most likely", challenge: "pushing a buggy"}, 
{type: "most likely", challenge: "giving someone a lift"}, 
{type: "most likely", challenge: "on a boat"}, 
{type: "most likely", challenge: "wrapping presents"}, 
{type: "most likely", challenge: "running late"}, 
{type: "most likely", challenge: "cut off from civilisation "}, 
{type: "most likely", challenge: "without phone signal"}, 
{type: "most likely", challenge: "polishing shoes"}, 
{type: "most likely", challenge: "being asked for ID"}, 
{type: "most likely", challenge: "finishing a book"}, 
{type: "most likely", challenge: "listening to a podcast"}, 
{type: "most likely", challenge: "watching football"}, 
{type: "most likely", challenge: "watching sports"}, 
{type: "most likely", challenge: "playing tennis"}, 
{type: "most likely", challenge: "sunbathing"}, 
{type: "most likely", challenge: "being misunderstood "}, 
{type: "most likely", challenge: "behind a camera "}, 
{type: "most likely", challenge: "eating roti or prata "}, 
{type: "most likely", challenge: "on their feet"}, 
{type: "most likely", challenge: "in a chair "}, 
{type: "most likely", challenge: "behind the wheel "}, 
{type: "most likely", challenge: "checking the weather forecast"}, 
{type: "most likely", challenge: "passing the salt"}, 
{type: "most likely", challenge: "debating"}, 
{type: "most likely", challenge: "baking"}, 
{type: "most likely", challenge: "underground"}, 
{type: "most likely", challenge: "commuting"}, 
{type: "most likely", challenge: "in nature"}, 
{type: "most likely", challenge: "watching TV"}, 
{type: "most likely", challenge: "watching a romantic comedy"}, 
{type: "most likely", challenge: "watching an action film"}, 
{type: "most likely", challenge: "watching a Scandinavian drama"}, 
{type: "most likely", challenge: "with a low battery"}, 
{type: "most likely", challenge: "with cold hands"}, 
{type: "most likely", challenge: "in a meeting"}, 
{type: "most likely", challenge: "giving a presentation "}, 
{type: "most likely", challenge: "in a factory"}, 
{type: "most likely", challenge: "in a warehouse"}, 
{type: "most likely", challenge: "in a courtroom "}, 
{type: "most likely", challenge: "at a restaurant "}, 
{type: "most likely", challenge: "at a train station"}, 
{type: "most likely", challenge: "at an airport"}, 
{type: "most likely", challenge: "at a religious establishment"}, 
{type: "most likely", challenge: "by the pool"}, 
{type: "most likely", challenge: "in the shower"}, 
{type: "most likely", challenge: "in a field"}, 
{type: "most likely", challenge: "on the road"}, 
{type: "most likely", challenge: "in a desert"}, 
{type: "most likely", challenge: "in a forest "}, 
{type: "most likely", challenge: "by a lake "}, 
{type: "most likely", challenge: "on the water"}, 
{type: "most likely", challenge: "at the beach"}, 
{type: "most likely", challenge: "in the air"}, 
{type: "most likely", challenge: "at the theatre"}, 
{type: "most likely", challenge: "at the library"}, 
{type: "most likely", challenge: "in a hospital"}, 
{type: "most likely", challenge: "at a bar"}, 
{type: "most likely", challenge: "talking"}, 
{type: "most likely", challenge: "listening"}, 
{type: "most likely", challenge: "wearing gloves"}, 
{type: "most likely", challenge: "wearing tights "}, 
{type: "most likely", challenge: "wearing thermals "}, 
{type: "most likely", challenge: "wearing a top hat"}, 
{type: "most likely", challenge: "wearing a medal"}, 
{type: "most likely", challenge: "typing"}, 
{type: "most likely", challenge: "brushing their hair"}, 
{type: "most likely", challenge: "getting dressed"}, 
{type: "most likely", challenge: "away from home"}, 
{type: "most likely", challenge: "writing a letter"}, 
{type: "most likely", challenge: "drawing"}, 
{type: "most likely", challenge: "enjoying fine wine"}, 
{type: "most likely", challenge: "playing parkour games"}, 
{type: "most likely", challenge: "lighting a fire"}, 
{type: "most likely", challenge: "tending to the BBQ"}, 
{type: "most likely", challenge: "pouring a pint"}, 
{type: "most likely", challenge: "on a date"}, 
{type: "most likely", challenge: "in the park"}, 
{type: "most likely", challenge: "napping"}, 
{type: "most likely", challenge: "listening to trance music"}, 
{type: "most likely", challenge: "listening to rap"}, 
{type: "most likely", challenge: "rocking out"}, 
{type: "most likely", challenge: "listening to their parents' music"}, 
{type: "most likely", challenge: "underneath the mistletoe"}

];
const types = {'most likely': {'title': 'Most Likely Person', 'description': "Name the person in your group most likely to be found:"},
         'top of mind': {'title': 'Top of Mind', 'description': "Which thing of this kind is collectively the first that comes to mind?"},
         'a or b': {'title': 'A or B', 'description': "As a group, we unanimously choose which of the following?"}};
const rand = n => Math.floor(Math.random()*n);
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};
var shuffledCards = shuffle(cards);
const updateCards = function(){
  var card = shuffledCards.pop();
  document.querySelector('#type_title').innerHTML = types[card.type].title;
  document.querySelector('#type_description').innerHTML = types[card.type].description;
  document.querySelector('#challenge').innerHTML = card.challenge;
};
const startTimer = function(){
  document.querySelector('#timer_button').innerHTML = "...";
  document.querySelector('#timer_button').style.opacity = 0.4;
  document.querySelector('#end_sound').play();
  var timeoutID = window.setTimeout(resetButton, 30000);
};
const resetButton = function(){
  document.querySelector('#timer_button').innerHTML = "Start timer";
  document.querySelector('#timer_button').style.opacity = 1;
};
updateCards();