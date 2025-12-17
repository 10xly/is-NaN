# is NaN?

Check if value is NaN

## Example

```js
var isNaN = require('@is-(unknown)/is-nan')
var assert = require('assert-fn')

assert.notOk = x => assert(!x)
assert.ok = x => assert(x)

assert.notOk(isNaN(undefined))
assert.notOk(isNaN(null))
assert.notOk(isNaN(false))
assert.notOk(isNaN(true))
assert.notOk(isNaN(0))
assert.notOk(isNaN(42))
assert.notOk(isNaN(Infinity))
assert.notOk(isNaN(-Infinity))
assert.notOk(isNaN('foo'))
assert.notOk(isNaN(function () {}))
assert.notOk(isNaN([]))
assert.notOk(isNaN({}))

assert.ok(isNaN(NaN))
```
