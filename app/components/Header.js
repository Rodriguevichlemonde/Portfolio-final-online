// Importer le composant Link de Next.js pour naviguer entre les pages
import Link from 'next/link';

// Déclaration de la fonction Header qui retourne le menu
export default function Header() {
    return (
        <header className="main-header">
          {/* Ton nom à gauche */}
          <div className="logo">
            Rodrigue KENGMO KEUFOUET
          </div>
    
          {/* Menu de navigation à droite */}
          <nav>
            <ul className="nav-links">
              <li><Link href="/">Startseite</Link></li>
              <li><Link href="/about">Über mich</Link></li>
              <li><Link href="/projects">Projekte</Link></li>
              <li><Link href="/services">Dienstleistungen</Link></li>
              <li><Link href="/contact">Kontakt</Link></li>
            </ul>
          </nav>
        </header>
      );
    }
