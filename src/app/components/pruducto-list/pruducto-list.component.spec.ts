import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruductoListComponent } from './producto-list.component';

describe('PruductoListComponent', () => {
  let component: PruductoListComponent;
  let fixture: ComponentFixture<PruductoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PruductoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruductoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
