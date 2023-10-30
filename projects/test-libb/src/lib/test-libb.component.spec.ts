import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLibbComponent } from './test-libb.component';

describe('TestLibbComponent', () => {
  let component: TestLibbComponent;
  let fixture: ComponentFixture<TestLibbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestLibbComponent]
    });
    fixture = TestBed.createComponent(TestLibbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
