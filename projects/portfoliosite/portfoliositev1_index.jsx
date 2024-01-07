import React from 'react'
import ReactDOM from 'react-dom/client'
import Sizing from "/src/ReactComponents/common/sizing.jsx"
import ModuleBasicsInit from "/src/ReactComponents/common/modulebasics.init.jsx"
import URLTool from '/src/ReactComponents/common/urltool'
import App from './portfoliositev1_App'
import ModuleBasicsExec from "/src/ReactComponents/common/modulebasics.exec.jsx"
import FaviconSetter from "/src/ReactComponents/common/faviconsetter.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sizing />
    <ModuleBasicsInit />
    <FaviconSetter />

    <App />

    <ModuleBasicsExec />
  </React.StrictMode>
)