// eslint-disable-next-line import-helpers/order-imports
import * as dotenv from 'dotenv'

dotenv.config()

import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'
import { APP_RUNTIME_PORT } from './environment'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  )

  await app.listen(APP_RUNTIME_PORT, () => {
    console.info(`Application is running on: ${APP_RUNTIME_PORT}`)
  })
}

bootstrap()
