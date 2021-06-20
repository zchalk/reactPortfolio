import React from "react";

export default function NavBar({ currentPage, handlePageChange}) {
  return (
    <header>
      <h1>zoe chalk</h1>
      <nav>
        <ul>
          <li>
            <a href="#aboutme"
            onClick={() => handlePageChange('About')}
            className= {currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >about me</a>
          </li>
          <li>
            <a href="#mywork"
            onClick={() => handlePageChange('Work')}
            className= {currentPage === 'Work' ? 'nav-link active' : 'nav-link'}>my work</a>
          </li>
          <li>
            <a href="#contactme"
            onClick={() => handlePageChange('Contact')}
            className= {currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>contact me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
