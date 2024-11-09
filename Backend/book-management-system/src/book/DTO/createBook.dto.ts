import { IsString, IsNotEmpty} from "class-validator";

export class createBook {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    author: string;

    @IsNotEmpty()
    publishedDate: Date;

    @IsString()
    description?: string;

  
}