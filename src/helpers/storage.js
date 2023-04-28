/**
 * Get cities from locale storage
 * @return {any}
 */
export function getTodoFromStorage () {
  return JSON.parse(localStorage.getItem('ls__todo'))
}

/**
 * Set cities to locale storage
 * @param id {any}
 */
export function setTodoToStorage (id) {
  localStorage.setItem('ls__todo', JSON.stringify(id))
}

/**
 * Clear cities in locale storage
 */
export function clearTodoInStorage () {
  localStorage.removeItem('ls__todo')
}
