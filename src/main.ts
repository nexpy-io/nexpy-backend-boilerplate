/* eslint-disable import-helpers/order-imports */
import * as dotenv from 'dotenv'

dotenv.config()

import helmet from 'helmet'

import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { APP_RUNTIME_PORT } from './environment'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.use(helmet())

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  )

  app.enableCors()

  await app.listen(APP_RUNTIME_PORT, () => {
    console.info(`Application is running on: ${APP_RUNTIME_PORT}`)
  })
}

bootstrap()
