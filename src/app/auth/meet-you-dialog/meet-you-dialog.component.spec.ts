import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetYouDialogComponent } from './meet-you-dialog.component';

describe('MeetYouDialogComponent', () => {
  let component: MeetYouDialogComponent;
  let fixture: ComponentFixture<MeetYouDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetYouDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetYouDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
