/**
 * Not currently used: the contact form it belonged to is not rendered.
 * The matching dev proxy for /lambda lives in vite.config.ts.
 */
export interface EmailPayload {
  name: string;
  email: string;
  content: string;
}

export const sendEmail = async (body: EmailPayload): Promise<unknown> => {
  const response = await fetch('/lambda/prod/email/send', {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Email send failed with status ${response.status}`);
  }

  return response.json();
};
