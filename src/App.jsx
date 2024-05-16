

import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage'
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SinglePage } from './pages/SinglePage';
import { CreatePost } from './pages/CreatePost';
import EditPost from './pages/EditPost';
import { LoginPage } from './pages/LoginPage';
import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

function App() {


  return (

    <AuthProvider>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='posts' element={<BlogPage />} />
          <Route path='posts/:id' element={<SinglePage />} />
          <Route path='posts/:id/edit' element={
            <RequireAuth>
              <EditPost />
            </RequireAuth>
          } />
          <Route path='posts/new' element={
            <RequireAuth>
              <CreatePost />
            </RequireAuth>} />
          <Route path='about/*' element={<AboutPage />}>
            <Route path="contacts" element={<p>Our contact</p>} />
            <Route path="team" element={<h1>Our team</h1>} />
          </Route>
          <Route path='login' element={<LoginPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>

      </Routes>

    </AuthProvider>
  )
}

export default App
