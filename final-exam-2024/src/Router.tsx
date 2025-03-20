import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import FinalExam2024 from './routes/Finalexam2024';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/todo-app" element={<FinalExam2024 />}></Route>
    </>
  )
);

export default router;
