import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftChild1Component } from './left-child-1.component';

describe('LeftChild1Component', () => {
  let component: LeftChild1Component;
  let fixture: ComponentFixture<LeftChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftChild1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
