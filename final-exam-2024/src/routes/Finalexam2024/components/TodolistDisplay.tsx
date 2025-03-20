import { Button, Card } from 'antd';

type TodolistDisplayProps = {
  todoListData: [];
  searchString: string;
  deleteTodo: (todoIndex: number) => void;
  editTodo: (todoIndex: number) => void;
};

export default function TodolistDisplay(props: TodolistDisplayProps) {
  const { todoListData, searchString, deleteTodo, editTodo } = props;

  let filteredTodolistData;
  if (todoListData && searchString) {
    filteredTodolistData = todoListData.filter((todo, index) =>
      todo.title.toLowerCase().includes(searchString.toLocaleLowerCase())
    );
  } else {
    filteredTodolistData = todoListData;
  }

  return (
    <>
      {filteredTodolistData &&
        filteredTodolistData.map((todo, index) => (
          <div key={index}>
            <Button onClick={() => editTodo(index)}>Edit</Button>
            <Button onClick={() => deleteTodo(index)}>Delete</Button>
            <Card title={todo.title}>
              <p>{todo.description}</p>
              <p>{todo.tags}</p>
            </Card>
          </div>
        ))}
    </>
  );
}
