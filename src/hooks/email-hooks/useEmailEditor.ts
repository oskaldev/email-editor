// hooks/useEmailEditor.ts

import { useEmailMutation } from './useEmailMutation'
import { useTextState } from './useTextState'
import { useTextStyle } from './useTextStyle'

export function useEmailEditor() {
  const { text, setText, selectedText, handleTextSelect, handleFocus } = useTextState('Enter email...')
  const { handleStyle } = useTextStyle(text, setText)
  const { mutate } = useEmailMutation(() => setText(''))

  const handleSend = () => {
    if (text.trim()) {
      mutate(text)
    }
  }

  return { text, setText, selectedText, handleTextSelect, handleFocus, handleStyle, handleSend }
}
