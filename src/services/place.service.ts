import { Service } from "typedi";
import { getMongoRepository, MongoRepository } from "typeorm";
import { Place } from "../entities/place.entity";

@Service()
export class PlaceService {
  private readonly placeRepository: MongoRepository<Place> =
    getMongoRepository<Place>(Place);

  createPlace(place: Place) {
    return this.placeRepository.insert(place);
  }
}
