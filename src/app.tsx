import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home, NotFound } from './pages'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
