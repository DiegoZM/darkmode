import React from 'react';

class DarkMode extends React.Component{
    
    render() {   
        return(
            
            <div>
            <button type="button" onClick={darkMode}>
                Dark Mode
            </button>
            <button type="button" onClick={lightMode} >
                Ligth Mode
            </button>
            </div>
            
        );
    }
}

function darkMode() {
    var element = document.body;
    element.className = "dark-mode";
  }
  function lightMode() {
    var element = document.body;
    element.className = "ligth-mode";
  }

export default DarkMode;