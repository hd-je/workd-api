import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ CORS 허용 설정 추가
  app.enableCors({
    origin: ['http://localhost:3000'], // 리액트 개발 서버 주소
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // 인증(쿠키 등) 필요 시 true
  });

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
