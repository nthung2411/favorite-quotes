import { Quote } from '../data/quote.interface'

export class QuotesService{
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote){
        const position = this.favoriteQuotes.findIndex((quoteElement: Quote)=>{
            return quoteElement.id === quote.id;
        });
        if(position === -1) this.favoriteQuotes.push(quote);
    }
    
    removeQuoteFromFavorites(quote: Quote){
        const position = this.favoriteQuotes.findIndex((quoteElement: Quote)=>{
            return quoteElement.id === quote.id;
        });
        this.favoriteQuotes.splice(position,1);
    }

    getQuoteFavorites() {
        return  this.favoriteQuotes.slice();
    }
}