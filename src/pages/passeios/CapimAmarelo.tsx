import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaWhatsapp, FaMountain } from "react-icons/fa";
import { useState } from "react";

const imagens = [
  "/imgs/capim-amarelo/01.jpg",
  "/imgs/capim-amarelo/02.jpg",
  "/imgs/capim-amarelo/03.jpg",
  "/imgs/capim-amarelo/04.jpg",
  "/imgs/capim-amarelo/05.jpg",
];

export default function CapimAmarelo() {
  const [imagemAberta, setImagemAberta] = useState<string | null>(null);

  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="h-[80vh] bg-cover bg-center relative flex items-end"
        style={{
          backgroundImage:
            "url('/imgs/capim-amarelo/home.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 text-white">
          <span className="inline-flex items-center gap-2 bg-[#9C3F1A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaMountain /> Alto • 8h • 2491m
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Capim Amarelo – Serra Fina
          </h1>

          <a
            href="https://wa.me/5524988418212"
            target="_blank"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full text-lg font-bold transition"
          >
            <FaWhatsapp className="text-2xl" />
            Quero participar
          </a>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="bg-[#E8D6B3] py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-24">

          {/* O QUE FAREMOS */}
          <div>
            <h2 className="text-4xl font-extrabold mb-8">O que faremos</h2>

            <div className="space-y-6 text-lg leading-relaxed text-[#1C1C1C]">
              <p>
                O <strong>Alto Capim Amarelo</strong> fica na Serra Fina,
                com <strong>2.391 metros</strong> acima do nível do mar (segundo IBGE),
                na divisa entre os estados de Minas Gerais e São Paulo.
              </p>

              <p>
                Seu cume é famoso por integrar uma das travessias mais difíceis do Brasil,
                a <strong>Travessia da Serra Fina</strong>. O nome vem do capim comum
                na região, que ganha tonalidade amarelada principalmente quando o sol
                incide sobre ele.
              </p>

              <p>
                São <strong>6 km de subida intensa</strong> (12 km ida e volta),
                praticamente 100% em ascensão até o cume, motivo pelo qual
                essa trilha é considerada difícil.
              </p>

              <p>
                Durante o percurso passaremos por trechos marcantes da travessia,
                como o <strong>Quartzito</strong> e o <strong>Passo dos Anjos</strong>,
                tornando a experiência ainda mais especial e desafiadora.
              </p>
            </div>
          </div>

          {/* DADOS */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { valor: "12km", label: "Distância" },
              { valor: "2491m", label: "Altitude" },
              { valor: "8h", label: "Duração" },
              { valor: "Alto", label: "Esforço" },
              { valor: "Baixo", label: "Exposição" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 text-center"
              >
                <p className="text-3xl font-extrabold text-[#9C3F1A]">
                  {item.valor}
                </p>
                <p className="text-sm font-semibold uppercase mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* GALERIA */}
          <div>
            <h2 className="text-4xl font-extrabold mb-10">Galeria</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {imagens.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Capim Amarelo ${index + 1}`}
                  onClick={() => setImagemAberta(img)}
                  className="cursor-pointer rounded-2xl object-cover h-64 w-full hover:scale-[1.03] transition"
                />
              ))}
            </div>
          </div>

          {/* MODAL */}
          {imagemAberta && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              onClick={() => setImagemAberta(null)}
            >
              <img
                src={imagemAberta}
                className="max-h-[90vh] max-w-[90vw] rounded-2xl"
              />
            </div>
          )}

          {/* INCLUSO / NÃO INCLUSO */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-3xl font-bold mb-6">O que está incluso</h3>
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li>Consultoria técnica</li>
                <li>Guia</li>
                <li>Transporte</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-3xl font-bold mb-6">Não incluso</h3>
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li>Alimentação</li>
                <li>Vestuário</li>
                <li>Despesas pessoais</li>
                <li>Medicamentos pessoais</li>
                <li>Passeios não descritos</li>
              </ul>
            </div>
          </div>

          {/* VALORES */}
          <div className="bg-white rounded-3xl p-10 shadow-md">
            <h2 className="text-4xl font-extrabold mb-8">
              Valores e horários
            </h2>

            <div className="space-y-4 text-lg">
              <p>
                <strong>Hospedagem:</strong> Itatiaia —
                <strong> R$ 60,00</strong> (café da manhã incluso)
              </p>

              <p>
                <strong>Horário de saída:</strong> 5h30
              </p>

              <p className="text-sm italic text-gray-600">
                * Horário de chegada depende do grupo
              </p>

              <p>
                <strong>Local de encontro:</strong> Rodoviária de Resende
                (Mc Donalds), Rodoviária de Itatiaia ou local a combinar.
              </p>
            </div>
          </div>

          {/* RECOMENDAÇÕES */}
          <div>
            <h2 className="text-4xl font-extrabold mb-10">Recomendações</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                [
                  "Alimentação",
                  "Sanduíches, chocolates, barras, frutas e refeição adequada. Alimentação recomendada a cada 1h.",
                ],
                [
                  "Hidratação",
                  "Mínimo de 1,5L de água por pessoa, isotônicos ou sucos.",
                ],
                [
                  "Vestimenta",
                  "Agasalhos em camadas, segunda pele, anorak, gorro, luvas e bota/tênis de trilha com boa aderência.",
                ],
                [
                  "Acessórios",
                  "Protetor solar, capa de chuva, lanterna com pilhas extras e kit pessoal.",
                ],
              ].map(([titulo, texto], i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow">
                  <strong>{titulo}</strong>
                  <p className="mt-2">{texto}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
