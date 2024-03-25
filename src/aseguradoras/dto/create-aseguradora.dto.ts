import { IsNotEmpty } from "class-validator";

export class CreateAseguradoraDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    logo: string;

    @IsNotEmpty()
    description: string;
}
