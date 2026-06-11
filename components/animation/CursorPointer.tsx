'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const CursorPointer = () => {
  const pointerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const pointer = pointerRef.current
    if (!pointer || window.innerWidth < 1023) return

    const setPosition = gsap.quickSetter(pointer, 'css')

    const onMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
        width: '14px',
        height: '14px',
      })
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  useEffect(() => {
    const pointer = pointerRef.current
    if (!pointer) return

    pointer.style.display = window.innerWidth >= 1023 ? 'block' : 'none'

    const onResize = () => {
      pointer.style.display = window.innerWidth >= 1023 ? 'block' : 'none'
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return <div ref={pointerRef} className="pointer" />
}

export default CursorPointer
