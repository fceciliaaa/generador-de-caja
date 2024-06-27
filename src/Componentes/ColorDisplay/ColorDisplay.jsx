const ColorDisplay = (props) => {


  const estilosCajaColor = {
    backgroundColor: props.colorAMostrar,
    width: '200px',
    height: '200px',
    marginTop: '30px',
    borderRadius: '3px',
  }
  return (
    <>
      <div style={estilosCajaColor}></div>
    </>
  )
}

export default ColorDisplay;