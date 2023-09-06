import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';
@Injectable()
export class DiskService {
    constructor(private powerService: PowerService){}

    storage(){
        console.log(`Drawing 20 watts of power from Power Service`);
        return 'data';
    }
}
