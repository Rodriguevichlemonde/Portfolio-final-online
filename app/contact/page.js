'use client'; // Active les interactions côté client

export default function Contact() {
  return (
    <div className="contact-container">
      
      {/* Titre principal */}
      <h1>Kontakt aufnehmen</h1>

      {/* Texte d'introduction */}
      <p>
        Ich bin offen für neue Möglichkeiten als <strong>SAP-Berater</strong> oder für eine <strong>Vollzeitstelle</strong> in einem Unternehmen.
        Zögern Sie nicht, mich zu kontaktieren, wenn Sie Fragen haben oder mit mir zusammenarbeiten möchten.
      </p>

      {/* Informations de contact */}
      <div className="contact-info">
        <div>
          <h3>📍 Adresse</h3>
          <p>Deutschland, Schmalkalden</p>
        </div>

        <div>
          <h3>📞 Telefonnummer</h3>
          <p>+49 176 26412397</p>
        </div>

        <div>
          <h3>📧 E-Mail-Adresse</h3>
          <p>kenkeuro2000@gmail.com</p>
        </div>
      </div>

      {/* Formulaire de contact */}
      <h2>Kontaktformular</h2>
      <form className="contact-form">

        {/* Ligne Nom & Prénom */}
        <div className="form-row">
          <div className="form-group">
            <label>Vorname:</label>
            <input type="text" name="firstname" placeholder="Ihr Vorname" />
          </div>

          <div className="form-group">
            <label>Nachname:</label>
            <input type="text" name="lastname" placeholder="Ihr Nachname" />
          </div>
        </div>

        {/* Ligne Email & Téléphone */}
        <div className="form-row">
          <div className="form-group">
            <label>E-Mail:</label>
            <input type="email" name="email" placeholder="Ihre E-Mail-Adresse" />
          </div>

          <div className="form-group">
            <label>Telefonnummer:</label>
            <input type="text" name="phone" placeholder="Ihre Telefonnummer" />
          </div>
        </div>

        {/* Ligne Objet */}
        <div className="form-group">
          <label>Betreff:</label>
          <input type="text" name="subject" placeholder="Ihr Anliegen" />
        </div>

        {/* Ligne Message */}
        <div className="form-group">
          <label>Nachricht:</label>
          <textarea name="message" rows="4" placeholder="Ihre Nachricht an mich"></textarea>
        </div>

        {/* Bouton Envoyer */}
        <button type="submit" className="contact-button">Nachricht senden</button>
      </form>
    </div>
  );
}




