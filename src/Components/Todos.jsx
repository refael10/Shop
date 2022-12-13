import { useEffect, useRef, useState } from 'react';
import Todo from './Todo';

function Todos({ dark }) {
    let newToDo = '';
    const [todos, setTodos] = useState([]);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                return res.json()
            })
            .then((todos) => {
                setTodos(todos)
            })

    }, [])

    const remove = (id) => {
        setTodos(todos.filter((item) => item.id !== id));

    };

    const edit = (id) => {
        setTodos(
            todos.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };

    return (
        <div className="App">
            {/* <Sumting /> */}
            <p>todos count : {todos.length}</p>
            <input ref={inputRef} onChange={(e) => (newToDo = e.target.value)} type="text" />
            <button
                onClick={() => {
                    setTodos([

                        {
                            title: newToDo,
                            completed: false,
                            id: todos.length + 1,
                        },
                        ...todos
                    ]);
                }}
            >
                add new
            </button>

            {todos.map(({ id, title, completed }) => (
                <div key={id}>
                    <Todo id={id} completed={completed} dark={dark} remove={remove} edit={edit}>
                        {title}
                    </Todo>
                </div>
            ))}
        </div>
    );
}

export default Todos;
