import { useQuery } from '@tanstack/react-query'
import { emailService } from '@services/email-service'

// useEmailList.ts
export const useEmailList = () => {
  return useQuery({
    queryKey: ['email list'],
    queryFn: () => emailService.getEmails(),
  })
}
