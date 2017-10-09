import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketSuggestionsComponent } from './ticket-suggestions/ticket-suggestions.component';
import { TicketTypeItemComponent } from './ticket-type-item/ticket-type-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TicketSuggestionsComponent, TicketTypeItemComponent],
  exports: [TicketSuggestionsComponent, TicketTypeItemComponent]
})
export class ShopComponentsModule {}
