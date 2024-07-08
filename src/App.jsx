import './App.css'
import './components/Home.css'
import Home from './components/Home'

function App() {
  return(
    <>
     <header>
        <div class="navigation">
        <div class="logo">
            <a href="#"><img src="https://cdn.pixabay.com/photo/2023/10/12/18/14/ai-generated-8311478_1280.jpg" alt="logo"/></a>
        </div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </nav>
    </div>
    </header>
   <Home/>
   <footer>
        <p><small>&copy; Copyright 2024, Example Corporation</small></p>
    </footer>
    </>
  )
}

export default App
