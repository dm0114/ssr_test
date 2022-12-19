import React from 'react'
import ReactDOMServer from 'react-dom/server'

const html = ReactDOMServer.renderToString(
  <div>Hi ssr</div>
)
console.log(html);