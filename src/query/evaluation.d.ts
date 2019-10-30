import { FieldExpression } from "../expression";

export interface EvaluationOperators<T> {
    $expr?: FieldExpression<T>;
    $regex?: string | RegExp;
    $where?: (this: T) => boolean;
    $text?: {
        $search: string
        $language?: string
        $caseSensitive?: boolean
        $diacriticSensitive?: boolean,
    };
}
