---
title: Focus on Mount
description: A React hook that focuses an element on mount.
tags: ['react', 'hooks']
published: true
created_at: 11/20/2023
updated_at: 11/20/2023
---

sometimes you want to focus an element when it mounts. this is a hook that does that.

```tsx
import * as React from 'react'

export const useFocusOnMount = () => {
  const ref = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    ref.current?.focus()
  }, [])

  return ref
}
```

and i use it like this:

```tsx
export const MyInput = () => {
  const ref = useFocusOnMount()

  return <input ref={ref} />
}
```

## Explanation

This hook is pretty simple. It returns a ref that you can attach to an element. When the element mounts, it will focus the element. This is useful for things like modals, where you want to focus the first input when the modal opens.
