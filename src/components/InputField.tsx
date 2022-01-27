import React, { FC, useRef } from 'react';
import "./style.css"

type TaskProps = {
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
    addTask: (e: React.FormEvent) => void;
}

const InputField: FC<TaskProps> = (props) => {
    const { name, setName, addTask } = props
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form className='input' onSubmit={(e) => {
            addTask(e)
            inputRef.current?.blur()
        }}>
            <input ref={inputRef} type='text' placeholder='Enter a Task' className='input__box' value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit" className="input_submit">
                GO
            </button>
        </form>
    );
};

export default InputField;
