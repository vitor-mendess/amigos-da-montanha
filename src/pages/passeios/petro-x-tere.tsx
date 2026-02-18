import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaWhatsapp, FaMountain } from "react-icons/fa";

const imagens = [
  "/imgs/petro-x-tere/01.jpg",
  "/imgs/petro-x-tere/02.jpg",
  "/imgs/petro-x-tere/03.jpg",
  "/imgs/petro-x-tere/04.jpg",
];

export default function PetroXTere() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="h-[80vh] bg-cover bg-center relative flex items-end"
        style={{
          backgroundImage: "url('/imgs/petro-x-tere/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 text-white">
          <span className="inline-flex items-center gap-2 bg-[#9C3F1A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaMountain /> Travessia • 3 dias • 33km
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Petro x Tere
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

            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Com certeza uma das <strong>travessias mais lindas do Brasil</strong>,
                a <strong>Petro x Tere</strong> passa por pontos icônicos como os
                <strong> Castelos do Açu</strong>, <strong>Portais de Hércules</strong> e
                a <strong>Pedra do Sino</strong>, ponto culminante da travessia.
              </p>

              <p>
                A travessia inicia na <strong>Mata Atlântica</strong> e logo migra
                para os <strong>campos de altitude</strong>, mantendo-se próxima
                dos <strong>2.000m de altitude</strong>. O percurso alterna subidas
                e descidas por morros e vales, com trechos técnicos como o
                <strong> Elevador</strong>, <strong>Mergulho</strong> e o famoso
                <strong> Cavalinho</strong>, já na subida da encosta da Pedra do Sino.
              </p>

              <p>
                Todos os trechos técnicos são realizados com{" "}
                <strong>total segurança</strong>. A travessia acontece ao longo de
                <strong> três dias</strong>, permitindo aproveitar cada momento
                dessa experiência única.
              </p>

              <p>
                <strong>Dia 1 (9km):</strong> Subida até o{" "}
                <strong>Abrigo do Açu</strong>, onde pernoitaremos em abrigo
                totalmente equipado com beliches e cozinha completa. No final
                da tarde, subiremos até os <strong>Castelos do Açu</strong> para
                assistir ao pôr do sol.
              </p>

              <p>
                <strong>Dia 2 (14km):</strong> Saída bem cedo para assistir ao
                nascer do sol nos <strong>Portais de Hércules</strong>, um dos
                pontos mais impressionantes da travessia. Seguimos até o{" "}
                <strong>Abrigo 4</strong>, onde pernoitamos. Ao chegar, deixamos
                as cargueiras e subimos até o <strong>Cume da Pedra do Sino</strong>
                para assistir ao pôr do sol.
              </p>

              <p>
                <strong>Dia 3 (10km):</strong> Assistimos a mais um nascer do sol,
                que poderá ser na <strong>Pedra do Sino</strong> ou na{" "}
                <strong>Pedra de São Pedro</strong>, e então seguimos para a
                descida final até a sede de <strong>Teresópolis</strong>.
              </p>
            </div>
          </div>

          {/* DADOS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { valor: "33km", label: "Distância" },
              { valor: "3 dias", label: "Duração" },
              { valor: "Alto", label: "Esforço" },
              { valor: "Médio", label: "Exposição" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow p-6 text-center"
              >
                <p className="text-3xl font-extrabold text-[#9C3F1A]">
                  {item.valor}
                </p>
                <p className="text-sm uppercase font-semibold mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* GALERIA */}
          <div>
            <h2 className="text-4xl font-extrabold mb-10">Galeria</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {imagens.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="rounded-2xl h-56 w-full object-cover hover:scale-105 transition cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* INCLUSO / NÃO INCLUSO */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-3xl font-bold mb-6">O que está incluso</h3>
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li>
                  Transporte Itatiaia / Barra Mansa / Resende / Volta Redonda x
                  Petrópolis e Teresópolis x Itatiaia / Barra Mansa / Resende /
                  Volta Redonda
                </li>
                <li>Entrada no PARNASO</li>
                <li>Guia credenciado Cadastur</li>
                <li>Camiseta personalizada (grupos acima de 10 pessoas)</li>
                <li>Consultoria técnica completa</li>
                <li>Filmagem com drone</li>
              </ul>

              <p className="text-sm mt-6 italic text-gray-600">
                * Temos equipamentos de camping para alugar. Consulte
                disponibilidade.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-3xl font-bold mb-6">Não incluso</h3>
              <ul className="space-y-3 text-lg list-disc list-inside">
                <li>Alimentação</li>
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
                (Estacionamento do Mc Donalds), Rodoviária de Itatiaia,
                Rodoviária de Barra Mansa e Rodoviária de Volta Redonda.
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
                  Recomendamos alimentação de 1h em 1h.
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
                <strong>Equipamento de camping</strong>
                <p className="mt-2">
                  Barraca, isolante térmico, saco de dormir, fogareiro, pratos e
                  talheres (caso opte por camping).
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow">
                <strong>Acessórios e eletrônicos</strong>
                <p className="mt-2">
                  Protetor solar, capa de chuva, lanterna, kit de primeiros
                  socorros, celular, power bank, câmera fotográfica.
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

