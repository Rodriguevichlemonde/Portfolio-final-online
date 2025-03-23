"use client";  // Ajouté pour déclarer ce fichier comme un client component

import { useState } from "react";

export default function Services() {
  const [openDetails, setOpenDetails] = useState(null);

  const toggleDetails = (service) => {
    setOpenDetails(openDetails === service ? null : service);
  };

  return (
    <div className="services-container">
      <h1> Meine Dienstleistungen </h1>
      <p>Meine Services sind darauf ausgerichtet, Ihre Geschäftsprozesse effizienter zu gestalten.</p>

      <div className="service-grid">
        <div className="service-item">
          <h3>SAP FI Beratung</h3>
          <p>Beratung bei der Einführung und Optimierung von SAP FI (Finanzbuchhaltung).</p>
          
          <a href="#" onClick={() => toggleDetails("sapFI")}>
            {openDetails === "sapFI" ? "Weniger anzeigen" : "Mehr erfahren"}
          </a>

          {openDetails === "sapFI" && (
            <p className="details">
              SAP FI bietet eine umfassende Lösung für Finanzbuchhaltung und Berichterstattung...
            </p>
          )}
        </div>

        <div className="service-item">
          <h3>Finanzprozesse Optimierung</h3>
          <p>Analyse und Verbesserung von Buchhaltungs- und Finanzprozessen.</p>

          <a href="#" onClick={() => toggleDetails("financeOpt")}>
            {openDetails === "financeOpt" ? "Weniger anzeigen" : "Mehr erfahren"}
          </a>

          {openDetails === "financeOpt" && (
            <p className="details">
              Ich analysiere bestehende Buchhaltungsprozesse und entwickle maßgeschneiderte Lösungen...
            </p>
          )}
        </div>


        <div className="service-item">
          <h3> Schulung und Support </h3>
          <p>Schulungen für SAP FI Nutzer und laufender Support.</p>

          <a href="#" onClick={() => toggleDetails("financeOpt")}>
            {openDetails === "financeOpt" ? "Weniger anzeigen" : "Mehr erfahren"}
          </a>

          {openDetails === "financeOpt" && (
            <p className="details">
              Détails supplémentaires sur Schulung und Support...
            </p>
          )}
        </div>
        <div className="service-item">
          <h3>Berichterstattung & Jahresabschluss</h3>
          <p>Beratung zur Erstellung von Finanzberichten und Jahresabschlüssen mit SAP.</p>

          <a href="#" onClick={() => toggleDetails("financeOpt")}>
            {openDetails === "financeOpt" ? "Weniger anzeigen" : "Mehr erfahren"}
          </a>

          {openDetails === "financeOpt" && (
            <p className="details">
               Détails supplémentaires sur Berichterstattung & Jahresabschluss...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
