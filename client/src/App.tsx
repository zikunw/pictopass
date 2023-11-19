import { useState } from "react"
import { NavBar } from "./components/NavBar"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterationPage from "./pages/RegistrationPage"
import TestPage from "./pages/TestPage"

enum Page {
  Homepage,
  Login,
  Registeration,
  Test
}

function App() {

  const [page, setPage] = useState<Page>(Page.Homepage)
  return (
    <main className="flex flex-col min-h-screen">
      <NavBar setPage={setPage}/>
      {page === Page.Homepage && <HomePage/>}
      {page === Page.Login && <LoginPage setPage={setPage}/>}
      {page === Page.Registeration && <RegisterationPage setPage={setPage}/>}
      {page === Page.Test && <TestPage />}
    </main>
  );
}

export default App
