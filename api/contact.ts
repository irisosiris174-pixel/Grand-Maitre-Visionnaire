import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const apiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.FROM_EMAIL || 'contact@grandmaitrevisionnaire.org';
const adminEmail = process.env.ADMIN_EMAIL || 'visionnaire900@gmail.com';

const resend = new Resend(apiKey);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Allow CORS for front-end submissions
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { name, email, phone, subject, message } = req.body || {};

  if (!name || !phone || !subject || !message) {
    return res.status(400).json({ error: 'Veuillez remplir tous les champs obligatoires.' });
  }

  try {
    const data = await resend.emails.send({
      from: `Grand Maître Visionnaire <${fromEmail}>`,
      to: [adminEmail],
      replyTo: email && email.trim() !== '' ? email : undefined,
      subject: `[Nouveau Message Web] : ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #0b0b0f; color: #ffffff; padding: 30px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid rgba(255,255,255,0.1);">
          <h2 style="color: #c1121f; border-bottom: 2px solid #c1121f; padding-bottom: 10px; margin-top: 0;">
            Nouvelle Demande de Contact
          </h2>
          <p style="font-size: 15px; color: #dddddd;">
            Vous avez reçu un nouveau message depuis le site web <strong>Grand Maître Visionnaire</strong> :
          </p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 14px; color: #eeeeee;">
            <tr style="border-bottom: 1px solid #222;">
              <td style="padding: 10px; font-weight: bold; width: 140px; color: #aaaaaa;">Nom complet :</td>
              <td style="padding: 10px; font-weight: bold; color: #ffffff;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #222;">
              <td style="padding: 10px; font-weight: bold; color: #aaaaaa;">Email :</td>
              <td style="padding: 10px;">${email ? `<a href="mailto:${email}" style="color: #c1121f;">${email}</a>` : 'Non renseigné'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #222;">
              <td style="padding: 10px; font-weight: bold; color: #aaaaaa;">Téléphone / WhatsApp :</td>
              <td style="padding: 10px; font-weight: bold; color: #25D366;">${phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #222;">
              <td style="padding: 10px; font-weight: bold; color: #aaaaaa;">Sujet :</td>
              <td style="padding: 10px;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top: 25px; padding: 15px; background-color: #14141c; border-left: 4px solid #c1121f; border-radius: 6px;">
            <h3 style="margin-top: 0; color: #ffffff; font-size: 14px; text-transform: uppercase;">Message :</h3>
            <p style="line-height: 1.6; color: #e0e0e0; white-space: pre-wrap; margin-bottom: 0;">${message}</p>
          </div>

          <p style="margin-top: 30px; font-size: 12px; color: #888888; text-align: center;">
            Cet e-mail a été envoyé automatiquement via Resend depuis votre site grandmaitrevisionnaire.org.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('Erreur d\'envoi Resend:', error);
    return res.status(500).json({ error: 'Échec de l\'envoi de l\'email.', details: error?.message || String(error) });
  }
}
