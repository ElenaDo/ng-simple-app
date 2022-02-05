
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryListItem } from './brewery-list-item.component';

describe('BreweryListItem', () => {
  let component: BreweryListItem;
  let fixture: ComponentFixture<BreweryListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweryListItem ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryListItem);
    component = fixture.componentInstance;
    component.brewery = {name: 'MultiBrew', country: 'Germany', city: 'Berlin', id: '123', favourite: false};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
