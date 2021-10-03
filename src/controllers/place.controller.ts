import {
  JsonController,
  Body,
  Param,
  Post,
  BadRequestError,
  Get,
} from "routing-controllers";
import { Service } from "typedi";
import { Place } from "../entities/place.entity";
import { PlaceDTO } from "../dto/PlaceDTO";
import { PlaceService } from "../services/place.service";
import { InsertResult } from "typeorm";
import { EntityMapper } from "../utils/mapper.service";

@JsonController("/place")
@Service()
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Get()
  async getPlaces(): Promise<Place[]> {
    return this.placeService.getPlaces();
  }

  @Post()
  async postPlace(@Body() placeDTO: PlaceDTO): Promise<InsertResult> {
    try {
      return await this.placeService.createPlace(
        EntityMapper.mapTo(Place, placeDTO)
      );
    } catch (err: any) {
      throw new BadRequestError(err.detail ?? err.message ?? "Specific Error");
    }
  }
}
