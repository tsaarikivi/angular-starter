import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTypeItemComponent } from './ticket-type-item.component';

describe('TicketTypeItemComponent', () => {
  let component: TicketTypeItemComponent;
  let fixture: ComponentFixture<TicketTypeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketTypeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketTypeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
