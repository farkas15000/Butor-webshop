import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermekleirasComponent } from './termekleiras.component';

describe('TermekleirasComponent', () => {
  let component: TermekleirasComponent;
  let fixture: ComponentFixture<TermekleirasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermekleirasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermekleirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
