const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const $list = $('#todo-list')
const $itemCountSpan = $('#item-count')
const $uncheckedCountSpan = $('#unchecked-count')
const $inputField = $('#new-todo-input')

function newTodo() {
  const todoText = $inputField.val().trim()
  if (!todoText) return
  $inputField.val('')

  const $li = $('<li>').addClass(classNames.TODO_ITEM).css({
    display: 'flex',
    alignItems: 'center'
  })

  const $deleteButton = $('<button>')
    .addClass(classNames.TODO_DELETE)
    .text('X')
    .css('margin-right', '10px')
    .on('click', function () {
      $li.remove()
      updateCounts()
    })

  const $checkbox = $('<input>')
    .attr('type', 'checkbox')
    .addClass(classNames.TODO_CHECKBOX)
    .css('margin-right', '10px')
    .on('change', function () {
      if (this.checked) {
        $span.css('text-decoration', 'line-through')
      } else {
        $span.css('text-decoration', '')
      }
      updateCounts()
    })

  const $span = $('<span>')
    .addClass(classNames.TODO_TEXT)
    .text(todoText)

  $li.append($deleteButton, $checkbox, $span)
  $list.append($li)
  updateCounts()
}

function updateCounts() {
  const total = $list.children().length
  const unchecked = $list.children().filter(function () {
    return !$(this).find('input[type="checkbox"]').prop('checked')
  }).length
  $itemCountSpan.text(total)
  $uncheckedCountSpan.text(unchecked)
}
