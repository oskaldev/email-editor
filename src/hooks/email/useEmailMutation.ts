import { useMutation, useQueryClient } from '@tanstack/react-query'
import { emailService } from '@services/email-service'

export const useEmailMutation = (text: string, resetText: () => void) => {
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationKey: ['create email'],
    mutationFn: () => emailService.sendEmails(text),
    onSuccess: () => {
      resetText()
      queryClient.refetchQueries({ queryKey: ['email list'] })
    },
  })

  return { mutate, isPending }
}
