import { useState } from 'react'

export function useTextState(initialText: string) {
  const [text, setText] = useState(initialText)
  const [selectedText, setSelectedText] = useState(initialText)

  const handleTextSelect = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const selected = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)
    setSelectedText(selected)
  }

  const handleFocus = () => {
    if (text === 'Enter email...') {
      setText('')
    } else if (text.trim() === '') {
      setText('Enter email...')
    }
  }
  return { text, setText, selectedText, setSelectedText, handleTextSelect, handleFocus }
}