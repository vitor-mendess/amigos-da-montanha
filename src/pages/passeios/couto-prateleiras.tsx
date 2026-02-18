import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaWhatsapp, FaMountain } from "react-icons/fa";

const imagens = [
  "/imgs/couto_prateleiras/01.jpg",
  "/imgs/couto_prateleiras/02.jpg",
  "/imgs/couto_prateleiras/03.jpg",
  "/imgs/couto_prateleiras/04.jpg",
  "/imgs/couto_prateleiras/05.jpg",
  "/imgs/couto_prateleiras/06.jpg",
];

export default function CircuitoCoutoPrateleiras() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section
        className="h-[80vh] bg-cover bg-center relative flex items-end"
        style={{
          backgroundImage: "url('/imgs/couto_prateleiras/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 text-white">
          <span className="inline-flex items-center gap-2 bg-[#9C3F1A] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaMountain /> Moderada • 1 dia • 2680m
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Circuito Couto x Prateleiras
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

          {/* DADOS */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { valor: "13km", label: "Distância" },
              { valor: "2680m", label: "Altitude" },
              { valor: "8h", label: "Duração" },
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
                <p className="text-sm font-semibold uppercase mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* O QUE FAREMOS */}
          <div>
            <h2 className="text-4xl font-extrabold mb-8">O que faremos</h2>

            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                O início do roteiro é o mesmo caminho para o
                <strong> Morro do Couto</strong>, partindo do estacionamento
                próximo ao <strong>Posto Marcão</strong>.
              </p>

              <p>
                Seguimos pela estrada da antena de Furnas e entramos à direita,
                onde começa a trilha em direção ao cume do Morro do Couto.
              </p>

              <p>
                Após um pequeno trecho de trepa-pedra, alcançamos o
                <strong> cume do Morro do Couto</strong>, com seus
                <strong> 2680m de altitude</strong>, o 8º ponto mais alto do
                Brasil e o 2º mais alto do estado do Rio de Janeiro.
              </p>

              <p>
                A partir daí seguimos por um sobe e desce tranquilo pela crista
                da montanha, passando por locais incríveis como a
                <strong> Toca do Índio</strong> e a
                <strong> Pedra do Balanço</strong>.
              </p>

              <p>
                Dependendo da disposição do grupo, ainda é possível visitar a
                <strong> Pedra da Tartaruga</strong> e a
                <strong> Pedra da Maçã</strong>.
              </p>
            </div>
          </div>

          {/* GALERIA */}
          <div>
            <h2 className="text-4xl font-extrabold mb-10">Galeria</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {imagens.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Circuito Couto ${index + 1}`}
                  className="rounded-2xl object-cover h-64 w-full hover:scale-[1.03] transition cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* INCLUSO / NÃO INCLUSO */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-3xl font-bold mb-6">O que está incluso</h3>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Consultoria técnica</li>
                <li>Guia especializado</li>
                <li>Equipamentos</li>
              </ul>

              <p className="text-sm mt-6 italic text-gray-600">
                * Temos algumas vagas no nosso carro para quem não possui
                transporte até a portaria do PNI.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md">
              <h3 className="text-3xl font-bold mb-6">Não incluso</h3>
              <ul className="list-disc list-inside space-y-3 text-lg">
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
              {[
                ["Alimentação", "Lanches leves, refeições e alimentação de 1h em 1h."],
                ["Hidratação", "Mínimo de 1,5L de água por pessoa."],
                ["Vestimenta", "Roupas em camadas, bota ou tênis de trilha."],
                ["Acessórios", "Protetor solar, capa de chuva, lanterna e kit básico."],
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
