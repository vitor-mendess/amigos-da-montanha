import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

/* PÁGINAS PRINCIPAIS */
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Experiencia from "./pages/Experiencia";
import Agenda from "./pages/Agenda";
import Depoimentos from "./pages/Depoimentos";

/* PASSEIOS */
import PedraDoSino from "./pages/passeios/pedradosino";
import Prateleiras from "./pages/passeios/prateleiras";
import CoutoPrateleiras from "./pages/passeios/couto-prateleiras";
import AgulhasNegras from "./pages/passeios/agulhas-negras";
import ChapadaDaLua from "./pages/passeios/chapada-da-lua";
import AsaDeHermes from "./pages/passeios/asa-de-hermes";
import TravessiaRanchoCaido from "./pages/passeios/travessia-rancho-caido";
import TravessiaRuyBraga from "./pages/passeios/travessia-ruy-braga";
import TravessiaSerraNegra from "./pages/passeios/travessia-serra-negra";
import PetroXTere from "./pages/passeios/petro-x-tere";
import Circuito5Lagos from "./pages/passeios/Circuito5Lagos";
import MorroDoCouto from "./pages/passeios/MorroDoCouto";
import SerrilhaDosCristais from "./pages/passeios/SerrilhaDosCristais";
import PedraDoAltar from "./pages/passeios/pedra-do-altar";
import PedraDosEnamorados from "./pages/passeios/PedraDosEnamorados";
import PedraSelada from "./pages/passeios/PedraSelada";
import CapimAmarelo from "./pages/passeios/CapimAmarelo";
import TravessiaSerraFina from "./pages/passeios/TravessiaSerraFina";





/* COMPONENTES */
import SocialFixed from "./components/SocialFixed";

export default function App() {
  return (
    <BrowserRouter>
      <SocialFixed />
      <ScrollToTop />

      <Routes>
        {/* ROTAS PRINCIPAIS */}
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/depoimentos" element={<Depoimentos />} />

        {/* ROTAS DE PASSEIOS */}
        <Route
          path="/experiencia/pedra-do-sino"
          element={<PedraDoSino />}
        />

        <Route
          path="/experiencia/prateleiras"
          element={<Prateleiras />}
        />

        <Route
          path="/experiencia/couto-prateleiras"
          element={<CoutoPrateleiras />}
        />

        <Route
          path="/experiencia/agulhas-negras"
          element={<AgulhasNegras />}
        />

        <Route
          path="/experiencia/chapada-da-lua"
          element={<ChapadaDaLua />}
        />

        <Route
          path="/experiencia/asa-de-hermes"
          element={<AsaDeHermes />}
        />

        <Route
        path="/experiencia/travessia-rancho-caido"
        element={<TravessiaRanchoCaido />}
         />

        <Route
          path="/experiencia/travessia-ruy-braga"
          element={<TravessiaRuyBraga />}
        />

        <Route
          path="/experiencia/travessia-serra-negra"
          element={<TravessiaSerraNegra />}
        />

        <Route
          path="/experiencia/petro-x-tere"
          element={<PetroXTere />}
        />

        <Route path="/experiencia/circuito-5-lagos" element={<Circuito5Lagos />} />

        <Route path="/experiencia/morro-do-couto" element={<MorroDoCouto />} />

        <Route
          path="/experiencia/serrilha-dos-cristais"
          element={<SerrilhaDosCristais />}
        />

        <Route
        path="/experiencia/pedra-do-altar"
        element={<PedraDoAltar />}
      />

      <Route
        path="/experiencia/pedra-dos-enamorados"
        element={<PedraDosEnamorados />}
      />

      <Route
      path="/experiencia/pedra-selada"
      element={<PedraSelada />}
    />

    <Route
      path="/experiencia/capim-amarelo-serra-fina"
      element={<CapimAmarelo />}
    />

    <Route
      path="/experiencia/travessia-da-serra-fina"
      element={<TravessiaSerraFina />}
    />






        
      </Routes>
    </BrowserRouter>
  );
}








