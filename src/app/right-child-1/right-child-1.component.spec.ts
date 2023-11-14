import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightChild1Component } from './right-child-1.component';

describe('RightChild1Component', () => {
  let component: RightChild1Component;
  let fixture: ComponentFixture<RightChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightChild1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
