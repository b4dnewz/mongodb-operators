import { BSONType } from "../types";

export interface ElementOperators {
    $exists?: boolean;
    $type?: BSONType | BSONType[];
}
