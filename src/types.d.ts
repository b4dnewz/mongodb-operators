import { FieldExpression, RootExpression } from "./expression";
import { EvaluationOperators } from "./query/evaluation";
import { LogicalOperators } from "./query/logical";

export enum BSONTypes {
    "Double",
    "String",
    "Object",
}

export type QueryConditions<T extends {}> = RootExpression<T> & FieldExpression<T>;
