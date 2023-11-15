import ctLogo from "../../assets/Logo-CT.svg";
import jujuLogo from "../../assets/Logo-Juju.svg";
import './footer.css'

export default function Header() {
  return (
    <div className="logos">
      <img src={ctLogo} className="ct"/>
      <img src={jujuLogo} className="juju"/>
    </div>
  );
}
