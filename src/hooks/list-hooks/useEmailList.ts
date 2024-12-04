import { emailService } from '@services/email-service'
import { useQuery } from '@tanstack/react-query'

export const useEmailList = () => {
  return useQuery({
    queryKey: ['email list'],  // Ключ для идентификации запроса
    queryFn: () => emailService.getEmails(),  // Функция, которая выполняет запрос
  })
};

