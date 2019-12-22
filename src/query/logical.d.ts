import { Expression, OperatorExpression } from "../expression";

export interface LogicalOperators<T> {
    $not?: OperatorExpression<T>;
    $and?: Array<Expression<T>>;
    $or?: Array<Expression<T>>;
    $nor?: Array<Expression<T>>;
}

export type TopLevelLogicalOperators<T> = Omit<LogicalOperators<T>, "$not">;
