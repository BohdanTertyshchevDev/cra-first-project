import AlohaDashboard from "./AlohaDashboard/AlohaDashboard";
import UserList from "./UsersList/UserList";
import CounterPage from "./Counter/CounterPage";
import Scene from "./Scene/Scene";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


function App() {
    return(
        <BrowserRouter>
        <ul>
            <li><Link to="aloha">Go to Aloha</Link></li>
            <li><Link to="users">Go to Users</Link></li>
            <li><Link to="counter">Go to Counter</Link></li>
            <li><Link to="scene">Go to Scene</Link></li>
        </ul>
        <Routes>
            <Route index element={<Home/>} />
            <Route path="/aloha" element={<AlohaDashboard/>} />
            <Route path="/users" element={<UserList/>} />
            <Route path="/counter" element={<CounterPage/>} />
            <Route path="/scene" element={<Scene/>} />

            <Route path="/*" element={<NotFound/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default App;

const Home = () => {
    return(
        <>
        <h1>Home page</h1>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        </>
    );
};

const NotFound = () => {
    return(
        <>
        <h1>404 page not found</h1>
        <p>Please try again</p>
        </>
    );
};