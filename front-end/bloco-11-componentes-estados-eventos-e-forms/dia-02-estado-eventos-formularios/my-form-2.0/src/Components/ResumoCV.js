import React from "react";

class ResumoCV extends React.Component {
  render() {
    const { handleChange } = this.props
    const { value } = this.props
    return (
      <label htmlFor='input-resumo'> Resumo do Currículo:
        <textarea id="input-resumo" name="resumocv" onChange={handleChange} value={value}></textarea>
      </label>
    )
  }
}

export default ResumoCV;