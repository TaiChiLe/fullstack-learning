import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Root from './routes/Root';
import About from './routes/About';
import Item1 from './routes/Item-1';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route path="item-1" element={<Item1 />} />
      </Route>
      <Route path="about" element={<About />}></Route>
    </>
  )
);

export default router;
