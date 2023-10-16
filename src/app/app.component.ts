import { Component, OnInit } from '@angular/core';
import { Quote } from './quote';
import { QuoteService } from './quoteService.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public quote: Quote;  

  constructor(private quoteServic: QuoteService){}

  ngOnInit(): void {
    this.getQuote();
  }

  public getQuote(): void{
    this.quoteServic.getQuote().subscribe((res: Quote)=>{
      this.quote = res;
    },
    (err: HttpErrorResponse)=>{
       alert(err.message);
     } );
  }
  refreshPage() {
    // Use window.location.reload() to refresh the page
    this.getQuote();
  }
  
}
