import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/HeaderPagina'
import Nav from './components/NavPagina'
import Main from './components/MainPagina'
import Aside from './components/AsidePagina'
import Footer from './components/FooterPagina'
import Panel from './components/PanelPagina'

function App() {
  const titulo = "Portal Académico";
  const institucion = 'IESP "TRUJILLO"';
  const anio = 2026;
  const programa = "Diseño y Programación Web";


  return (
    <>
      <Header titulito= {titulo} insti= {institucion} ></Header>
      <Nav></Nav>
      <Main></Main>
      <Aside>
{/*  */}
      </Aside>

      <Footer aniop={anio} programita= {programa} ></Footer>
      <Panel titulo= "Aviso Académico" >
          <p>Revisar las fechas de evaluación.</p>
        </Panel>

        <Panel titulo= "Próximas actividades">
          <ul>
            <li>Taller de React</li>
            <li>Presentación de Proyectos</li>
          </ul>
        </Panel>
    </>
  )
}

export default App
