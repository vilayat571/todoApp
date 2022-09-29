import React from 'react'
import Header from "./components/Header"
import Fotter from "./components/Fotter"
import Contentfotter from "./components/Contentfotter"
import Content from './components/Content'

function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content />
        <Contentfotter />
      </section>
      <Fotter />
    </>
  )
}

export default App
