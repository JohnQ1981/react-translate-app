import React, { useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/languages";
import './styles.css';

export default function App() {
  const [language, setLanguage] = useState('es');
  const [text, setText] = useState('');
  return (
    <div>
      <div><Field onChange={setText}/></div>
      <div><Languages language={language} onLanguageChange={setLanguage}/></div>
      <hr />
      <div><Translate text ={text} language={language}/></div>
    </div>
  );
}
