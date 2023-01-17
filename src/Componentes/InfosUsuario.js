import React from "react";

function InfosUsuario() {
  const nomeUsuario = "Carol"

  const userImage = "https://picsum.photos/400/400?a=1"

  return(
    <div className="box-usuario">
        <img src={userImage} alt="" />
        <h5>{nomeUsuario}</h5>
      </div>
  )
}

export default InfosUsuario