  import { applyStyle, TStyle } from '@utils/apply-style'

  export function useTextStyle(text: string, setText: (text: string) => void) {
    const handleStyle = (style: TStyle, selectedText: string) => {
      if (selectedText.trim()) {
        const formattedText = applyStyle(style, selectedText)
        setText(text.replace(selectedText, formattedText))
        // setSelectedText('')
      }
    }
    return { handleStyle }
}
  