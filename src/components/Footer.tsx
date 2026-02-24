"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_c9y0ciw",
        "template_n2eo2r9",
        form.current,
        "dX3tkBb_5g-cXxJA3"
      )
      .then(
        () => {
          setStatus("success");
          form.current?.reset();

          setTimeout(() => {
            setStatus("");
          }, 4000);
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <footer className="bg-[#3F4226] text-[#E8D6B3] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

        {/* CONTATO */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold tracking-wide">CONTATO</h3>

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

          <form ref={form} onSubmit={sendEmail} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Nome"
              required
              className="w-full bg-transparent border border-[#E8D6B3]/50 px-4 py-3 rounded-md focus:outline-none focus:border-[#C98A3A]"
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              className="w-full bg-transparent border border-[#E8D6B3]/50 px-4 py-3 rounded-md focus:outline-none focus:border-[#C98A3A]"
            />

            <input
              type="text"
              name="phone"
              placeholder="WhatsApp / Celular"
              className="w-full bg-transparent border border-[#E8D6B3]/50 px-4 py-3 rounded-md focus:outline-none focus:border-[#C98A3A]"
            />

            <input
              type="text"
              name="linkedin"
              placeholder="Qual roteiro você procura?"
              className="w-full bg-transparent border border-[#E8D6B3]/50 px-4 py-3 rounded-md focus:outline-none focus:border-[#C98A3A]"
            />

            <textarea
              name="message"
              placeholder="Mensagem"
              rows={4}
              required
              className="w-full bg-transparent border border-[#E8D6B3]/50 px-4 py-3 rounded-md focus:outline-none focus:border-[#C98A3A] resize-none"
            />

            {/* BOTÃO */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-4 px-10 py-4 border-2 border-[#C98A3A] rounded-full font-semibold text-lg text-[#C98A3A] hover:bg-[#C98A3A] hover:text-[#1C1C1C] transition disabled:opacity-50"
            >
              {status === "loading" ? "Enviando..." : "Enviar mensagem"}
            </button>

            {/* STATUS */}
            {status === "success" && (
              <p className="text-green-400 font-medium pt-2">
                ✅ Mensagem enviada com sucesso!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 font-medium pt-2">
                ❌ Erro ao enviar. Tente novamente.
              </p>
            )}
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





