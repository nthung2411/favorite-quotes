import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { QuotesService } from "../../services/quotes";
import { Quote } from "../../data/quote.interface";
import { QuotePage } from "../quote/quote";
import { SettingsService } from "../../services/settings";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {  
  favoriteQuotes: Quote[] = [];
  constructor(
    private quotesService: QuotesService,
    private modalCtrl: ModalController,
    private settingsService: SettingsService
  ) {  } 

  ionViewWillEnter(){
    this.favoriteQuotes = this.quotesService.getQuoteFavorites();
  }

  onViewQuote(quote: Quote){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove:boolean) => {
      if(remove) {
        this.onRemoveFromFavorites(quote);
      }
    });
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    this.favoriteQuotes = this.quotesService.getQuoteFavorites();
  }  

  getBackground(){
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }

  isAltBackground(){
    return this.settingsService.isAltBackground();
  }
}
