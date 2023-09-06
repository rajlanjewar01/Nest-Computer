import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    //sample method
    supplyPower(watts: number){
        console.log(`Supplying ${watts} watts worth of power`);
    }
}
