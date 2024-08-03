import { Module } from '@nestjs/common'
import { IndexController } from './index.controller'
import { IndexService } from './index.service'
import { Heartbeat } from './heartbeat.controller'

@Module({
  controllers: [IndexController, Heartbeat],
  providers: [IndexService],
})
export class IndexModule {}
