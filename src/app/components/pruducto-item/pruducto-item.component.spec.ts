import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruductoItemComponent } from './pruducto-item.component';

describe('PruductoItemComponent', () => {
  let component: PruductoItemComponent;
  let fixture: ComponentFixture<PruductoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PruductoItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruductoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
