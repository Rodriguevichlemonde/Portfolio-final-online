export default function About() {
    return (
      <div className="about-container">
        
        {/* Présentation */}
        <h1>Über mich</h1>
        <p>
          Hallo! Ich bin Rodrigue Marcial Kengmo Keufouet, ein erfahrener SAP-Berater mit dem Schwerpunkt SAP FI (Finanzbuchhaltung).
          Ich unterstütze Unternehmen bei der Optimierung ihrer Finanzprozesse, Buchhaltung und Berichterstattung mit Hilfe von SAP S/4HANA. 
          Neben fundierten Kenntnissen in SAP FI verfüge ich auch über Erfahrung in IT-Sicherheit und Webentwicklung.
          Mein Ziel ist es, effiziente und sichere Lösungen für komplexe Finanzanforderungen zu bieten.
        </p>
  
        {/* Compétences */}
        <h2>Kompetenzen</h2>
        <div className="skills">
          <p><strong>SAP:</strong> SAP FI (Finanzbuchhaltung), SAP S/4HANA, Customizing, Beratung und Support, Jahresabschlüsse, Berichterstattung</p>
          <p><strong>Finanzwesen & Buchhaltung:</strong> Kreditoren- und Debitorenbuchhaltung, Anlagenbuchhaltung, Controlling, Finanzanalyse, Prozessoptimierung</p>
          <p><strong>IT-Sicherheit:</strong> Netzwerksicherheit, Datenschutz, Bedrohungsanalyse</p>
          <p><strong>Webentwicklung:</strong> HTML, CSS, JavaScript, Next.js (Entwicklung von persönlichen Tools und Portfolio)</p>
        </div>
  
        {/* Expériences professionnelles */}
        <h2>Berufserfahrungen</h2>
        <div className="experience">
          <p><strong>SAP-Berater FI (Freiberuflich)</strong> — Seit 2025</p>
          <p>Beratung und Unterstützung bei der Einführung und Optimierung von SAP FI für Unternehmen (S/4HANA-Projekte, Customizing, Prozessberatung).</p>
  
          <p><strong>Koordinator für Reinigung und Verwaltung</strong> — Food Hygiene GmbH, Suhl (09/2022 – 08/2024)</p>
          <p>Optimierung administrativer Prozesse in den Bereichen Personal und Finanzen. Qualitätssicherung und Teamkoordination.</p>
  
          <p><strong>Mitarbeiter in der Verwaltung und Reinigung</strong> — WISAG Lebensmittelhygiene GmbH (01/2020 – 08/2022)</p>
          <p>Verwaltung, Dokumentation und Qualitätskontrolle. Einhaltung von Hygiene- und Sicherheitsstandards.</p>
        </div>
         {/* Bouton pour télécharger le CV */}
      <a href="/Lebenslauf_Kengmo_Rodrigue.pdf" download className="cv-button">
        📄 Mein Lebenslauf herunterladen
      </a>
      </div>
    );
  }
  