import Menu from "./components/Smart/Menu"
import Form from "./views/Form"

function App() {

  return (
    <div className="h-[50rem] w-[77rem] ml-4 mt-3 relative">
      <div className="bg-teal-600 w-full h-full rounded-[3rem]">
        <Menu/>
        <Form/>
      </div>
    </div>
  )
}

export default App
