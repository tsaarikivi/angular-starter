import { Component, Input, OnInit } from '@angular/core';
import { ShopService } from '@app/core';
import { Observable } from 'rxjs/Observable';
import { TicketType } from '@app/types';

@Component({
  selector: 'app-ticket-suggestions',
  templateUrl: './ticket-suggestions.component.html',
  styleUrls: ['./ticket-suggestions.component.css']
})
export class TicketSuggestionsComponent implements OnInit {
  @Input() title: string;
  @Input() category: string;
  @Input() eventId: string;

  ticketTypes: Observable<TicketType[]>;

  constructor(private readonly shopService: ShopService) {}

  ngOnInit() {
    this.ticketTypes = this.shopService.getEventTicketTypesByCategory(
      this.eventId,
      this.category
    );
  }
}
