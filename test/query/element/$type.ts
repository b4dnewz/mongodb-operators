import { BSONTypes, QueryConditions } from "@/index";

interface Test {
    field1: boolean;
    field2: number;
    field3: string;
}

const query: QueryConditions<Test> = {
    field1: { $type: 8 },
    field2: { $type: "int" },
    field3: { $type: BSONTypes.string },
};
