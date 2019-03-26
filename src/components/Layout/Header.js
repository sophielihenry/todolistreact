import React from 'react'

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
    </header>
    )
}

const headerStyle = {
  fontFamily: "arial",
  textAlign: "center",
  fontSize:"15px",

}

export default Header
