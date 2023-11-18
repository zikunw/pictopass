import { useState } from "react"
import { Button } from "./components/ui/button"

enum Page {
  Homepage,
  About,
  Contact
}

function App() {

  const [page, setPage] = useState<Page>(Page.Homepage)

  return (
    <div className="">
      
    </div>
  )
}

export default App
