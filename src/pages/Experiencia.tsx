import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaMountain,
  FaCampground,
  FaHiking,
  FaInfoCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

type Nivel = "Fácil" | "Moderada" | "Difícil";

const nivelColor = {
  Fácil: "bg-green-600",
  Moderada: "bg-yellow-500 text-black",
  Difícil: "bg-red-700",
};

type Passeio = {
  nome: string;
  nivel: Nivel;
  dias: string;
  local: string;
  imagem: string;
  slug?: string;
};

/* ================= TRILHAS & EXPERIÊNCIAS ================= */

const trilhas: Passeio[] = [
  {
    nome: "Circuito 5 Lagos",
    nivel: "Fácil",
    dias: "1 dia",
    local: "PNI",
    imagem: "/imgs/5lago.jpg",
    slug: "/experiencia/circuito-5-lagos"
  },
  {
    nome: "Pedra do Sino",
    nivel: "Moderada",
    dias: "1 dia",
    local: "PNI",
    imagem: "/imgs/pedrasino.jpg",
    slug: "/experiencia/pedra-do-sino",
  },
  {
    nome: "Prateleiras",
    nivel: "Moderada",
    dias: "1 dia",
    local: "PNI",
    imagem: "/imgs/prateleira.jpg",
    slug: "/experiencia/prateleiras",
  },
  {
    nome: "Circuito Couto x Prateleiras",
    nivel: "Moderada",
    dias: "1 dia",
    local: "PNI",
    imagem: "/imgs/circuitocouto.jpg",
    slug: "/experiencia/couto-prateleiras",
  },
  {
    nome: "Morro do Couto",
    nivel: "Moderada",
    dias: "1 dia",
    local: "PNI",
    imagem: "/imgs/morrocouto.jpg",
    slug: "/experiencia/morro-do-couto",
  },
  {
    nome: "Serrilha dos Cristais",
    nivel: "Difícil",
    dias: "1 dia",
    local: "PNI",
    imagem: "/imgs/serrilha.jpg",
    slug: "/experiencia/serrilha-dos-cristais",
  },
  {
    nome: "Pedra do Altar",
    nivel: "Difícil",
    dias: "2 dias",
    local: "PNI",
    imagem: "/imgs/ladob.jpg",
    slug: "/experiencia/pedra-do-altar",
  },
  {
    nome: "Chapada da Lua",
    nivel: "Moderada",
    dias: "1 dia",
    local: "PNI",
    imagem: "/imgs/chapadalua.png",
    slug: "/experiencia/chapada-da-lua",
  },
  {
    nome: "Pedra dos Enamorados",
    nivel: "Difícil",
    dias: "1 dia",
    local: "PNI",
    imagem: "/imgs/enamorados.jpg",
    slug: "/experiencia/pedra-dos-enamorados"

  },
  {
    nome: "Asa de Hermes + Rapel",
    nivel: "Difícil",
    dias: "1 dia",
    local: "PNI",
    imagem: "/imgs/asadehermes.jpg",
    slug: "/experiencia/asa-de-hermes",
  },
  {
    nome: "Pico das Agulhas Negras",
    nivel: "Difícil",
    dias: "1 dia",
    local: "PNI",
    imagem: "/imgs/picoagulhas.jpg",
    slug: "/experiencia/agulhas-negras",
  },
  {
    nome: "Pedra Selada",
    nivel: "Difícil",
    dias: "1 dia",
    local: "PNI",
    imagem: "/imgs/selada.jpg",
    slug:"/experiencia/pedra-selada"
  },
  {
    nome: "Capim Amarelo Serra Fina",
    nivel: "Difícil",
    dias: "1 dia",
    local: "PNI",
    imagem: "/imgs/serrafina.jpg",
    slug: "/experiencia/capim-amarelo-serra-fina"
  },
];

/* ================= ACAMPAMENTOS ================= */

const acampamentos: Passeio[] = [];

/* ================= TRAVESSIAS ================= */

const travessias: Passeio[] = [
  {
    nome: "Travessia Rancho Caído",
    nivel: "Difícil",
    dias: "2 dias",
    local: "PNI",
    imagem: "/imgs/ranchocaido.jpg",
    slug: "/experiencia/travessia-rancho-caido",
  },
  {
    nome: "Travessia Ruy Braga",
    nivel: "Moderada",
    dias: "1 dia",
    local: "PNI",
    imagem: "/imgs/ruybraga.jpg",
    slug: "/experiencia/travessia-ruy-braga",
  },
  {
    nome: "Travessia Serra Negra",
    nivel: "Difícil",
    dias: "3 dias",
    local: "PNI",
    imagem: "/imgs/serranegra.jpg",
    slug: "/experiencia/travessia-serra-negra",
  },
  {
    nome: "Travessia da Serra Fina",
    nivel: "Difícil",
    dias: "2 dias",
    local: "Mantiqueira",
    imagem: "/imgs/marins2.jpg",
    slug: "/experiencia/travessia-da-serra-fina"
  },
  {
    nome: "Petro x Tere",
    nivel: "Difícil",
    dias: "3 dias",
    local: "Serra dos Órgãos",
    imagem: "/imgs/petrotere.jpg",
    slug: "/experiencia/petro-x-tere",
  },
];

/* ================= COMPONENTE SEÇÃO ================= */

function Secao({
  titulo,
  icon,
  itens,
}: {
  titulo: string;
  icon: JSX.Element;
  itens: Passeio[];
}) {
  return (
    <section className="py-24 bg-[#E8D6B3]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-12 flex items-center gap-4 text-[#1C1C1C]">
          <span className="text-[#9C3F1A]">{icon}</span>
          {titulo}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itens.map((item, index) => (
            <div
              key={index}
              className="relative h-[420px] rounded-2xl overflow-hidden group"
              style={{
                backgroundImage: `url(${item.imagem})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/70 transition" />

              <div className="absolute top-5 left-5 flex flex-wrap gap-2 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-black">
                  {item.local}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-black">
                  {item.dias}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${nivelColor[item.nivel]}`}
                >
                  {item.nivel}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <h3 className="text-2xl font-extrabold mb-4 leading-tight">
                  {item.nome}
                </h3>

                {item.slug ? (
                  <Link
                    to={item.slug}
                    className="block text-center border-2 border-white py-2 rounded-full hover:bg-white hover:text-[#1C1C1C] transition"
                  >
                    Mais informações
                  </Link>
                ) : (
                  <button
                    disabled
                    className="w-full border-2 border-white/40 text-white/60 py-2 rounded-full cursor-not-allowed"
                  >
                    Mais informações
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= PAGE ================= */

export default function Experiencia() {
  return (
    <>
      <Header />

      <section className="bg-[#E8D6B3] py-32 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
          Experiências na Montanha
        </h1>
        <div className="w-24 h-1 bg-[#9C3F1A] mx-auto mb-8 rounded-full" />
        <p className="text-xl max-w-4xl mx-auto">
          Trilhas, travessias e jornadas pensadas para diferentes níveis,
          sempre com segurança, propósito e conexão real com a natureza.
        </p>
      </section>

      <section className="bg-[#E8D6B3] -mt-24 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-3 mb-6">
              <FaInfoCircle className="text-3xl text-[#9C3F1A]" />
              <h2 className="text-3xl font-bold text-[#1C1C1C]">
                Informações Importantes
              </h2>
            </div>

            <div className="space-y-4 text-[#3A3A3A]">
              <p>
                Os valores de todas as trilhas já estão com o ingresso do
                <strong> Parque Nacional do Itatiaia</strong> incluso.
              </p>

              <p>
                Condições especiais para grupos, estudantes, maiores de 60 anos
                e moradores do entorno (consultar o valor com a nossa equipe).
              </p>

              <p>
                Organizamos qualquer roteiro com grupos fechados. Fale com um de
                nossos guias para juntos elaborarem uma experiência exclusiva e
                personalizada.
              </p>

              <p>
                Para reservar sua vaga é necessário o pagamento de
                <strong> 30%</strong>. O restante de
                <strong> 70%</strong> deverá ser pago até 15 dias antes da trilha.
              </p>

              <div className="pt-4">
                <p className="font-semibold mb-2 text-[#1C1C1C]">
                  Níveis das trilhas e travessias:
                </p>
                <ul className="flex flex-wrap gap-4">
                  <li className="px-4 py-1 rounded-full bg-green-600 text-white">
                    Fácil – Leve
                  </li>
                  <li className="px-4 py-1 rounded-full bg-yellow-400 text-black">
                    Moderada
                  </li>
                  <li className="px-4 py-1 rounded-full bg-red-700 text-white">
                    Difícil – Pesada
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Secao titulo="Trilhas & Experiências" icon={<FaMountain />} itens={trilhas} />
    
      <Secao titulo="Travessias" icon={<FaHiking />} itens={travessias} />

      <Footer />
    </>
  );
}
