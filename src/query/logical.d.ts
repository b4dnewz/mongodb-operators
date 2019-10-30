import { FieldExpression } from "../expression";

export interface LogicalOperators<T> {
    $and?: Array<FieldExpression<T>>;
    $not?: FieldExpression<T>;
    $or?: Array<FieldExpression<T>>;
    $nor?: Array<FieldExpression<T>>;
}
