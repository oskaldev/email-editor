import { applyStyle, TStyle } from '@utils/apply-style'

export const useTextFormatting = (
  text: string,
  setText: (text: string) => void,
  selectionStart: number,
  selectionEnd: number,
) => {
  const applyFormat = (type: TStyle) => {
    const selectedText = text.substring(selectionStart, selectionEnd)
    if (!selectedText) return
    const before = text.substring(0, selectionStart)
    const after = text.substring(selectionEnd)
    setText(before + applyStyle(type, selectedText) + after)
  }

  return { applyFormat }
}
