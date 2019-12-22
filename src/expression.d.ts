import {
    ArrayOperators,
    ComparisonOperators,
    ElementOperators,
    EvaluationOperators,
    GeoSpatialOperators,
    LogicalOperators,
    TopLevelLogicalOperators,
} from "./query";

/**
 * Expression that uses only operators as keys
 */
export type OperatorExpression<T> = ComparisonOperators
    | ElementOperators
    | GeoSpatialOperators
    | ArrayOperators<T>
    | LogicalOperators<T>;

/**
 * Expression that can be assigned to a interface field
 */
export type FieldExpression<T> = {
    [K in keyof T]?: T[K] | OperatorExpression<T>;
};

/**
 * Generic expression that can contain both fields and operators
 */
export type Expression<T> = FieldExpression<T> & OperatorExpression<T>;

/**
 * Top level expression
 */
export type RootExpression<T> = FieldExpression<T> & TopLevelLogicalOperators<T> & EvaluationOperators<T>;
