export * from "./array";
export * from "./element";
export * from "./evaluation";
export * from "./geospatial";
export * from "./logical";
export * from "./comparison";

import { FieldExpression, RootExpression } from "../expression";
import { EvaluationOperators } from "./evaluation";
import { LogicalOperators } from "./logical";

/**
 * Query filtering conditions based on document schema interface
 */
export type QueryConditions<T extends {}> = RootExpression<T> & FieldExpression<T>;

/**
 * Projections based on document schema interface
 */
export type QueryProjection<T> = { _id?: number } & { [K in keyof T]?: number; };
