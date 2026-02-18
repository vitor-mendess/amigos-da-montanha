import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaWhatsapp, FaMountain } from "react-icons/fa";
import { useState } from "react";

const imagens = [
  "/imgs/morrodocouto/01.jpg",
  "/imgs/morrodocouto/02.jpg",
  "/imgs/morrodocouto/03.jpg",
  "/imgs/morrodocouto/04.jpg",
];

export default function MorroDoCouto() {
  const [imagemAberta, setImagemAberta] = useState<string | null>(null);

  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="h-[80vh] bg-cover bg-center relative flex items-end"
        style={{
          backgroundImage: "url('/imgs/morrodocouto/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 text-white">
          <span className="inline-flex items-center gap-2 bg-[#9C3F1A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaMountain /> Baixo • 1 dia • 2680m
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Morro do Couto
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
                O <strong>Morro do Couto</strong>, com seus 2680m de altitude,
                é o 8º ponto mais alto do Brasil e 2º mais alto do Estado do
                Rio de Janeiro. Certamente é o cume mais acessado do PNI,
                pois sua trilha é considerada fácil.
              </p>

              <p>
                Mas não se engane, temos relatos de pessoas que se perdem
                e/ou não conseguem chegar no cume.
              </p>

              <p>
                Iniciaremos a caminhada pelo estacionamento do
                <strong> Posto Marcão</strong> em direção ao Morro da Antena.
                Quase chegando à Antena de Furnas iniciamos a trilha
                propriamente dita em sentido ao Morro do Couto.
              </p>

              <p>
                Após apenas 500m já temos uma vista incrível da
                <strong> Serra Fina</strong> e seu vale.
              </p>

              <p>
                Depois de cerca de duas horas de caminhada fácil,
                chegamos ao topo, onde é possível contemplar o
                <strong> Pico das Agulhas Negras</strong>,
                <strong> Prateleiras</strong>,
                <strong> Pedra do Altar</strong>,
                <strong> Asa de Hermes</strong>,
                o <strong>Abrigo Rebouças</strong> e a Serra Fina.
              </p>
            </div>
          </div>

          {/* DADOS */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { valor: "6km", label: "Distância" },
              { valor: "2680m", label: "Altitude" },
              { valor: "3h", label: "Duração" },
              { valor: "Baixo", label: "Esforço" },
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
                  alt={`Morro do Couto ${index + 1}`}
                  onClick={() => setImagemAberta(img)}
                  className="cursor-pointer rounded-2xl object-cover h-64 w-full hover:scale-[1.03] transition"
                />
              ))}
            </div>
          </div>

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
              </ul>

              <p className="text-sm mt-6 italic text-gray-600">
                * Temos vagas no carro para quem não possui transporte até a
                portaria do PNI (valor para ajudar nos gastos).
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-3xl font-bold mb-6">Não incluso</h3>
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li>Alimentação</li>
                <li>Entrada do PNI</li>
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

    <div className="bg-white p-6 rounded-2xl shadow">
      <strong>Alimentação</strong>
      <p className="mt-2">
        Sanduíches, chocolates, barra de cereais, frutas e outros lanches
        de sua preferência. Recomendamos alimentação de 1h em 1h.
        Levar quantidade suficiente para consumo durante a trilha e
        também refeição como enlatados, macarrão ou alimentos liofilizados.
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow">
      <strong>Hidratação</strong>
      <p className="mt-2">
        Recipiente com água (mínimo de 1,5 litros por pessoa),
        isotônicos ou sucos.
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow">
      <strong>Vestimenta</strong>
      <p className="mt-2">
        Uso de agasalhos em camadas (segunda pele + casaco ou anorak).
        Bota ou tênis de caminhada já amaciado, com solado de boa aderência.
        Gorro, luvas e roupa extra para eventual troca em caso de chuva.
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow">
      <strong>Acessórios Pessoais</strong>
      <p className="mt-2">
        Protetor solar, protetor labial, chapéu ou boné,
        capa de chuva, sacos para lixo, papel higiênico,
        lanterna com pilhas extras, kit de primeiros socorros
        e remédios de uso pessoal.
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow md:col-span-2">
      <strong>Máquina Fotográfica</strong>
      <p className="mt-2">
        Verifique na véspera se as pilhas ou baterias estão carregadas,
        cartão de memória disponível e leve carregador ou baterias extras.
      </p>
    </div>

  </div>
</div>


        </div>
      </section>

      <Footer />
    </>
  );
}

