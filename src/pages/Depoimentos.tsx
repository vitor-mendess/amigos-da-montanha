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
    nome: "Teylon Maximvs",
    texto: "Simplesmente surreal. O guia muito profissional e amigo.",
  },
  {
    nome: "Mario Telles",
    texto:
      "Experiência ótima na Travessia Serra Negra. Melhorar apenas detalhes de orientação, mas passeio nota mil.",
  },
  {
    nome: "Sara Oliveira Monteiro",
    texto:
      "Caminhada com chuva e pedra escorregadia, mas com muita segurança e um dia maravilhoso.",
  },
  {
    nome: "Gabriela",
    texto:
      "Grupo animado, todos se ajudando. Guia muito atencioso.",
  },
  {
    nome: "Samantha",
    texto:
      "Trilha cansativa e desafiadora, mas maravilhosa. Guia muito paciente.",
  },
  {
    nome: "Rogério",
    texto:
      "Primeira vez no PNI e só elogios. Guia conduziu tudo com maestria e segurança.",
  },
  {
    nome: "Vanesca Cíntia",
    texto:
      "Gratidão ao guia. Conduziu o grupo com segurança e tranquilidade.",
  },
  {
    nome: "Fábio Torres",
    texto:
      "Trilha exigente, mas guia experiente e profissional. Recomendo a equipe.",
  },
  {
    nome: "Alessandra",
    texto:
      "Sou fã do trabalho. Pessoal atencioso, competente e sempre disposto a ajudar.",
  },
  {
    nome: "Luiz Felipe",
    texto:
      "Experiência incrível com sensação de quero mais. Voltarei com certeza.",
  },
  {
    nome: "João Vitor",
    texto:
      "Passeio excelente, feito com segurança mesmo em percurso difícil.",
  },
  {
    nome: "Letícia Capucho",
    texto:
      "Muito incrível, nota 11. Paisagem e guia excelentes!",
  },
  {
    nome: "Jessica",
    texto:
      "Suporte excepcional durante todo o percurso, sempre preocupados com o bem-estar do grupo.",
  },
  {
    nome: "Ariane Pereira",
    texto:
      "Guiamento excelente, muito atencioso e experiente. Conquista inesquecível.",
  },
  {
    nome: "Leandro Motta",
    texto:
      "Terceira aventura com a equipe, todas perfeitas. Só agradecer!",
  },
  {
    nome: "Rogério Maia",
    texto:
      "Inesquecível chegar ao cume e ao livro de registros. Gratidão aos guias.",
  },
  {
    nome: "Denis",
    texto:
      "Superou expectativas, tanto pela beleza quanto pelo suporte dos guias.",
  },
  {
    nome: "Micaela",
    texto:
      "Passeio maravilhoso com o guia Ricardo. Segurança e profissionalismo impecáveis.",
  },
  {
    nome: "Juliana",
    texto:
      "Experiência incrível!",
  },
  {
    nome: "Cleyson",
    texto:
      "Sensacional descer o rapel, parabéns a todos.",
  },
  {
    nome: "Simone Faria",
    texto:
      "Experiência fantástica, guiagem com zelo e segurança total.",
  },
  {
    nome: "Ana Clara",
    texto:
      "Sempre muito divertido trilhar com o guia Roberto.",
  },
  {
    nome: "Valesca Lobo",
    texto:
      "Grupo se ajudou bastante. Guias extremamente profissionais.",
  },
  {
    nome: "Clynton Fortini",
    texto:
      "Dia excelente, acompanhamento sensacional na subida.",
  },
  {
    nome: "Larissa",
    texto:
      "Guias fizeram toda a diferença para eu conseguir completar a trilha.",
  },
  {
    nome: "Viviani",
    texto:
      "Equipe sensacional, muito atenciosa e preocupada com a segurança.",
  },
  {
    nome: "Aline Nogueira",
    texto:
      "Lugar incrível e guias super atenciosos e pacientes o tempo todo.",
  },
  {
    nome: "Marcelo",
    texto:
      "Top demais!",
  },
  {
    nome: "Karina Maiolini",
    texto:
      "Trilha gostosa de caminhar com guia sério e muito bom.",
  },
  {
    nome: "Alexandre",
    texto:
      "Primeira visita ao parque. Incrível e inesquecível experiência.",
  },
  {
    nome: "Giovanna",
    texto:
      "Guia extremamente profissional e paciente. Experiência desafiadora e gratificante.",
  },
  {
    nome: "Josiane",
    texto:
      "Mesmo com mau tempo, tudo ocorreu perfeitamente.",
  },
  {
    nome: "Aline Alves",
    texto:
      "Guias extremamente profissionais e atenciosos, diferencial enorme.",
  },
  {
    nome: "Ricardo",
    texto:
      "Travessia pesada, mas muito bonita e recompensadora.",
  },
  {
    nome: "Suenya",
    texto:
      "Realização de sonho. Espero retornar com minha filha.",
  },
  {
    nome: "Pedro Monteiro",
    texto:
      "Profissionalismo e diversão garantidos.",
  },
  {
    nome: "Jéssica Pereira",
    texto:
      "Final de semana incrível, cheio de superações e segurança total.",
  },
  {
    nome: "Cristiano",
    texto:
      "Confiança, segurança e respeito.",
  },
  {
    nome: "Soraia Barbosa",
    texto:
      "Sonho realizado. Experiência inesquecível com muita segurança.",
  },
  {
    nome: "Rafael",
    texto:
      "Paisagens maravilhosas, guia experiente e grupo muito coeso.",
  },
  {
    nome: "Rogério Assis",
    texto:
      "Final de semana incrível. Profissionalismo e segurança do início ao fim.",
  },
  {
    nome: "Ana Lúcia",
    texto:
      "Experiência única com guias competentes e atenciosos.",
  },
  {
    nome: "Alessandro Novais",
    texto:
      "Energia muito boa, profissionalismo e excelente condução da trilha.",
  },
  {
    nome: "Deborah Levinson",
    texto:
      "Inesquecível! Paisagens deslumbrantes e grupo maravilhoso.",
  },
  {
    nome: "Matheus",
    texto:
      "Passeio muito gostoso, grupo em ótima sintonia e guia atencioso.",
  },
  {
    nome: "Mylena Santos",
    texto:
      "Experiência incrível, guia pontual, atencioso e muito profissional.",
  },
  {
    nome: "Ariane Pereira (Rancho Caído)",
    texto:
      "Experiência diferenciada com paradas incríveis e condução impecável.",
  },
  {
    nome: "Rafael (Serra Negra 2022)",
    texto:
      "Ótima travessia, tudo conforme o esperado.",
  },
  {
    nome: "Cynthia",
    texto:
      "Ótimo passeio!",
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
