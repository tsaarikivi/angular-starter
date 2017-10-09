import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSuggestionsComponent } from './ticket-suggestions.component';

describe('TicketSuggestionsComponent', () => {
  let component: TicketSuggestionsComponent;
  let fixture: ComponentFixture<TicketSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
