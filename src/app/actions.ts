'use server';

import { Resend } from 'resend';

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
    const resend = new Resend(process.env.RESEND_API_KEY);

    const productList = data.products.length > 0
      ? data.products.join(', ')
      : '미선택';

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #1a1a0e, #2a2a14); padding: 32px; text-align: center; }
          .header h1 { color: #c9a84c; margin: 0; font-size: 1.5rem; }
          .header p { color: #a09880; margin: 8px 0 0; font-size: 0.9rem; }
          .badge { background: rgba(201,168,76,0.2); border: 1px solid #c9a84c; color: #c9a84c; padding: 4px 16px; border-radius: 99px; display: inline-block; margin-top: 12px; font-size: 0.85rem; }
          .content { padding: 32px; }
          .section-title { font-size: 0.8rem; color: #999; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px; margin-top: 28px; }
          .info-row { display: flex; border-bottom: 1px solid #f0f0f0; padding: 12px 0; }
          .info-label { color: #666; min-width: 120px; font-size: 0.9rem; }
          .info-value { color: #1a1a1a; font-weight: 600; font-size: 0.9rem; }
          .product-tag { background: #f8f0dc; border: 1px solid #e8c97a; color: #8a6a00; padding: 4px 14px; border-radius: 99px; font-size: 0.85rem; display: inline-block; margin: 3px; }
          .message-box { background: #f9f9f9; border-left: 4px solid #c9a84c; padding: 16px; border-radius: 0 8px 8px 0; font-size: 0.9rem; color: #333; line-height: 1.7; margin-top: 8px; }
          .footer { background: #f9f9f9; padding: 20px 32px; text-align: center; font-size: 0.8rem; color: #999; border-top: 1px solid #eee; }
          .cta-btn { display: inline-block; background: linear-gradient(135deg, #c9a84c, #e8c97a); color: #1a1a0e; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 700; margin: 16px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>👑 QUEENS PILATES</h1>
            <p>새로운 견적 요청이 도착했습니다</p>
            <span class="badge">즉시 연락 권장</span>
          </div>
          <div class="content">
            <div class="section-title">고객 정보</div>
            <div class="info-row">
              <span class="info-label">담당자명</span>
              <span class="info-value">${data.name}</span>
            </div>
            <div class="info-row">
              <span class="info-label">연락처</span>
              <span class="info-value"><a href="tel:${data.phone}" style="color:#c9a84c">${data.phone}</a></span>
            </div>
            ${data.email ? `<div class="info-row"><span class="info-label">이메일</span><span class="info-value">${data.email}</span></div>` : ''}
            ${data.studioName ? `<div class="info-row"><span class="info-label">스튜디오명</span><span class="info-value">${data.studioName}</span></div>` : ''}

            <div class="section-title">관심 기구</div>
            <div style="padding: 8px 0;">
              ${data.products.map(p => `<span class="product-tag">📦 ${p}</span>`).join('')}
              ${data.products.length === 0 ? '<span style="color:#999">미선택</span>' : ''}
            </div>

            ${data.quantity ? `
            <div class="section-title">예상 수량</div>
            <div class="info-row">
              <span class="info-value">${data.quantity}</span>
            </div>` : ''}

            ${data.message ? `
            <div class="section-title">추가 문의사항</div>
            <div class="message-box">${data.message.replace(/\n/g, '<br>')}</div>` : ''}

            <div style="text-align: center; margin-top: 32px; padding-top: 24px; border-top: 1px solid #f0f0f0;">
              <p style="color:#666; font-size:0.9rem; margin-bottom:8px;">빠른 응대로 고객 만족을 높이세요!</p>
              <a href="tel:${data.phone}" class="cta-btn">📞 지금 바로 전화하기</a>
            </div>
          </div>
          <div class="footer">
            퀸즈필라테스 공식 홈페이지 견적 요청 시스템 • 수신: leesookil75@gmail.com
          </div>
        </div>
      </body>
      </html>
    `;

    await resend.emails.send({
      from: 'Queens Pilates <onboarding@resend.dev>',
      to: ['leesookil75@gmail.com'],
      subject: `[퀸즈필라테스] 새 견적 요청 — ${data.name}${data.studioName ? ` (${data.studioName})` : ''}`,
      html: emailHtml,
    });

    // Also send confirmation to customer if they provided email
    if (data.email) {
      try {
        await resend.emails.send({
          from: 'Queens Pilates <onboarding@resend.dev>',
          to: [data.email],
          subject: '[퀸즈필라테스] 견적 요청이 정상적으로 접수되었습니다',
          html: `
            <div style="font-family: 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif; max-width: 500px; margin: 0 auto; padding: 32px; background: #0d0d0d; color: #f5f0e8; border-radius: 12px;">
              <h1 style="color: #c9a84c; margin-bottom: 8px;">👑 퀸즈필라테스</h1>
              <p style="color: #a09880; margin-top: 0;">안녕하세요, <strong style="color:#f5f0e8">${data.name}</strong>님!</p>
              <p style="line-height: 1.8; color: #c8c0b0;">
                견적 요청이 정상적으로 접수되었습니다.<br>
                담당자가 빠른 시일 내에 <strong style="color:#c9a84c">${data.phone}</strong>으로 연락드리겠습니다.
              </p>
              <div style="background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.3); border-radius: 8px; padding: 16px; margin: 24px 0;">
                <p style="margin: 0; font-size: 0.9rem; color: #a09880;">문의하신 기구: <strong style="color:#c9a84c">${productList}</strong></p>
              </div>
              <p style="font-size: 0.85rem; color: #666;">긴급 문의: <a href="tel:01035208808" style="color:#c9a84c">010-3520-8808</a></p>
            </div>
          `,
        });
      } catch (customerEmailError) {
        console.error('Customer email sending failed (Free tier restriction):', customerEmailError);
        // 무료 요금제에서는 본인 계정으로만 메일이 발송되므로, 고객에게 발송 실패해도 전체 접수를 중단시키지 않음
      }
    }

    return { success: true };
  } catch (error: any) {
    console.error('Quote submission error:', error);
    return { success: false, error: '견적 요청 중 오류가 발생했습니다. 전화로 문의해 주세요.' };
  }
}
