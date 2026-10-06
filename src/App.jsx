import './App.css'
import Home from './components/pages/Home'
import { UserProvider } from './context/User'
import { CategoriesProvider } from './context/CategoriesContext'
import { CartProvider } from './context/CartContext'
function App() {


  return (
    <>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <Home />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </>
  )
}

export default App
