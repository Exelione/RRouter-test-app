

import { AboutPage } from './pages/AboutPage';
import { BlogLoader, BlogPage } from './pages/BlogPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SinglePage, SinglePostLoader } from './pages/SinglePage';
import { CreatePost } from './pages/CreatePost';
import EditPost from './pages/EditPost';
import { LoginPage } from './pages/LoginPage';
import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path='posts' element={<BlogPage />} loader={BlogLoader}/>
    <Route path='posts/:id' element={<SinglePage />} loader={SinglePostLoader} />
    <Route path='posts/:id/edit' element={
      <RequireAuth>
        <EditPost />
      </RequireAuth>
    } />
    <Route path='posts/new' element={
      <RequireAuth>
        <CreatePost />
      </RequireAuth>} />
    <Route path='about' element={<AboutPage />}>
      <Route path="contacts" element={<p>Our contact</p>} />
      <Route path="team" element={<h1>Our team</h1>} />
    </Route>
    <Route path='login' element={<LoginPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
))

function App() {


  return (

    <AuthProvider>

    <RouterProvider router={router}/>

    </AuthProvider>
  )
}

export default App
