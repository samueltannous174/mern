import './App.css'
import {useState} from "react";

function App() {

        const tabsData = [
            {
                label: "Tab 1",
                content: <p>Tab 1 content is showing here.</p>,
            },
            {
                label: "Tab 2",
                content: <p>Tab 2 content is showing here.</p>,
            },
            {
                label: "Tab 3",
                content: <p>Tab 3 content is showing here.</p>,
            },
        ];

 const [activeTab, setActiveTab] = useState(tabsData[0]);



  return (
    <>
        <div className="flex gap-4 space-x-4">
            <button onClick={() => setActiveTab(tabsData[0])}>Tab 1</button>
            <button onClick={() => setActiveTab(tabsData[1])}>Tab 2</button>
            <button onClick={() => setActiveTab(tabsData[2])}>Tab 3</button>
        </div>
        {activeTab.content}
    </>
  )
}

export default App
