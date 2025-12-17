import { createRoot } from 'react-dom/client'
import App from './header'
import '/src/index.css'
import RenderFooter from './component/footer'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        
    <App pageName="home" />

    <RenderFooter pageName="home" />
    </StrictMode>
)