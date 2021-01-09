import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PagesModule } from './pages/pages.module';
import * as dotenv from 'dotenv';


dotenv.config();

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.setGlobalPrefix(`api/${process.env.API_VERSION}`);
  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
                  .setTitle('Pagination API')
                  .setDescription('Modules for testing pagination API V1')
                  .setVersion(process.env.VERSION)
                  .addTag('Test API')
                  .build();

  
  const appDocument = SwaggerModule.createDocument(app, options, {
    include: [
      PagesModule
    ]
  }
  );

  SwaggerModule.setup('api', app, appDocument);


  await app.listen(PORT);
}
bootstrap();
