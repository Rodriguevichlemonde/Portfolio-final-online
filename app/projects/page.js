import Image from 'next/image';
export default function Projects() {
    return (
      <div className="projects-container">
        <h1>~ Meine Projekte ~</h1>
  
        {/* SECTION PROJEKTE */}
        <div className="project-grid">
          
          {/* Projekt 1 */}
          <div className="project-card">
           {/* Projet 1 : Finanzoptimierung */}
              <Image 
                  src="/images/projekt1.jpg" 
                 alt="Finanzoptimierung" 
                width={300} 
                 height={200} 
                 className="project-image"
              />
            <h3>Finanzoptimierung Plattform</h3>
            <p>Webplattform zur Optimierung von Finanzprozessen und Buchhaltung.</p>
            <a href="#" className="project-button">Zum Projekt</a>
          </div>
  
          {/* Projekt 2 */}
          <div className="project-card">
                {/* Projet 2 : Portfolio */}
                <Image 
                src="/images/projekt2.png" 
                alt="Portfolio" 
                width={300} 
                height={200} 
                className="project-image"
                />
            <h3>Persönliches Portfolio</h3>
            <p>Meine persönliche Webseite zur Präsentation meiner Dienstleistungen.</p>
            <a href="#" className="project-button">Zum Projekt</a>
          </div>
  
          {/* Projekt 3 */}
          <div className="project-card">
                    {/* Projet 3 : SAP S/4HANA */}
                <Image 
                src="/images/projekt3.jpg" 
                alt="SAP S/4HANA" 
                width={300} 
                height={200} 
                className="project-image"
                />
            <h3>SAP S/4HANA Finance (2024)</h3>
            <p>Beratung und Umsetzung von SAP FI Lösungen für Finanzprozesse.</p>
            <a href="#" className="project-button">Zum Projekt</a>
          </div>
  
        </div>
  
        {/* WICHTIGE LINKS */}
        <h2>Wichtige Links</h2>
  
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
  