import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const baseURL = 'https://leafy-tanuki-49e258.netlify.app';

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: baseURL,
    methods: 'GET,POST',
    optionsSuccessStatus: 200,
  });

  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
