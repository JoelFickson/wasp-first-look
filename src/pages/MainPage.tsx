
import NavBar from '../components/NavBar'
import '../styles/Main.css'

export const MainPage = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      <NavBar />

      <h2 className="welcome-title">
        Welcome to Wasp - Let me teach you a thing or two about it
      </h2>

      <div className="buttons">
        Oh Hello, how are you doing? Just some random coder trying out Wasp
      </div>

    </div>
  )
}
