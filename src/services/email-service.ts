import { IEmail } from '../types/email'
import axios from 'axios'


class EmailService {
  private URL = 'http://localhost:3000/emails'

  async getEmails() {
    const { data } = await axios.get<IEmail[]>(this.URL)
    return data
  }

  async sendEmails(text: string) {
    const { data } = await axios.post<IEmail[]>(this.URL, {
      text
    })
    return data
  }
}
export const emailService = new EmailService()