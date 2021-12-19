import React, {useState} from "react";

export const InputForm = ({taskList, settaskList}) => {

    const [inputText, setInputText] = useState("")

    const handleSubmit = (e) => {
        // 毎回リロードするのを防ぐ
        e.preventDefault();

        /* タスクを追加する */
        settaskList([
            ...taskList,
            {
                id: taskList.length,
                text: inputText,
                completed: false
            }
        ]);

        setInputText('')

        console.log(taskList);
    }

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    return (
        <div className='inputForm'>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} value={inputText}></input>
                <button>
                    <i className="fas fa-plus-square"></i>
                </button>
            </form>
        </div>
    )
}