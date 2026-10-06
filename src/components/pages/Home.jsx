import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Directory from '../Directory'
import { CategoriesList as categories } from '../../categoriesList'
import Navigation from '../layout/Navigation'
import Shop from './Shop'
import SignIn from '../authentication/SignIn'
import Checkout from './Checkout'
function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={
            <Directory categories={categories} />
          } />
          <Route path='shop/*' element={<Shop />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Home
// 7.Nested Routes in Shop 