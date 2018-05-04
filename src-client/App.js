import React from 'react'
import { hot } from 'react-hot-loader'
import { setConfig } from 'react-hot-loader'
import Quill from 'quill'
setConfig({ logLevel: 'debug' })

console.log(Quill)

const q = window.Quill || Quill


const quillInit = () => new q('#editor', {
    theme: 'snow'
  })

const App = () => <button onClick={quillInit}>Reaction</button>

export default hot(module)(App)