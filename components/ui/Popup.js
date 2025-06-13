import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Popup = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <Link href="/contacto" passHref>
          <Image
            src="https://prodbgwebportal.blob.core.windows.net/assets/ganasafi/popup.jpg"
            alt="Comunicado"
            width={500}
            height={500}
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 20px;
          padding-top: 30px;
          border-radius: 8px;
          position: relative;
        }
        .modal-close {
          position: absolute;
          top: 10px;
          right: 10px;
          border: none;
          background: transparent;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Popup;
