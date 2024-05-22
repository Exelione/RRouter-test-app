import { AboutPage } from './pages/AboutPage';
import { BlogLoader, BlogPage } from './pages/BlogPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SinglePage, SinglePostLoader } from './pages/SinglePage';
import { CreatePost, createPostAction } from './pages/CreatePost';
import EditPost, { updatePostAction } from './pages/EditPost';
import { LoginPage } from './pages/LoginPage';
import { RequireAuth } from './hoc/RequireAuth';
import ErrorPage from './pages/ErrorPage';



export const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<HomePage />} />
      <Route path='posts' element={<BlogPage />} loader={BlogLoader} errorElement={<ErrorPage/>} />
      <Route path='posts/:id' element={<SinglePage />} loader={SinglePostLoader} />
      <Route path='posts/:id/edit' element={
        <RequireAuth>
          <EditPost />
        </RequireAuth>} loader={SinglePostLoader} action={updatePostAction}/>
      <Route path='posts/new' element={
        <RequireAuth>
          <CreatePost />
        </RequireAuth>
    } action={createPostAction}/>
      <Route path='about' element={<AboutPage />}>
        <Route path="contacts" element={<h3>Our contact</h3>} />
        <Route path="team" element={<h3>Our team</h3>} />
      </Route>
      <Route path='login' element={<LoginPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  ))