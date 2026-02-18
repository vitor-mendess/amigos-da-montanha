export default function Footer() {
  return (
    <footer className="bg-[#3F4226] text-[#E8D6B3] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* CONTATO */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold tracking-wide">
            CONTATO
          </h3>

          <p className="text-lg">
            Quer viver uma experiência real na montanha?
          </p>

          <p className="text-lg leading-relaxed">
            Fale com nossa equipe e descubra o roteiro ideal para você.
          </p>

          <div className="space-y-2 text-lg">
            <p>📧 amigosdamontanha2014@gmail.com</p>
            <p>📞 +55 (24) 98841-8212</p>
            <p>📞 +55 (24) 99232-9540</p>
          </div>
        </div>

        {/* FORMULÁRIO */}
        <div>
          <h3 className="text-3xl font-bold mb-8">
            Deixe sua mensagem
          </h3>

          <form className="space-y-5">
            {[
              "Nome",
              "E-mail",
              "WhatsApp / Celular",
              "Qual roteiro você procura?",
            ].map((placeholder) => (
              <input
                key={placeholder}
                type="text"
                placeholder={placeholder}
                className="w-full bg-transparent border border-[#E8D6B3]/50 px-4 py-3 rounded-md focus:outline-none focus:border-[#C98A3A]"
              />
            ))}

            <textarea
              placeholder="Mensagem"
              rows={4}
              className="w-full bg-transparent border border-[#E8D6B3]/50 px-4 py-3 rounded-md focus:outline-none focus:border-[#C98A3A] resize-none"
            />

            <button
              type="submit"
              className="mt-4 px-10 py-4 border-2 border-[#C98A3A] rounded-full font-semibold text-lg text-[#C98A3A] hover:bg-[#C98A3A] hover:text-[#1C1C1C] transition"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>

      {/* ASSINATURA */}
      <div className="mt-24 text-center text-sm text-[#E8D6B3]/70">
        © 2026 Amigos da Montanha — Todos os direitos reservados. <br />
        Site desenvolvido por{" "}
        <a
          href="https://www.linkedin.com/in/vitor-mendess/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E8D6B3] hover:text-[#C98A3A] transition"
        >
          Vitor Mendes
        </a>
      </div>
    </footer>
  );
}



