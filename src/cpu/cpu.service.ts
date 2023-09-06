import { Injectable } from '@nestjs/common';
/**
   * DI between modules
   * step 3:
   * Define the constructor method on CpuService and add 'PowerService' to it
   */
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
    //define constructor
    constructor(private powerService: PowerService) {}

    compute(a: number, b:number){
        //using powerService() methods from Power module
        console.log(`Drawing 10 watts of power from Power Service`);
        this.powerService.supplyPower(10);
        return a + b;
    }
}
