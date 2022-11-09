import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navbar, Welcome, Footer, Transactions, Market } from './components'
import { NotFound } from './pages'

const App = () => (
  <Router>
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Routes>
          <Route path="" element={<Welcome />} />
          <Route path="/market" element={<Market />} />
          <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
)

export default App
