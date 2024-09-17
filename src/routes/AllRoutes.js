import { Routes, Route } from 'react-router-dom';
import { PageNotFound, WordCount } from '../components';


export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<WordCount />}/>
            <Route path='/*' element={<PageNotFound />}/>
        </Routes>
    </>
  )
}
