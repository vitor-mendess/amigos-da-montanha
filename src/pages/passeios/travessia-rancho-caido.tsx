import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaWhatsapp, FaMountain } from "react-icons/fa";

const imagens = [
  "/imgs/rancho-caido/01.jpg",
  "/imgs/rancho-caido/02.jpg",
  "/imgs/rancho-caido/03.jpg",
  "/imgs/rancho-caido/04.jpg",
  "/imgs/rancho-caido/05.jpg",
  "/imgs/rancho-caido/06.jpg",
 
];

export default function RanchoCaido() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="h-[80vh] bg-cover bg-center relative flex items-end"
        style={{
          backgroundImage: "url('/imgs/rancho-caido/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 text-white">
          <span className="inline-flex items-center gap-2 bg-[#9C3F1A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaMountain /> Travessia • 2 dias • Parte Alta do PNI
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Rancho Caído
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
                Ao todo serão aproximadamente <strong>20 km de caminhada</strong>,
                percorridos em <strong>dois dias</strong>, avistando praticamente
                todos os atrativos da Parte Alta do PNI e realizando um giro de
                quase <strong>360º nas Agulhas Negras</strong>.
              </p>

              <p>
                <strong>Dia 1:</strong> Início no Posto Marcão, passando pela base
                do Pico das Agulhas Negras e Pedra do Altar, com uma visão
                sensacional de todo o planalto.
              </p>

              <p>
                Seguimos para o <strong>Vale do Aiuruoca</strong>, passando pela
                Cachoeira do Aiuruoca, a cachoeira mais alta do Brasil em relação
                à altitude (<strong>2350m</strong>).
              </p>

              <p>
                Após a cachoeira, caminhamos em direção à formação dos
                <strong> Ovos da Galinha</strong> (2380m), subindo até um mirante
                com vista para Visconde de Mauá. Seguimos então pelo
                <strong> Vale dos Dinossauros</strong>, margeando a nascente do
                Rio Preto até o local de camping: <strong>Rancho Caído</strong>.
              </p>

              <p>
                <strong>Dia 2:</strong> Enfrentamos uma pequena subida e depois o
                trecho conhecido como <strong>Mata Cavalo</strong>, excelente
                ponto para observar o nascer do sol. A descida leva cerca de
                <strong> 4 horas</strong> até a Cachoeira do Escorrega, em
                Visconde de Mauá.
              </p>

              <p>
                <strong>Outros atrativos:</strong> visão 360º do Planalto de
                Itatiaia, Pedra Selada, nascentes de água, Ovos da Galinha,
                Cachoeira do Aiuruoca e Agulhinha.
              </p>
            </div>
          </div>

          {/* DADOS DA TRAVESSIA */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { valor: "20km", label: "Distância" },
              { valor: "2 dias", label: "Duração" },
              { valor: "PNI", label: "Local" },
              { valor: "Médio", label: "Esforço" },
              { valor: "Médio", label: "Exposição" },
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
                  alt={`Rancho Caído ${index + 1}`}
                  className="rounded-2xl object-cover h-64 w-full hover:scale-[1.03] transition cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* INCLUSO / NÃO INCLUSO */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-3xl font-bold mb-6">O que está incluso</h3>
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li>Transporte Resende/Itatiaia x Posto Marcão e Maromba</li>
                <li>Consultoria técnica</li>
                <li>Guia</li>
                <li>Filmagem de drone</li>
              </ul>

              <p className="text-sm mt-6 italic text-gray-600">
                * Temos equipamentos de camping para alugar. Entrar em contato
                para verificar disponibilidade.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-3xl font-bold mb-6">Não incluso</h3>
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li>Alimentação</li>
                <li>Entrada do PNI</li>
                <li>Vestuário e equipamentos</li>
                <li>Despesas pessoais</li>
                <li>Medicamentos pessoais</li>
                <li>Passeios não descritos</li>
              </ul>
            </div>
          </div>

          {/* VALORES E HORÁRIOS */}
          <div className="bg-white rounded-3xl p-10 shadow-md">
            <h2 className="text-4xl font-extrabold mb-8">
              Valores e horários
            </h2>

            <div className="space-y-4 text-lg">
              <p>
                <strong>Hospedagem:</strong> Temos hospedagem em Itatiaia —
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
                (Estacionamento do Mc Donalds) ou Rodoviária de Itatiaia.
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
                  Sanduíches, chocolates, barras de cereais, frutas e refeições
                  leves. Alimentar-se de 1h em 1h.
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
                  Roupas em camadas, segunda pele, anorak, bota ou tênis de trilha,
                  gorro e luvas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <strong>Equipamento de camping</strong>
                <p className="mt-2">
                  Barraca, isolante térmico, saco de dormir, fogareiro, pratos e
                  talheres.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <strong>Acessórios pessoais</strong>
                <p className="mt-2">
                  Protetor solar, capa de chuva, lanterna, kit de primeiros
                  socorros e remédios pessoais.
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

