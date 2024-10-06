import { useEffect, useRef } from "react"

export type UseDepsChangeProps = Record<string, any>

/**
 * A hook for logging the changes of the dependencies. (development only)
 *
 * This hook won't do anything in the production environment.
 * However, it is recommended to remove this hook from the final code.
 */
export const useDepsChange = (depsObject?: UseDepsChangeProps) => {
  if (process.env.NODE_ENV === "production") {
    return
  }

  const depsObjectRef = useRef(depsObject)

  useEffect(() => {
    if (!depsObjectRef.current || !depsObject) {
      return
    }

    const changes = Object.entries(depsObjectRef.current)
      .filter(([key, value]) => depsObject[key] !== value)
      .map(([key, value]) => {
        return {
          key,
          from: value,
          to: depsObject[key]
        }
      })

    if (changes.length > 0) {
      console.group(
        "[useDepsChange]",
        new Date().toLocaleTimeString(),
        changes.map(({ key }) => key).join(", ")
      )
      changes.forEach(({ key, from, to }) => {
        console.log(`%c${key}`, "font-weight: bold;", from, "->", to)
      })
      console.groupEnd()
    }

    depsObjectRef.current = depsObject
  })
}
