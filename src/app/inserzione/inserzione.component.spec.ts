import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserzioneComponent } from './inserzione.component';

describe('InserzioneComponent', () => {
  let component: InserzioneComponent;
  let fixture: ComponentFixture<InserzioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InserzioneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InserzioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
