import "./header.css";

interface HeaderProps {
  avatarPic: string;
  encejLogo: string;
}
export default function Header({ avatarPic, encejLogo }: HeaderProps) {
  return (
    <div className="inicio">
      <div className=" img-avatar-div">
        <img src={avatarPic} className="avatar-pic" alt="" />
        <div>
          <h1 className="hello">Olá, Fulano</h1>
          <p className="hello-ej">CT Júnior</p>
        </div>
      </div>
      <div className="encej">
        <img src={encejLogo} className="encej-logo" alt="" />
      </div>
    </div>
  );
}
