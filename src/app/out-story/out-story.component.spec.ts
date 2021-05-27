import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutStoryComponent } from './out-story.component';

describe('OutStoryComponent', () => {
  let component: OutStoryComponent;
  let fixture: ComponentFixture<OutStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
