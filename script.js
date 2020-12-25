function Deck(){
    this.values = {2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 10, Q: 10, K: 10, A:1};
    this.symbols = ['club', 'heart', 'diamond', 'spade'];
    this.cards = [];
    this.build = function(){
        this.symbols.forEach(symbol => { //გადავყვებით მასივს და ავიღებთ მის მნიშვნელობას
            for(let value in this.values){ //გადავყვებით ობიექტს და ავიღებთ მის qi
                this.cards.push( {value: value, symbol: symbol} );
            }
        });
        this.shuffle();
    }

    this.shuffle = function(){      
        const newCards = []; 
        while(this.cards.length){            
            index =Math.floor(Math.random()*this.cards.length); 
            newCards.push(this.cards[index]);     
            this.cards[index] = this.cards[this.cards.length - 1];
            this.cards.pop();    
        }
       
        this.cards = newCards;
    }

    this.getCard = function(){
        return this.cards.pop();
    };
}

deck1 = new Deck();
deck1.build();
// console.log(deck1.cards);
// console.log(deck1.getCard())
// console.log(deck1.cards);


function Player (status, money){
    this.status = status;
    this.money = money;
    this.cards = cards;
    this.points = points;   
    this.take = take;
    this.stop = stop;
}