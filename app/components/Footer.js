import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Copyright */}
        <p>© 2025 Rodrigue Kengmo Keufouet. Alle Rechte vorbehalten.</p>

        {/* Liens importants */}
        <div className="footer-links">
          <Link href="https://www.linkedin.com/in/rodrigue-kengmo-k-45b48a252/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
          <a
           href="https://drive.google.com/uc?export=download&id=1sSeD6Uh5Yn6yirm4nv-oDGlG8e1MMljm"
           className="footer-cv-link"
           target="_blank"
           rel="noopener noreferrer"
>
           Lebenslauf herunterladen
          </a>

        </div>

        {/* Contact */}
        <p>Email: kenkeuro2000@gmail.com | Telefon: +49 176 26412397</p>

      </div>
    </footer>
  );
}
