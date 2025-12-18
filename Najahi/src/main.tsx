import { createRoot } from 'react-dom/client'
import Header from './components/header'  /*check the path twice */
import '/src/index.css'
import RenderFooter from './components/footer'
import { StrictMode } from 'react'
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        
    <Header pageName="login" />
    <RenderFooter pageName="login" />
    
    </StrictMode>
)