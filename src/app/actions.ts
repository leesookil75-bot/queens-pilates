'use server';

export async function submitQuoteRequest(data: {
  name: string;
  phone: string;
  email?: string;
  studioName?: string;
  products: string[];
  quantity?: string;
  message?: string;
}) {
  try {
    // For now, log the request (you'll add Resend/email integration here)
    console.log('Quote request received:', data);
    
    // In production, you would use Resend or Nodemailer here:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@queenspilates.co.kr',
    //   to: 'mubin95@hanmail.net',
    //   subject: `[퀸즈필라테스] 견적 요청 - ${data.name}`,
    //   html: `...`
    // });
    
    return { success: true };
  } catch (error) {
    console.error('Quote submission error:', error);
    return { success: false, error: '견적 요청 중 오류가 발생했습니다.' };
  }
}
