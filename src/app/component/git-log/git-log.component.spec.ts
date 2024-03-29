import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { GitLogComponent } from './git-log.component';

describe('GitLogComponent', () => {
  let component: GitLogComponent;
  let fixture: ComponentFixture<GitLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GitLogComponent],
      imports: [RouterTestingModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
