import { Component, Input } from '@angular/core';
import { TicketType } from '@app/types';

@Component({
  selector: 'app-ticket-type-item',
  templateUrl: './ticket-type-item.component.html',
  styleUrls: ['./ticket-type-item.component.css']
})
export class TicketTypeItemComponent {
  @Input() ticketType: TicketType;

  constructor() {}
}
