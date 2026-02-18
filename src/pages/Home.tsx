import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  FaUserTie,
  FaRoute,
  FaHandshake,
  FaStopwatch,
  FaShieldAlt,
  FaShuttleVan,
} from "react-icons/fa";

// IMAGENS
import picoAgulhas from "../assets/locais/pico-agulhas.jpg";
import macicoPrateleiras from "../assets/locais/macico-prateleiras.jpg";
import circuitoCouto from "../assets/locais/circuito-couto.jpg";
import pedraAltar from "../assets/locais/pedra-altar.jpg";

export default function Home() {
  const locais = [
    {
      id: 1,
      nome: "Pico das Agulhas Negras",
      img: picoAgulhas,
      link: "/experiencia/agulhas-negras",
    },
    {
      id: 2,
      nome: "Maciço das Prateleiras",
      img: macicoPrateleiras,
      link: "/experiencia/prateleiras",
    },
    {
      id: 3,
      nome: "Circuito Couto x Prateleiras",
      img: circuitoCouto,
      link: "/experiencia/couto-prateleiras",
    },
    {
      id: 4,
      nome: "Pedra do Altar",
      img: pedraAltar,
      link: "/experiencia/pedra-do-altar",
    },
  ];

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative h-[100vh] w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover z-0"
        >
          <source src="/videoo.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#1C1C1C]/60 z-10" />

        <div className="relative z-20 flex h-full flex-col justify-center max-w-2xl px-6 text-[#E8D6B3]">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            GRANDES JORNADAS <br /> COMEÇAM AQUI
          </h1>

          <p className="text-lg md:text-xl mb-8">
            Experiências autênticas na montanha, com segurança e conexão real.
          </p>

          <a
            href="https://wa.me/5524988418212"
            target="_blank"
            className="inline-block px-8 py-4 bg-[#C98A3A] text-[#1C1C1C] rounded-full font-semibold text-lg hover:bg-[#9C3F1A] hover:text-white transition"
          >
            Agende sua trilha
          </a>
        </div>
      </section>

      {/* LOCAIS */}
      <section className="w-full py-20 bg-[#E8D6B3]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {locais.map((local) => (
            <div
              key={local.id}
              className="relative group h-[70vh] rounded-3xl overflow-hidden"
            >
              <img
                src={local.img}
                alt={local.nome}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-[#1C1C1C]/55 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-[#E8D6B3] mb-4">
                  {local.nome}
                </h3>

                <Link
                  to={local.link}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="inline-block px-6 py-3 border-2 border-[#E8D6B3] rounded-full text-[#E8D6B3] font-semibold hover:bg-[#E8D6B3] hover:text-[#1C1C1C] transition"
                >
                  Saiba mais
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 bg-[#E8D6B3] text-[#1C1C1C]">
        <div className="max-w-7xl mx-auto text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            NOSSOS DIFERENCIAIS
          </h2>
          <p className="mt-4 text-lg">
            Montanhismo com propósito, cuidado e respeito.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">
          {[
            {
              icon: <FaUserTie />,
              title: "Guias especializados",
              text: "Experiência real em montanha",
            },
            {
              icon: <FaRoute />,
              title: "Roteiros personalizados",
              text: "Criados junto com você",
            },
            {
              icon: <FaHandshake />,
              title: "Parceria",
              text: "Aqui você é da família",
            },
            {
              icon: <FaStopwatch />,
              title: "Pontualidade",
              text: "Segurança começa no tempo",
            },
            {
              icon: <FaShieldAlt />,
              title: "Segurança",
              text: "Planejamento e cuidado total",
            },
            {
              icon: <FaShuttleVan />,
              title: "Transporte",
              text: "Logística facilitada",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="text-4xl text-[#9C3F1A]">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}










