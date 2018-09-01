import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingcontentComponent } from './readingcontent.component';

describe('ReadingcontentComponent', () => {
  let component: ReadingcontentComponent;
  let fixture: ComponentFixture<ReadingcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
