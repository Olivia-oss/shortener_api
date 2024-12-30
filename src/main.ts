import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  //const baseURL = 'http://localhost:5173';
  const baseURL = 'https://leafy-tanuki-49e258.netlify.app';

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: baseURL,
    methods: 'GET,POST',
    optionsSuccessStatus: 200,
  });

  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Api shortener')
    .setDescription('Docoment Api')
    .setVersion('1.0')
    .addTag('Shoerner')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
