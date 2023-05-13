import Menu from "./components/Smart/Menu"
import Form from "./views/Form"

function App() {

  return (
    <div className="h-[50rem] w-[77rem] ml-4 mt-3 relative">
      <div className="bg-gradient-to-r from-[#2F0F5D] via-[#0EA293] to-[#27E1C1] to-[#F5F3C1] w-full h-full rounded-[3rem]">
        <Menu/>
        <Form/>
      </div>
    </div>
  )
}

export default App
