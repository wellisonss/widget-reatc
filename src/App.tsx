interface TypeTest{
  text: string
}

function Button(props: TypeTest){
  return <button>{ props.text }</button>
}


function App() {
  return (
    <>
    <Button text="Manu"/>
    <Button text="Wellison"/>
    <Button text="Vida"/>
    </>
    )
  }
  
  export default App
  