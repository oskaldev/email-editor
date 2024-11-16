import { useEmailMutation } from './useEmailMutation'
import { useTextFormatting } from './useTextEditor'
import { useTextEditor } from './useTextFormatting'


export const useEmailEditor = () => {
  const {
    text,
    setText,
    textRef,
    selectionStart,
    selectionEnd,
    updateSelection,
  } = useTextEditor()

  const { applyFormat } = useTextFormatting(text, setText, selectionStart, selectionEnd)

  const { mutate, isPending } = useEmailMutation(text, () => setText(''))

  return {
    text,
    setText,
    textRef,
    isPending,
    mutate,
    updateSelection,
    applyFormat,
  }
}
