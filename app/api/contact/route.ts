import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nom, prenom, email, objet, type, societe, message } = await req.json();

    // Vérifier les variables d'environnement
    if (!process.env.RESEND_API_KEY || !process.env.MAIL_TO) {
      console.error("Variables d'environnement manquantes:", {
        RESEND_API_KEY: !!process.env.RESEND_API_KEY,
        MAIL_TO: !!process.env.MAIL_TO
      });
      return NextResponse.json({ 
        success: false, 
        error: "Configuration email manquante" 
      }, { status: 500 });
    }

    console.log("Envoi de l'email via Resend...");

    const htmlEmail = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nouveau message de contact</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0; }
          .info-item { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #667eea; }
          .message-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e9ecef; }
          .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
          .value { margin-bottom: 15px; }
          .footer { text-align: center; margin-top: 30px; color: #6c757d; font-size: 14px; }
          @media (max-width: 600px) {
            .info-grid { grid-template-columns: 1fr; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📧 Nouveau message de contact</h1>
            <p>Vous avez reçu un nouveau message via votre formulaire de contact</p>
          </div>
          
          <div class="content">
            <div class="info-grid">
              <div class="info-item">
                <div class="label">👤 Nom complet</div>
                <div class="value">${prenom} ${nom}</div>
              </div>
              <div class="info-item">
                <div class="label">📧 Email</div>
                <div class="value">${email}</div>
              </div>
              <div class="info-item">
                <div class="label">📋 Type de contact</div>
                <div class="value">${type === "boite" ? "Entreprise" : "Personnel"}</div>
              </div>
              ${societe ? `
              <div class="info-item">
                <div class="label">🏢 Société</div>
                <div class="value">${societe}</div>
              </div>
              ` : ''}
            </div>
            
            <div class="message-box">
              <div class="label">📝 Objet</div>
              <div class="value">${objet}</div>
              
              <div class="label">💬 Message</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="footer">
              <p>Ce message a été envoyé depuis votre formulaire de contact</p>
              <p>Pour répondre, utilisez simplement la fonction "Répondre" de votre client email</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Contact <contact@mail.gamearea.fr>',
      to: [process.env.MAIL_TO],
      replyTo: email,
      subject: `Nouveau message: ${objet}`,
      html: htmlEmail,
      text: `Nom: ${nom}\nPrénom: ${prenom}\nEmail: ${email}\nObjet: ${objet}\nType: ${type}\nSociété: ${societe || "-"}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    console.log("Email envoyé avec succès via Resend:", data?.id);
    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (error: any) {
    console.error("Erreur lors de l'envoi d'email:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
} 