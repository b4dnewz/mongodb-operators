import { QueryConditions } from "@/index";

interface Test {
    field: string;
}

const query: QueryConditions<Test> = {
    field: { $exists: true },
};
