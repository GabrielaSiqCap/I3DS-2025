import "./App.css";
import perfilDark from "./img/rapunzel.jpg";
import perfilLight from "./img/jose.jpg";

import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/Switch";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/rodape/Rodape";
import { useState } from "react";

const App = () => {
  const [isLight, setIsLight] = useState(true);

  const troca = () => {
    setIsLight(!isLight);
  };

  return (
    <div id="App" className={isLight ? "light" : ""}>

<div id="container">

    <Perfil fotoPerfil={isLight ? perfilLight : perfilDark}>@siqueiracaputti</Perfil>

    <Switch troca={troca} isLight={isLight} />

<div id="links">
    <ul>
    <Links link={"https://github.com/GabrielaSiqCap"}>GitHub</Links>
    <Links link={"https://www.instagram.com/siqueiracaputti/"}>Instagram</Links>
    <Links link={"https://br.pinterest.com/siqueiracaputti/"}>Pinterest</Links>
    <Links link={"https://open.spotify.com/user/31ztpuy6xtjfys54iyinasag662a"}>Spotify</Links>
    </ul>
    </div>

<div id="socialLinks">
  <SocialLinks 
  link={'https://github.com/GabrielaSiqCap'}
  icon={"logo-github"}
  />
  <SocialLinks 
  link={'https://www.instagram.com/siqueiracaputti/'}
  icon={"logo-instagram"}
  />
  <SocialLinks 
  link={'https://br.pinterest.com/siqueiracaputti/'}
  icon={"logo-pinterest"}
  />
  <SocialLinks 
  link={'https://open.spotify.com/user/31ztpuy6xtjfys54iyinasag662a'}
  icon={"play-circle-outline"}
  />
</div>

<Rodape>gabriela</Rodape>

    </div>
  </div>
  )
}

export default App
