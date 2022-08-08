import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// function ToDoList() {
//   const [toDo, setTodo] = useState('');
//   const [toDoError, setTodoError] = useState('');
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodoError('');
//     setTodo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       return setTodoError('To do should be longer');
//     }
//     console.log(toDo);
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//         <button>Add</button>
//         {toDoError !== '' ? toDoError : null}
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const { register, watch } = useForm();

  return (
    <div>
      <form>
        <input {...register(' ')} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
