<br />
<br />

<h1 align="center">useDepsChange</h1>

<p align="center">
  <image src="./image.png" width="400" />
</p>

- Log the change of the state for development purpose.

<br />

## Usage

```jsx
import React, { useState } from "react"
import { useDepsChange } from "use-deps-change-hook"

const Component = () => {
  const [counter, setCounter] = useState(0)

  useDepsChange({ counter })

  return (
    <button onClick={() => setCounter((prev) => prev + 1)}>Component</button>
  )
}
```
