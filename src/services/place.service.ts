import { BadRequestError } from "routing-controllers";
import { Service } from "typedi";
import { getMongoRepository, MongoRepository } from "typeorm";
import { Place } from "../entities/place.entity";

@Service()
export class PlaceService {
  constructor() {}

  private readonly placeRepository: MongoRepository<Place> =
    getMongoRepository<Place>(Place);

  getPlaces() {
    return this.placeRepository.find();
  }

  createPlace(place: Place) {
    try {
      return this.placeRepository.insert(place);
    } catch (err) {
      throw new BadRequestError(
        err.detail ?? err.message ?? "Service: Specific Error"
      );
    }
  }
}
