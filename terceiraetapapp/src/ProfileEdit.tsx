import React, { useState, FormEvent, ChangeEvent } from "react";
import "./ProfileEdit.css";
import EditPicIcon from "./assets/edit-image-icon.svg";
import Button from "./components/buttons/button";
import Footer from "./components/footer/footer";

function ProfileEdit() {
  const [companyName, setCompanyName] = useState("");
  const [profilePic, setProfilePic] = useState<string | ArrayBuffer | null>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleCompanyNameChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCompanyName(event.target.value);
  };

  const handleProfilePicChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        setSelectedFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Simulação de envio para o backend (ainda não há uma API)
    console.log("Dados enviados:", { companyName, profilePic });

    // Limpar o campo de seleção e a imagem após o envio
    setCompanyName("");
    setProfilePic("");
    setSelectedFile(null);
  };

  return (
    <section className="edit-profile-body">
      <h1>Alterar foto e Empresa Junior</h1>
      <form onSubmit={handleSubmit} className="edit-profile-form">
        {/* Campo para a foto do perfil */}
        <div>
          <label className="custom-file-upload">
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
            />
            <img src={EditPicIcon} alt="upload icon" className="upload-icon" />
          </label>
          {profilePic && (
            <div>
              <img
                src={profilePic.toString()}
                alt="profile"
                className="profile-pic"
              />
            </div>
          )}
        </div>

        {/* Campo para o nome da empresa */}
        <label>
          <select value={companyName} onChange={handleCompanyNameChange}>
            <option value="" disabled hidden>
              Empresa Júnior
            </option>
            {/* Adicionar opções conforme o backend */}
            <option value="Empresa 1">CT Junior</option>
            <option value="Empresa 2">Adapti</option>
            <option value="Empresa 3">Zetta</option>
          </select>
        </label>
        <div className="push-footer-down">
          {/* Botão para enviar o formulário */}
          <Button insideText="Salvar" className="button-style"></Button>
        </div>
        <Footer></Footer>
      </form>
    </section>
  );
}

export default ProfileEdit;
