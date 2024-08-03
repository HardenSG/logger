import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { IndexModule } from './modules/config/index.module'
import { LoggerMiddleware } from './core/middleware/logger'
// import { ClientsModule, Transport } from '@nestjs/microservices'
// import { TypeOrmModule } from '@nestjs/typeorm'
// import { loadConfig } from './config'

@Module({
  imports: [IndexModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({
        path: '*',
        method: RequestMethod.OPTIONS,
      })
      .forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      })
  }
}
