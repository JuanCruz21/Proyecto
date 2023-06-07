import React from 'react'

function Navegador() {
  return (
    <div>
      <header className='container'>
          <nav>
              <ul className='nav nav-tabs'>
              <li className='nav-item'><a className='nav-link' href='/'>Home</a></li>
              <li className='nav-item'><a className='nav-link' href='/Usuario'>Usuarios</a></li>
              <li className='nav-item'><a className='nav-link' href='/FormUsuario'>Form Usuarios</a></li>
            </ul>
          </nav>
        </header>
    </div>
  )
}

export default Navegador
