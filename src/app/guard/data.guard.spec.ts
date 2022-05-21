import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataGuard } from './data.guard';

describe('DataGuard', () => {
  let guard: DataGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    guard = TestBed.inject(DataGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
