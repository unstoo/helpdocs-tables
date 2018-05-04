import React from 'react'
import { hot } from 'react-hot-loader'
import { setConfig } from 'react-hot-loader'
import Quill from 'quill'
import Toolbar from './Toolbar'
setConfig({ logLevel: 'debug' })

const quillInit = () => { 
    window.quill = new Quill('#editor')

    window.quill.on('text-change', function(delta, oldDelta, source) {
        console.log(delta, oldDelta, source)
        if (source == 'api') {
          console.log("An API call triggered this change.");
        } else if (source == 'user') {
          console.log("A user action triggered this change.");
        }
      });
}

const App = () => {     
    console.log(Quill.imports)
    quillInit()
    return <div className='container'>
        <Toolbar />     
    </div>
}

export default hot(module)(App)