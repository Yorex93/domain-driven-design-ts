# Value Objects

A Value Object is an immutable type that is distinguishable only by the state of its properties. That is, unlike an Entity, which has a unique identifier and remains distinct even if its properties are otherwise identical, two Value Objects with the exact same properties can be considered equal.

## Example

```javascript
import { Money } from "./money";

const loanAmount = Money.of(1000, "NGN");
const repaymentAmount = Money.of(1200, "NGN");

console.log(loanAmount.equals(repaymentAmount)); //false
```
