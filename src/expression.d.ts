import {
    ArrayOperators,
    ElementOperators,
    EvaluationOperators,
    GeoSpatialOperators,
    LogicalOperators,
    QuerySelectors,
} from "./query";

export type Expression<T, V> = QuerySelectors<V> | ElementOperators | GeoSpatialOperators | ArrayOperators<T>;

export type FieldExpression<T> = {
    [K in keyof T]?: T[K] | Expression<T, T[K]>;
};

export type RootExpression<T> = Pick<LogicalOperators<T>, "$and"> & EvaluationOperators<T>;
