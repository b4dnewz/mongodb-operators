import { BSONTypes } from "../types";

export interface ElementOperators {
    $exists?: boolean;
    $type?: BSONTypes | BSONTypes[];
}
