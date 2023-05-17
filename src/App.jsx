import Menu from "./components/Smart/Menu"
import Form from "./views/Form"

function App() {

  return (
    <div className="h-screen w-screen relative">
      <div className=" bg-[#54ab95] w-full h-full">
        <Menu/>
        <Form/>
      </div>
    </div>
  )
}

export default App
