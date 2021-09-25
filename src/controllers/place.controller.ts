import { JsonController, Body, Post, BadRequestError } from 'routing-controllers';
import { Service } from 'typedi';
import { Place } from '../entities/place.entity';
import { PlaceService } from '../services/place.service';

@JsonController('/api')
@Service()
export class PlaceController {

    constructor(
        private readonly placeService: PlaceService,
    ) {}
        


    @Post('/place-to-stays/ingest')
    async postPlace(@Body() place: Place): Promise<Place | undefined | any> {
        try {
            return await this.placeService.createPlace(place);
        } catch (err: any) {
            throw new BadRequestError(
                err.detail ?? err.message ?? 'Specific Error'
            );
        }
    }

}