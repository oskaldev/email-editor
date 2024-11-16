import { useState, useRef } from 'react'

export const useTextEditor = () => {
  const [text, setText] = useState('Enter email...')
  const [selectionStart, setSelectionStart] = useState(0)
  const [selectionEnd, setSelectionEnd] = useState(0)
  const textRef = useRef<HTMLTextAreaElement | null>(null)

  const updateSelection = () => {
    if (!textRef.current) return
    setSelectionStart(textRef.current.selectionStart)
    setSelectionEnd(textRef.current.selectionEnd)
  }

  return {
    text,
    setText,
    textRef,
    selectionStart,
    selectionEnd,
    updateSelection,
  }
}
