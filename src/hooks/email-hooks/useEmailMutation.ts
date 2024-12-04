import { useMutation, useQueryClient } from '@tanstack/react-query'
import { emailService } from '@services/email-service'

export function useEmailMutation(onSuccessCallback: () => void) {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (emailText: string) => emailService.sendEmails(emailText),
    onSuccess: () => {
      onSuccessCallback()
      queryClient.invalidateQueries({ queryKey: ['email list'] })
    },
    onError: error => {
      console.error('Ошибка при отправке:', error)
    },
  })
  return { mutate }
}