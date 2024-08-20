
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [activeTabs, setActiveTabs] = useState(0);

  const tabs = [
    { title: 'Tab 1', content: 'This is the content for Tab 1.' },
    { title: 'Tab 2', content: 'This is the content for Tab 2.' },
    { title: 'Tab 3', content: 'This is the content for Tab 3.' },
  ]

  const handleTabClick = (index) => {
    setActiveTabs(index);
  }

  return (
    <div>
      <h1>React Tabs Example</h1>
      <ul>
        {
          tabs.map((tab, index) => (
            <li
              key={index}
              onClick={() => handleTabClick(index)}
              style={{ cursor: 'pointer', listStyleType: 'circle' }}
            >
              {tab.title}
            </li>
          ))
        }
      </ul>
      <div>
        <p>{tabs[activeTabs].content}</p>
      </div>
    </div>
  )
}

export default App
