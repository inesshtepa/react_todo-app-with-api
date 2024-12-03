/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';

type Props = {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
  onDelete: (todoId: number) => void;
  onUpdate: (todo: Todo) => Promise<void>;
  deletingId: number[];
  filteredTodos: Todo[];
  setErrorMessage: (message: string) => void;
  loadingIds: number[];
};

export const Todolist: React.FC<Props> = ({
  todos,
  onDelete,
  onUpdate,
  deletingId,
  filteredTodos,
  setErrorMessage,
  loadingIds,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
          deletingId={deletingId}
          filteredTodos={filteredTodos}
          setErrorMessage={setErrorMessage}
          loadingIds={loadingIds}
          key={todo.id}
        />
      ))}
    </section>
  );
};
