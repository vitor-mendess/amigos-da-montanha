import Header from "../components/Header";
import Footer from "../components/Footer";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import depo1 from "../assets/depoimentos/depo1.jpg";
import depo2 from "../assets/depoimentos/depo2.jpg";
import depo3 from "../assets/depoimentos/depo3.jpg";
import depo4 from "../assets/depoimentos/depo4.jpg";

const depoimentos = [
  {
    nome: "Alessandra Valle",
    texto:
      "Domingo passado fizemos Escalaminhada no Pão de Açúcar… indescritível!! Um misto de sentimentos nessa trilha que para mim foi um desafio.",
  },
  {
    nome: "Vanuza Diniz",
    texto:
      "Fiz a travessia Petrópolis x Teresópolis e achei incrível a organização com transporte e horários.",
  },
  {
    nome: "Talita Aleixo",
    texto:
      "Subimos as Prateleiras esse final de semana! Foi uma experiência única, lugar maravilhoso.",
  },
  {
    nome: "Danielle França",
    texto:
      "Superei meus medos e fiquei muito feliz em atingir o cume das Prateleiras. Recomendo muito!",
  },
];

export default function Depoimentos() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 2) % depoimentos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 2) % depoimentos.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? depoimentos.length - 2 : prev - 2
    );
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="bg-[#E8D6B3] py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-[#1C1C1C]">
            O que dizem nossos clientes
          </h1>

          <div className="w-24 h-1 bg-[#9C3F1A] mx-auto mb-8 rounded-full" />

          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed text-[#1C1C1C]">
            Histórias reais de quem viveu experiências inesquecíveis
            nas montanhas.
          </p>

          {/* IMAGENS */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <img
              src={depo1}
              alt="Experiência na montanha"
              className="rounded-3xl h-72 w-full object-cover shadow-xl"
            />
            <img
              src={depo2}
              alt="Trilha e aventura"
              className="rounded-3xl h-72 w-full object-cover shadow-xl"
            />
            <img
              src={depo3}
              alt="Cume e superação"
              className="rounded-3xl h-72 w-full object-cover shadow-xl"
            />
            <img
              src={depo4}
              alt="Vivência em grupo"
              className="rounded-3xl h-72 w-full object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* CARROSSEL */}
      <section className="py-24 bg-[#E8D6B3] px-6">
        <div className="relative max-w-6xl mx-auto">
          {/* SETA ESQUERDA */}
          <button
            onClick={prev}
            className="absolute -left-8 top-1/2 -translate-y-1/2 text-[#1C1C1C] text-2xl hover:scale-110 transition"
          >
            <FaChevronLeft />
          </button>

          {/* DEPOIMENTOS */}
          <div className="grid md:grid-cols-2 gap-8">
            {depoimentos.slice(index, index + 2).map((item, i) => (
              <div
                key={i}
                className="bg-[#F4EAD6] p-10 rounded-3xl shadow-lg hover:shadow-xl transition"
              >
                <p className="text-lg leading-relaxed mb-6 text-[#3A3A3A]">
                  “{item.texto}”
                </p>
                <span className="font-bold text-[#1C1C1C]">
                  — {item.nome}
                </span>
              </div>
            ))}
          </div>

          {/* SETA DIREITA */}
          <button
            onClick={next}
            className="absolute -right-8 top-1/2 -translate-y-1/2 text-[#1C1C1C] text-2xl hover:scale-110 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
