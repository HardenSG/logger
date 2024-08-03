import { Controller } from '@nestjs/common'
import { IndexService } from './index.service'
@Controller('config')
export class IndexController {
  constructor(private readonly indexService: IndexService) {}
}
