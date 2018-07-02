let nextTodoId = 0

/**
 * タスク追加イベント
 * @param {string} text
 */
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

/**
 * タスクのステータス変更
 * @param {number} id
 */
export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
