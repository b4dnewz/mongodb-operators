export type BSONType = keyof typeof BSONTypes | BSONTypes;

export enum BSONTypes {
    "double",
    "string",
    "object",
    "array",
    "binData",
    /**
     * @notes: Deprecated
     */
    "undefined",
    "objectId",
    "bool",
    "date",
    "null",
    "regex",
    /**
     * @notes: Deprecated
     */
    "dbPointer",
    "javascript",
    /**
     * @notes: Deprecated
     */
    "symbol",
    "javascriptWithScope",
    "int",
    "timestamp",
    "long",
    /**
     * @notes: New in version 3.4
     */
    "decimal",
    "minKey" = -1,
    "maxKey" = 127,
}
