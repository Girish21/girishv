---
title: Intersection Observer Hook
description: A React friendly declarative hook that uses the Intersection Observer API.
tags: ['react', 'hooks']
published: false
createdAt: 11/25/2023
updatedAt: 11/25/2023
---

_tldr;_

```tsx
import * as React from 'react'

export function useIntersection(
  cb: (entry: IntersectionObserverEntry) => void,
  {
    root = null,
    rootMargin = '0px',
    threshold = 0
  }: IntersectionObserverInit = {}
) {
  const elementRef = React.useRef<HTMLElement>(null)
  const callbackRef = React.useRef(cb)

  React.useEffect(() => {
    callbackRef.current = cb
  }, [cb])

  React.useEffect(() => {
    const element = elementRef.current

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          callbackRef.current(entry)
        })
      },
      {
        root,
        rootMargin,
        threshold
      }
    )
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [cb, root, rootMargin, threshold])

  return elementRef
}
```

> [!WARN]
> This hook is _heavily_ inspired by Dan Abramov's `useInterval` hook. You can find his blog post going over the details [here](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)

This hook is a React friendly declarative hook that uses the Intersection Observer API. It's useful for lazy loading images, infinite scrolling, and more. It's also a great example of how to use the Intersection Observer API in React.
