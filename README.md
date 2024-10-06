<br />
<br />

<h1 align="center">useDepsChange Hook</h1>
<p align="center">React hook to log the change of the state for development purpose.</p>
<p align="center">
  <a href="https://www.npmjs.com/package/use-deps-change-hook" target="_blank">
    <img src="https://img.shields.io/npm/v/use-deps-change-hook.svg?style=for-the-badge&label=Latest&color=black" alt="Package version" />
  </a>
</p>

<p align="center">
  <image src="./image.png" width="400" />
</p>

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
