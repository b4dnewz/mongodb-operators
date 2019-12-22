// TODO: Conditional type based on input
// @see: https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types

export interface ComparisonOperators {
    $eq?: any;
    $ne?: any;
    $gt?: any;
    $gte?: any;
    $lt?: any;
    $lte?: any;
    $in?: any[];
    $nin?: any[];
}
