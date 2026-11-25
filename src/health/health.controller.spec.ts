import { HealthController } from './health.controller.js';

describe('Health Controller', () => {
  it('should report the application is healthy', () => {
    const controller = new HealthController();

    const result = controller.check();

    expect(result.status).toBe('ok');
    expect(result.uptimeInSeconds).toBeGreaterThanOrEqual(0);
  });
});
