import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function SocialFixed() {
  return (
    <>
      {/* DESKTOP - lateral direita (estilo original) */}
      <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
        <a
          href="https://www.instagram.com/amigosdamontanhapni?igsh=MTNnZDd4ZGhteGlj"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-[#1C1C1C] bg-[#E8D6B3] p-2.5 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaInstagram size={18} />
        </a>

        <a
          href="https://youtube.com/@amigosdamontanha8654?si=1ucxwDi5OklgU_b7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="text-[#1C1C1C] bg-[#E8D6B3] p-2.5 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaYoutube size={18} />
        </a>

        <a
          href="https://www.facebook.com/amigosdamontanhapni"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-[#1C1C1C] bg-[#E8D6B3] p-2.5 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaFacebook size={18} />
        </a>

        <a
          href="https://wa.me/5524988418212"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-[#1C1C1C] bg-[#E8D6B3] p-2.5 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaWhatsapp size={18} />
        </a>
      </div>

      {/* MOBILE - barra inferior */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-4 bg-[#E8D6B3] px-6 py-3 rounded-full shadow-xl">
        <a
          href="https://www.instagram.com/amigosdamontanhapni?igsh=MTNnZDd4ZGhteGlj"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-[#1C1C1C] hover:scale-110 transition"
        >
          <FaInstagram size={20} />
        </a>

        <a
          href="https://youtube.com/@amigosdamontanha8654?si=1ucxwDi5OklgU_b7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="text-[#1C1C1C] hover:scale-110 transition"
        >
          <FaYoutube size={20} />
        </a>

        <a
          href="https://www.facebook.com/amigosdamontanhapni"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-[#1C1C1C] hover:scale-110 transition"
        >
          <FaFacebook size={20} />
        </a>

        <a
          href="https://wa.me/5524988418212"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-[#1C1C1C] hover:scale-110 transition"
        >
          <FaWhatsapp size={20} />
        </a>
      </div>
    </>
  );
}

