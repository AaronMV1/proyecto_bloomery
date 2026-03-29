import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPublic } from './content-public';

describe('ContentPublic', () => {
  let component: ContentPublic;
  let fixture: ComponentFixture<ContentPublic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentPublic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPublic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
