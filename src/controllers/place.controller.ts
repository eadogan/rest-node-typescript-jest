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

@JsonController("/api")
@Service()
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Post("/place-to-stays/ingest")
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
