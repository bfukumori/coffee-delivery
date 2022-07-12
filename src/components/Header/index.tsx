import { HeaderContainer, MapIcon } from "./styles";
import Logo from "../../assets/logo.svg";
import { Cart } from "../Cart";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img
          src={Logo}
          alt="Copo de café roxo com detalhes brancos e nome Coffee Delivery escrito à direita"
        />
      </Link>
      <div>
        <div>
          <MapIcon size={24} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <Cart />
      </div>
    </HeaderContainer>
  );
}
