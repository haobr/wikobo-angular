import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserUpdateTruyenComponent } from './inser-update-truyen.component';

describe('InserUpdateTruyenComponent', () => {
  let component: InserUpdateTruyenComponent;
  let fixture: ComponentFixture<InserUpdateTruyenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserUpdateTruyenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserUpdateTruyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
