import React, { useState } from 'react';
import { Input, List, Button, Checkbox, Divider, DatePicker } from 'antd';
import moment from 'moment';
import './dashboard.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [showCompleted, setShowCompleted] = useState(true);

  const addTodo = () => {
    if (input) {
      setTodos([...todos, { text: input, completed: false, deadline: null }]);
      setInput('');
    }
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const setDeadline = (index, date) => {
    const newTodos = [...todos];
    newTodos[index].deadline = date;
    setTodos(newTodos);
  };

  const displayedTodos = showCompleted ? todos : todos.filter(todo => !todo.completed);

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto' }}>
      <h1>Your Todo</h1>
      
      <div style={{ display: 'flex', justifyContent: 'space-around', }}>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          onPressEnter={addTodo}
          style={{ height: '40px'}}
        />
        <Button onClick={addTodo} type="primary" style={{ height: '40px', marginLeft: '5px', backgroundColor: '#5D6465', }}>
          +
        </Button>
        <Button onClick={toggleShowCompleted} type="primary" 
                style={{ height: '40px', marginLeft: '5px', backgroundColor: 'white', 
                         color: '#5D6465', borderColor: '#5D6465'}}>
          {showCompleted ? 'Hide Completed' : ' Show All Tasks '}
        </Button>
      </div>
      
      <Divider />
      
      <List
        style={{ marginTop: '20px', borderRadius: '0px', }}
        bordered={false}
        dataSource={displayedTodos}
        locale={{ emptyText: 'Add your first task!' }}
        renderItem={(todo, index) => (
            <List.Item>
                <Checkbox
                checked={todo.completed}
                onChange={() => toggleComplete(index)}
                >
                {todo.text}
                </Checkbox>
                <DatePicker
                value={todo.deadline}
                onChange={(date) => setDeadline(index, date)}
                className={
                    todo.deadline && moment(todo.deadline).isBefore(moment("2023/10/10")) 
                    ? 'redDate' 
                    : ''
                }
                style={{ marginLeft: '15px' }}
                />
            </List.Item>
          )}
      />
    </div>
  );
};

export default App;
