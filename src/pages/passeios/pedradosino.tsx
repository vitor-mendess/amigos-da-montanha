import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaWhatsapp, FaMountain } from "react-icons/fa";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const imagens = [
  "/imgs/pedra-do-sino/01.jpg",
  "/imgs/pedra-do-sino/02.jpg",
  "/imgs/pedra-do-sino/03.jpg",
  "/imgs/pedra-do-sino/04.jpg",
  "/imgs/pedra-do-sino/05.jpg",
  "/imgs/pedra-do-sino/06.jpg",
  "/imgs/pedra-do-sino/07.jpg",
  "/imgs/pedra-do-sino/08.jpg",
  "/imgs/pedra-do-sino/09.jpg",

];

export default function PedraDoSino() {

  const [indiceImagem, setIndiceImagem] = useState<number | null>(null);

const abrirImagem = (index: number) => setIndiceImagem(index);
const fecharImagem = () => setIndiceImagem(null);

const proximaImagem = () => {
  if (indiceImagem !== null) setIndiceImagem((indiceImagem + 1) % imagens.length);
};

const imagemAnterior = () => {
  if (indiceImagem !== null) setIndiceImagem((indiceImagem - 1 + imagens.length) % imagens.length);
};

  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="h-[80vh] bg-cover bg-center relative flex items-end"
        style={{
          backgroundImage: "url('/imgs/pedra-do-sino/hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 text-white">
          <span className="inline-flex items-center gap-2 bg-[#9C3F1A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaMountain /> Moderada Leve • 1 dia • 2670m
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Pedra do Sino
          </h1>

{/* BOTÕES WHATSAPP */}
<div className="flex flex-col sm:flex-row gap-4 max-w-none">
  <a
    href="https://wa.me/5524988418212"
    target="_blank"
    className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 px-10 py-3 rounded-full text-lg font-bold transition w-full sm:w-auto whitespace-nowrap"
  >
    <FaWhatsapp className="text-2xl" />
    <span>Quero participar - Roberto</span>
  </a>

  <a
    href="https://wa.me/5524992329540"
    target="_blank"
    className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 px-10 py-3 rounded-full text-lg font-bold transition w-full sm:w-auto whitespace-nowrap"
  >
    <FaWhatsapp className="text-2xl" />
    <span>Quero participar - Luis Felipe</span>
  </a>
</div>
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
                Podendo ser iniciada por dois caminhos, <strong>Circuito 5 Lagos</strong> ou
                <strong> Abrigo Rebouças</strong>, a distância total vai depender de qual
                escolha de caminho para iniciar e terminar a trilha, sendo que a
                opção mais curta é o Circuito 5 Lagos.
              </p>

              <p>
                Existem alguns pontos de água até chegar na
                <strong> Cachoeira do Aiuruoca</strong>, onde será certa a nossa
                parada para apreciação e banho para os mais corajosos.
              </p>

              <p>
                Depois seguimos em direção aos <strong>Ovos da Galinha</strong>,
                uma formação rochosa única e bastante curiosa. Dali já avistamos
                a subida final para alcançar o cume da Pedra do Sino.
              </p>

              <p>
                A subida final acontece sobre uma laje de pedra inclinada até o
                <strong> 9º ponto mais alto do país</strong>. Esse é o último
                desafio para alcançar o cume do Sino, a
                <strong> 2670m de altitude</strong>. Depois, é só lembrar que
                estamos apenas na metade do caminho — e ainda temos toda a trilha
                de volta.
              </p>
            </div>
          </div>

          {/* DADOS DA TRILHA */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { valor: "19km", label: "Distância" },
              { valor: "2670m", label: "Altitude" },
              { valor: "10h", label: "Duração" },
              { valor: "Médio", label: "Esforço" },
              { valor: "Baixo", label: "Exposição" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 text-center"
              >
                <p className="text-3xl font-extrabold text-[#9C3F1A]">
                  {item.valor}
                </p>
                <p className="text-sm font-semibold tracking-wide uppercase mt-2">
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
        alt={`Pedra do Sino ${index + 1}`}
        onClick={() => abrirImagem(index)}
        className="cursor-pointer rounded-2xl object-cover h-64 w-full hover:scale-[1.03] transition"
      />
    ))}
  </div>
</div>

{/* LIGHTBOX */}
{indiceImagem !== null && (
  <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
    <button className="absolute top-5 right-5 text-white text-3xl" onClick={fecharImagem}>
      <FaTimes />
    </button>

    <button className="absolute left-5 text-white text-4xl hover:text-gray-300" onClick={imagemAnterior}>
      <FaArrowLeft />
    </button>

    <img
      src={imagens[indiceImagem]}
      className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
    />

    <button className="absolute right-5 text-white text-4xl hover:text-gray-300" onClick={proximaImagem}>
      <FaArrowRight />
    </button>
  </div>
)}


          {/* INCLUSO / NÃO INCLUSO */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-3xl font-bold mb-6">O que está incluso</h3>
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li>Consultoria técnica</li>
                <li>Guia especializado</li>
                <li>Entrada do Parque</li>
                <li>Seguro Aventura</li>
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

          {/* TRANSPORTE */}
<div className="bg-white rounded-3xl p-8 shadow-md border border-[#d9c29c]">
  <h3 className="text-3xl font-bold mb-6 text-[#1C1C1C]">
    🚗 Transporte disponível
  </h3>

  <div className="space-y-4 text-lg leading-relaxed text-[#2b2b2b]">
    <p>
      Agora temos transporte próprio para até 7 pessoas.
    </p>

    <p>
      💵 Valores do transporte por pessoa.
    </p>

    <p>
      Entre em contato para receber os valores e ajudarmos a
      viabilizar a logística da sua experiência.
    </p>
  </div>
</div>

          

          {/* RECOMENDAÇÕES */}
          <div>
            <h2 className="text-4xl font-extrabold mb-10">Recomendações</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow">
                <strong>Alimentação</strong>
                <p className="mt-2">
                  Sanduíches, chocolates, barras de cereais, frutas e lanches.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <strong>Hidratação</strong>
                <p className="mt-2">
                  Recipiente com no mínimo 1,5L de água, isotônicos ou sucos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <strong>Vestimenta</strong>
                <p className="mt-2">
                  Agasalhos em camadas, segunda pele, anorak, bota ou tênis de
                  trilha já amaciado, gorro e luvas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <strong>Acessórios</strong>
                <p className="mt-2">
                  Protetor solar, capa de chuva, lanterna e remédios pessoais.
                </p>
              </div>
            </div>
          </div>

          

          {/* VALORES E HORÁRIOS */}
<div className="rounded-3xl p-10 shadow-md text-center bg-[#E8D6B3]">
  <h2 className="text-4xl font-extrabold mb-6 text-[#1C1C1C]">
    Valores e horários
  </h2>

  <p className="text-lg mb-8 text-[#1C1C1C]">
    Clique abaixo para consultar valores, formas de pagamento e horários de saída.
  </p>

  <a
    href="https://agenda-am.lovable.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-[#9C3F1A] text-white font-bold px-8 py-3 rounded-full hover:scale-105 transition"
  >
    Clique aqui para saber mais
  </a>
</div>

        </div>
      </section>

      <Footer />
    </>
  );
}
