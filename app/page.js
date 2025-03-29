import Image from 'next/image';

export default function Home() {
  return (
    <div className="home-container">
      {/* Section principale */}
      <div class="presentation">
        <div class="profile-image">
            <Image src="/images/photo.jpg" alt="Rodrigue Kengmo" width="350" height="350" className="profile-photo"/>
        </div>
        <div class="profile-content">
            <h2>SAP-Berater / Consultant – SAP S/4HANA Cloud, Private Edition</h2>
            <p>Als zertifizierter SAP-Consultant (FI) und Key-User (CO) verfüge ich über vier Jahre Erfahrung in Finanzwesen, Analyse, Verwaltung und Qualitätsmanagement. Mein Schwerpunkt liegt auf der Optimierung von Finanzprozessen, der Systemintegration sowie der Migration zu S/4HANA.</p>
            <p>Ich entwickle und implementiere SAP FI & CO Lösungen in komplexen Unternehmensumgebungen und unterstütze die Anbindung von SAP an bestehende ERP-Systeme. Zudem bin ich spezialisiert auf die Entwicklung von Migrationsstrategien für S/4HANA sowie die Erstellung und Durchführung von mehrsprachigen SAP-Schulungen (Deutsch & Französisch) für Endbenutzer und Key-User.</p>
            <p>Neben meinen SAP-Kenntnissen verfüge ich über fundiertes Wissen in IT-Sicherheit, insbesondere Netzwerksicherheit und Bedrohungsanalyse, sowie praktische Erfahrung in der Webentwicklung mit HTML, CSS und JavaScript.</p>
            <a href="#" class="btn-download">Mein Lebenslauf herunterladen</a>
        </div>
    </div>

      
            {/* Ici tu ajoutes la section Services */}
      <h2>~Meine Dienstleistungen~</h2>
      <div className="services">
        <div className="service-card">
          <span>💼</span>
          <h3>Optimierung von Finanzprozessen</h3>
          <p>Verbesserung und Automatisierung Ihrer Buchhaltungs- und Finanzprozesse.</p>
        </div>
        <div className="service-card">
          <span>🧾</span>
          <h3>SAP S/4HANA Finanzberatung</h3>
          <p>Beratung und Unterstützung bei der Einführung und Optimierung von SAP S/4HANA FI.</p>
        </div>
        <div className="service-card">
          <span>📚</span>
          <h3>Schulung und Support</h3>
          <p>Schulungen für Ihre Teams und kontinuierliche Unterstützung bei SAP FI.</p>
        </div>
        <div className="service-card">
          <span>📊</span>
          <h3>Analyse und Verbesserung der Buchhaltung</h3>
          <p>Analyse Ihrer aktuellen Buchhaltungsprozesse und individuelle Lösungen zur Effizienzsteigerung.</p>
        </div>
      </div>

      <h2>~ Meine Projekte ~</h2>
<div className="projects">
  <div className="project-card">
  <Image 
      src="/images/projekt1.jpg" 
      alt="Projekt 1" 
      width={300} 
      height={200} 
      className="project-image"
    />
    <h3>Finanzoptimierung Plattform</h3>
    <p>Webplattform zur Optimierung von Finanzprozessen und Buchhaltung.</p>
    <a href="#" className="project-button">Zum Projekt</a>
  </div>

  <div className="project-card">
  <Image 
      src="/images/projekt2.png" 
      alt="Projekt 2" 
      width={300} 
      height={200} 
      className="project-image"
    />
    <h3>Persönliches Portfolio</h3>
    <p>Meine persönliche Webseite zur Präsentation meiner Dienstleistungen.</p>
    <a href="#" className="project-button">Zum Projekt</a>
  </div>

  <div className="project-card">
  <Image 
      src="/images/projekt3.jpg" 
      alt="Projekt 3" 
      width={300} 
      height={200} 
      className="project-image"
    />
    <h3>SAP S/4HANA Einführung</h3>
    <p>Beratung und Unterstützung bei der SAP S/4HANA FI Implementierung.</p>
    <a href="#" className="project-button">Zum Projekt</a>
  </div>
</div>
  {/* WICHTIGE LINKS */}
<h2>Wichtige Links</h2>

{/* Lien LinkedIn */}
<p>🔗 Mein LinkedIn-Profil:{" "}
  <a
    href="https://www.linkedin.com/in/rodrigue-kengmo-k-45b48a252/"
    target="_blank"
    rel="noopener noreferrer"
    className="important-link"
  >
    LinkedIn ansehen
  </a>
</p>

{/* Nouveau lien GitHub ajouté ici */}
<p>📂 Mein GitHub-Repository:{" "}
  <a
    href="https://github.com/Rodriguevichlemonde"
    target="_blank"
    rel="noopener noreferrer"
    className="important-link"
  >
    Mein GitHub-Profil ansehen
  </a>
</p>

{/* Lien de téléchargement du CV */}
<p>📄 Mein Lebenslauf herunterladen:{" "}
  <a
    href="/Lebenslauf_Kengmo_Rodrigue.pdf"
    download
    className="important-link"
  >
    Lebenslauf herunterladen
  </a>
</p>
</div>

);
}