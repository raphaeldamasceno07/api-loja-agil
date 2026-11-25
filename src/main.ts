import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  type NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule, ObserveInstrument } from './app.module.js';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { instrument: ObserveInstrument },
  );

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
await bootstrap();
