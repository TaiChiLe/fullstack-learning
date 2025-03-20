import React, { useRef, useState } from 'react';
import { Button, Checkbox, Input, Modal } from 'antd';
import TodolistDisplay from './components/TodolistDisplay';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [todoData, setTodoData] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [defaultTitle, setDefaultTitle] = useState('');
  const [defaultDescription, setDefaultDescription] = useState('');
  const [todoEditIndex, setTodoEditIndex] = useState(-1);
  const [tags, setTags] = useState(['Work', 'Home', 'School']);

  let todoTitle = useRef(null);
  let todoDecsription = useRef(null);
  let todoTags = [];

  let todoEditedTitle = useRef(null);
  let todoEditedDecsription = useRef(null);
  let todoEditTags = [];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    console.log(todoTitle.current.input.value);
    console.log(todoDecsription.current.input.value);
    const title = todoTitle.current.input.value;
    const description = todoDecsription.current.input.value;

    setTodoData([
      ...todoData,
      {
        title: title,
        description: description,
        tags: todoTags,
      },
    ]);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const todolistSearch = (e) => {
    setSearchString(e.target.value);
  };

  const deleteTodo = (todoIndex: number) => {
    todoData.splice(todoIndex, 1);
    setTodoData([...todoData]);
  };

  const editTodo = (todoIndex: number) => {
    setDefaultTitle(todoData[todoIndex].title);
    setDefaultDescription(todoData[todoIndex].description);
    todoEditTags = todoData[todoIndex].tags;
    setIsEditModalOpen(true);
    setTodoEditIndex(todoIndex);
  };

  const handleEditOk = () => {
    setIsEditModalOpen(false);
    const title = todoEditedTitle.current.input.value;
    const description = todoEditedDecsription.current.input.value;
    todoData[todoEditIndex].title = title;
    todoData[todoEditIndex].description = description;

    setTodoData([...todoData]);
  };

  const handleEditCancel = () => {
    setIsEditModalOpen(false);
  };

  const onTagChange = (checkedValues: []) => {
    console.log(checkedValues);
    todoTags = checkedValues;
  };

  return (
    <>
      <div></div>
      <div>
        <Input onChange={todolistSearch}></Input>
        <Button type="primary" onClick={showModal}>
          +
        </Button>
        <Modal
          title="Add To Do"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          destroyOnClose={true}
        >
          <div>Title</div>
          <Input ref={todoTitle}></Input>
          <div>Description</div>
          <Input ref={todoDecsription}></Input>
          <Checkbox.Group options={tags} onChange={onTagChange} />
        </Modal>

        <TodolistDisplay
          todoListData={todoData}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          searchString={searchString}
        ></TodolistDisplay>

        <Modal
          title="Edit To Do"
          open={isEditModalOpen}
          onOk={handleEditOk}
          onCancel={handleEditCancel}
          destroyOnClose={true}
        >
          <div>Title</div>
          <Input ref={todoEditedTitle} defaultValue={defaultTitle}></Input>
          <div>Description</div>
          <Input
            ref={todoEditedDecsription}
            defaultValue={defaultDescription}
          ></Input>
          <Checkbox.Group options={tags} defaultValue={todoEditTags} />
        </Modal>
      </div>
    </>
  );
}
