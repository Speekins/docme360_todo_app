export const fetchAllTodos = async () => {
  let response = await fetch(`https://todoapi-production-9014.up.railway.app/todos`)
  return response.json()
}

export const fetchPostNew = async (body) => {
  let response = await fetch(`https://todoapi-production-9014.up.railway.app/todos`,
    {
      method: "POST",
      headers: {
        body: JSON.stringify(body)
      }
    }
  )
  return response
}

export const fetchPutUpdateStatus = async (id, status) => {
  const body = {
    "complete": status
  }
  let response = await fetch(`https://todoapi-production-9014.up.railway.app/todos/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Accept": 'application.json',
        'Content-Type': 'application/json'
      }
    }
  )
  return response.json()
}

export const fetchPutUpdate = async (id, body) => {

  let response = await fetch(`https://todoapi-production-9014.up.railway.app/todos/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Accept": 'application.json',
        'Content-Type': 'application/json'
      }
    }
  )
  return response.json()
}

export const fetchDelete = async (id) => {
  const body = {
    "complete": true
  }
  let response = await fetch(`https://todoapi-production-9014.up.railway.app/todos/${id}`,
    {
      method: "DELETE",
      headers: {
        body: JSON.stringify(body)
      }
    }
  )
  return response.json()
}