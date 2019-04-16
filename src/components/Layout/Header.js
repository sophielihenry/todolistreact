import React from 'react'

function Header() {
  return (
    <header style={headerStyle}>
      <h1 className="header">Todo List</h1>
    </header>
    )
}

const headerStyle = {
  fontFamily: "source sans pro",
  textAlign: "center",
  fontSize:"15px",
}

export default Header
