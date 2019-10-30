# mongodb-operators

> TypeScript definitions for MongoDB operators 

## Installation

Download it using you favourite package manager.

```
npm i -D @b4dnewz/mongodb-operators
```

Load the interfaces in your source files.

```typescript
import {QueryConditions} from "@b4dnewz/mongodb-operators"

interface IUser {
    username: string
    email: string
    available: boolean
}

const query: QueryConditions<IUser> = {
    // benefit from suggestions
}
```

---

## License

This project is released under [MIT License](./LICENSE) from [Filippo Conti](https://b4dnewz.github.io/)