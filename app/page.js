import Image from 'next/image';
export default function Home() {
  return (
    <div className="home-container">
      
      {/* Image + Présentation */}
      <div className="presentation">
      <Image 
          src="/images/photo.jpg" 
          alt="Rodrigue Kengmo" 
          width={250} 
          height={250} 
          className="profile-photo" 
        />
        {/* Ton image de profil (à mettre dans /public/images/photo.png par exemple) */}
        
        
        {/* Texte de présentation */}
        <div className="presentation-text">
          <h1>SAP-Berater / Consultant mit Schwerpunkt Finanzwesen und Buchhaltung</h1>
          <p>
          Erfahrener Fachmann im Finanzwesen, Buchhaltung, Analyse, Verwaltung und Qualitätsmanagement, mit Fokus auf die Optimierung von Finanzprozessen. Aktuell in Weiterbildung zum SAP-Berater im Bereich Finanzwesen.
          Zusätzlich fundierte Kenntnisse in IT-Sicherheit, insbesondere Netzwerksicherheit und Bedrohungsanalyse, sowie in Webentwicklung (HTML, CSS, JavaScript). Praktische Erfahrung durch die Entwicklung eigener Websites..
          </p>

          {/* Bouton de téléchargement du CV */}
          <a href="/Lebenslauf_Kengmo Rodrigue.pdf" download className="cv-button">
            📄 MEIN LEBENSLAUF HERUNTERLADEN
          </a>
        </div>
      </div>
            {/* Ici tu ajoutes la section Services */}
      <h2>Meine Dienstleistungen</h2>
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