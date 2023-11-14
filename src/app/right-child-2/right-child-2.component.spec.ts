import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightChild2Component } from './right-child-2.component';

describe('RightChild2Component', () => {
  let component: RightChild2Component;
  let fixture: ComponentFixture<RightChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightChild2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
