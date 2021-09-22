import { IsNotEmpty, IsString, IsUUID, IsNumber } from 'class-validator';

class PlaceToStay {
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    id: string;

    @IsString()
    @IsNotEmpty()
    slug: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    country?: string;

    @IsNumber()
    starRating?: number;

    @IsString()
    @IsNotEmpty()
    category: string;
};