import { Controller } from '@nestjs/common'
import { MessagePattern, Payload } from '@nestjs/microservices'

@Controller('heartbeat')
export class Heartbeat {
  @MessagePattern('config:heartbeat')
  public heartbeat(@Payload() payload: any) {
    console.log('💗微服务调用成功', payload)
    return 'Hello World'
  }
}
