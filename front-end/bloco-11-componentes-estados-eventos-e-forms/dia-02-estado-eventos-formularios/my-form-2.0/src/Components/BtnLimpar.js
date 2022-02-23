import React from "react";

class BtnLimpar extends React.Component {
  render() {
    const { handleClear } = this.props
    return (
      <button onClick={handleClear}>Limpar Forms</button>
    )
  }
}

export default BtnLimpar;