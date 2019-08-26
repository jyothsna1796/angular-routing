import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyexeComponent } from './proxyexe.component';

describe('ProxyexeComponent', () => {
  let component: ProxyexeComponent;
  let fixture: ComponentFixture<ProxyexeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProxyexeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProxyexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
