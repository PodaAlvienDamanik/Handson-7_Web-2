import { IsString, isString } from "class-validator";

export class CreateSongDTO{
    @IsString()
    tittle: string;

    @IsString()
    artist: string;
}