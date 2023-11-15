import './header.css';

interface HeaderProps{
    avatarPic: string,
    encejLogo: string
}
export default function Header({avatarPic, encejLogo} : HeaderProps){
    return(
        <div className="inicio">
        <div className=" img-avatar-div">
            <img src={avatarPic}className="avatar-pic" alt="" />
            <h1 className="hello">Olá, Fulano</h1>
        </div>
        <div className="encej">
            <img src={encejLogo} className="encej-logo" alt="" />
        </div>
    </div>
    );
}