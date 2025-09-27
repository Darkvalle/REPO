import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Grid3x3, FolderArchive, MessageSquare } from 'lucide-react';

export default function AppsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Efeito para fechar o menu se clicar fora dele
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  return (
    <div className="apps-menu-container" ref={menuRef}>
      <button
        className="apps-menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Aplicações da plataforma"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Grid3x3 size={24} />
      </button>

      {isOpen && (
        <div className="apps-menu-panel" role="menu">
          <Link to="/repositorio" className="apps-menu-item" role="menuitem">
            <FolderArchive size={32} />
            <span>Repositório</span>
          </Link>
          <Link to="/forum" className="apps-menu-item" role="menuitem">
            <MessageSquare size={32} />
            <span>Fórum</span>
          </Link>
        </div>
      )}
    </div>
  );
}