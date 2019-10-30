import { FieldExpression } from "../expression";

export interface MatchOperators<T> {
    $elemMatch?: FieldExpression<T>;
}

export interface ArrayOperators<T> extends MatchOperators<T> {
    $all?: any[] | Array<MatchOperators<T>>;
    $size?: number;
}
