// src/components/TodoList.jsx
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { toggleComplete, removeTodo } from '../features/todosSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <List>
      {todos.map((todo, index) => (
        <ListItem
          key={index}
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => dispatch(removeTodo(index))}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <Checkbox
            checked={todo.completed}
            onChange={() => dispatch(toggleComplete(index))}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <ListItemText
            primary={todo.text}
            sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
