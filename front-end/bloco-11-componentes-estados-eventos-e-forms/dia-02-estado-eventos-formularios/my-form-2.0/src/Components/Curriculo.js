import React from "react";

class Curriculo extends React.Component {
  render() {
    const { data } = this.props
    return (
      <>
       <div>
        <h2>{data.name}</h2>
        <p>{data.email}</p>
        <p>{data.cpf}</p>
        <p>{data.endereco}</p>
        <p>{data.cidade}</p>
        <p>{data.estado}</p>
        <p>{data.tipo}</p>
      </div>

      <div>
        <p>{data.resumocv}</p>
        <p>{data.cargo}</p>
        <p>{data.desCargo}</p>
      </div>
      </>
     
    )
  }
}

export default Curriculo