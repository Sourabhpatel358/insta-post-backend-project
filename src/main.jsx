import { BrowserRouter,Routes,Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import CreatePost from "./pages/CreatePost";

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/createpost" element={<CreatePost/>} />
    <Route path="/feed" element={<Feed/>} />
    </Routes>
</BrowserRouter>

)
