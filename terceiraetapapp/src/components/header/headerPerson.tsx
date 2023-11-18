interface HeaderProps {
  avatarPic: string;
}
export default function HeaderPerson({ avatarPic }: HeaderProps) {
  return (
    <div className="inicio">
      <div className="img-avatar-div">
        <img src={avatarPic} className="avatar-pic-person" alt="" />
        <div>
          <h1 className="header-person-name">Fulano</h1>
          <p className="hello-ej-person">CT Júnior</p>
        </div>
      </div>
    </div>
  );
}
