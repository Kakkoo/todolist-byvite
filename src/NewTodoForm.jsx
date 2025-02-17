import {useState} from 'react';

export default function NewTodoForm({ onCreatedClicked}) {
    const [inputText, setInputText] = useState('');
    return (
        <div>
            <input type='text' 
            value={inputText} 
            onChange={(e => setInputText(e.target.value))}
            />
            <button onClick={() => {
                onCreatedClicked(inputText);
                setInputText('');
            }}>create Todo</button>
        </div>
    )
}