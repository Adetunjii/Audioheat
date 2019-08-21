import { TestBed } from '@angular/core/testing';

import { MusicRouteActivatorService } from './music-route-activator.service';

describe('MusicRouteActivatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicRouteActivatorService = TestBed.get(MusicRouteActivatorService);
    expect(service).toBeTruthy();
  });
});
