import React from 'react'
import ReactDOM from 'react-dom/client'
import Sizing from "../common/sizing.jsx"
import ModuleBasicsInit from "../common/modulebasics.init.jsx"
import URLTool from '../common/urltool'
import App from './App'
import ModuleBasicsExec from "../common/modulebasics.exec.jsx"
import FaviconSetter from "/src/ReactComponents/common/faviconsetter.jsx"
import RedirectHandlers from './redirecthandlers'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <URLTool />
    <RedirectHandlers />
    <Sizing />
    <ModuleBasicsInit />
    <FaviconSetter />
    
		<App />

    <ModuleBasicsExec />
	</React.StrictMode>
)