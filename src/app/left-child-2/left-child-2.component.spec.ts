import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftChild2Component } from './left-child-2.component';

describe('LeftChild2Component', () => {
  let component: LeftChild2Component;
  let fixture: ComponentFixture<LeftChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftChild2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
