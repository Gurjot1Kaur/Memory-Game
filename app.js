document.addEventListener('DOMContentLoaded',()=>{
    
    //card options
const cardArray=[
{
    name:'fries',
    img:'images/fries.png'
},
{
    name:'fries',
    img:'images/fries.png'
},
{
    name:'cheeseburger',
    img:'images/cheeseburger.png'
},
{
    name:'cheeseburger',
    img:'images/cheeseburger.png'
},
{
    name:'hotdog',
    img:'images/hotdog.png'
},
{
    name:'hotdog',
    img:'images/hotdog.png'
},
{
    name:'ice-cream',
    img:'images/ice-cream2.png'
},
{
    name:'ice-cream',
    img:'images/ice-cream2.png'
},
{
    name:'milkshake',
    img:'images/milkshake.png'
},
{
    name:'milkshake',
    img:'images/milkshake.png'
},
{
    name:'pizza',
    img:'images/pizza.png'
},
{
    name:'pizza',
    img:'images/pizza.png'
}
]
cardArray.sort(()=>0.5 - Math.random());//randomize the card array so that after every refresh cards are shuffled 

const grid=document.querySelector('.grid');
const resultDisplay=document.querySelector('#result');
var score=100;
var cardsChosen=[];
var cardsChosenId=[];
var cardsWon=[];

//create the game board
function createBoard(){
    for(let i=0;i<cardArray.length;i++)
    {
        var card=document.createElement('img');//creating new HTML tag
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipcard);
        grid.appendChild(card);//all these img tags go under the grid div 
    }
} 
//flip your card
function flipcard(){
    var cardId=this.getAttribute('data-id');// this.getAttribute is same as card.getAttribute 
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length===2){//we only want to cards to be picked at a time
        setTimeout(checkForMatch, 500);
    }
}
//check for match
function checkForMatch(){
    var cards=document.querySelectorAll('img');//all cards are picked
    const optionOneId=cardsChosenId[0];
    const optionTwoId=cardsChosenId[1];
    if(cardsChosen[0]===cardsChosen[1])
    {
        alert('You found a match');
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cardsWon.push(cardsChosen);
    }
    else
    {
        if(score===0)
        {
            alert('You lost');
            score=100;
            createBoard();
        }
        

        else{
            cards[optionOneId].setAttribute('src','images/blank.png')
            cards[optionTwoId].setAttribute('src','images/blank.png')
            score=score-2;
            alert('Sorry try again');
        }
        
    }
    cardsChosen=[]//clearing both the arrays
    cardsChosenId=[]
    //resultDisplay.textContent=cardsWon.length;//result display
    if(cardsWon.length===cardArray.length/2)
        resultDisplay.textContent=" "+score +' Congratulations! You completed';

}
createBoard();




})
