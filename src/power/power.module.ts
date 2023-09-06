import { Module } from '@nestjs/common';
import { PowerService } from './power.service';
import { PowerController } from './power.controller';

@Module({
  providers: [PowerService],
  /**
   * DI between modules
   * step 1:
   * add PowerService to the PowerModule's list of exports
   */
  exports: [PowerService],
  controllers: [PowerController]
})
export class PowerModule {}
