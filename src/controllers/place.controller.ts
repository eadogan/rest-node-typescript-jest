import { Request, Response } from 'express';
import { JsonController, Param, Body, Get, Post, Put, Delete, BadRequestError } from 'routing-controllers';
import { Service } from 'typedi';
import { Place } from '../entities/place.entity';

@JsonController('/api')
@Service()
export class PlaceController {

    constructor(private readonly placeService: any) {}

    @Post()
    async postPlace(@Body() place: Place): Promise<Place | undefined> {
        try {
            return await this.placeService.createPlace(place);
        } catch (err: any) {
            throw new BadRequestError(
                err.detail ?? err.message ?? 'Specific Error'
            );
        }
    }

}