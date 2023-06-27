import useSearch from "../../hooks/useSearch";

import * as Styled from "./styles";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  const { info, setInfo, text, setText } = useSearch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Styled.SHeaderFixed>
      <Styled.SHeader>
        <Styled.SLeft>
          <Styled.SArrowIcon />
          ANIMES
        </Styled.SLeft>
        <Styled.SCenter>
          {" "}
          <Link to="/" style={{ textDecoration: 'none', color: 'black'}}>Animes</Link>
        </Styled.SCenter>
        <Styled.SRight>
          <input value={text} onChange={handleInputChange} placeholder="Pesquise seu anime..." />
          <Link to="/favoritos">
            {
              <MdFavoriteBorder
                style={{ height: "50px", width: "40px", color: "red" }}
              />
            }
          </Link>
        </Styled.SRight>
      </Styled.SHeader>
    </Styled.SHeaderFixed>
  );
};

export default Navbar;
