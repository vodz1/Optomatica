import { PartialType } from "@nestjs/mapped-types";
import { createBook } from "./createBook.dto";

export class updateBook extends PartialType(createBook){}