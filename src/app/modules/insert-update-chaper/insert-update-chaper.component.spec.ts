import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertUpdateChaperComponent } from './insert-update-chaper.component';

describe('InsertUpdateChaperComponent', () => {
  let component: InsertUpdateChaperComponent;
  let fixture: ComponentFixture<InsertUpdateChaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertUpdateChaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertUpdateChaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
