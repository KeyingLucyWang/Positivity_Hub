const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const deleteItemButton = document.querySelector('[data-delete-item-btn]')
const emptyMessage = document.querySelector('#empty-message')

const LOCAL_STORAGE_ITEM_KEY = 'happiness.list'
const LOCAL_STORAGE_SELECTED_ID_KEY = 'happiness.selectedId'
let list = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM_KEY)) || []
let selectedId = localStorage.getItem(LOCAL_STORAGE_SELECTED_ID_KEY)

listContainer.addEventListener('click', event => {
  if (event.target.tagName.toLowerCase() === 'li') {
    selectedId = event.target.dataset.listId
    
    saveAndRender()
  }
})

newListForm.addEventListener('submit', event => {
  event.preventDefault()
  const itemName = newListInput.value
  if(itemName == null || itemName === '') return
  const item = createItem(itemName)
  newListInput.value = null
  list.push(item)
  saveAndRender()
})

deleteItemButton.addEventListener('click', event => {
  list = list.filter(list => list.id !== selectedId)
  selectedId = null
  if(listContainer.firstChild == null) {
    showEmptyPrompt()
  }
  saveAndRender()
})

function createItem(item) {
  return { id: Date.now().toString(), name: item, tasks: [] }
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_ITEM_KEY, JSON.stringify(list))
}

function saveAndRender() {
  save()
  render()
}

function showEmptyPrompt() {
  if (listContainer.firstChild == null) {
    emptyMessage.innerHTML = "A cup of freshly brewed coffee? A new episode of your favorite Netflix show? <br> Let's fill this list up!"
  }
  else {
    emptyMessage.innerHTML = null
  }
}

function render() {
  clearElement(listContainer)
  list.forEach(item => {
    const listElement = document.createElement('li')
    listElement.dataset.listId = item.id
    listElement.classList.add("list-name")

    listElement.classList.add("happiness-list-item")

    listElement.innerText = item.name

    if (item.id === selectedId) {
      listElement.classList.add('active-list')
    }
    listContainer.appendChild(listElement)
  });
  showEmptyPrompt()
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

render()