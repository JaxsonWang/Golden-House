import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Device } from './device.entity'
import { DevicesController } from './devices.controller'
import { DevicesService } from './devices.service'

@Module({
  imports: [TypeOrmModule.forFeature([Device])],
  providers: [DevicesService],
  exports: [DevicesService],
  controllers: [DevicesController]
})
export class DevicesModule {}
