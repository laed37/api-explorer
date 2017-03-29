export const filterObjectsWithKey = (arr, key) => {
  return arr.reduce((acc, obj) => {
    return acc.concat([{...obj[key], name: obj.parameter}]);
  }, []);
};

export const formatAction = (method, resource) => {
  resource = resource.charAt(0).toUpperCase() + resource.slice(1);
  let action;

  switch (method) {
    case 'get':
      action = 'Get';
      break;
    case 'post':
      action = 'Create';
      break;
    case 'patch':
      action = 'Update';
      break;
    case 'delete':
      action = 'Delete'
      break;
  }

  return `${action} a ${resource}`;
}

export const getMethodClass = (method) => {
  let styleClass = 'api-component-method';

  switch (method) {
    case 'post':
      styleClass += ' http-post';
      break;
    case 'get':
      styleClass += ' http-get';
      break;
    case 'patch':
      styleClass += ' http-patch';
      break;
    case 'delete':
      styleClass += ' http-delete';
      break;
  }

  return styleClass;
}

export const hideElementClass = (boolean) => {
  if (boolean) return 'hide-element';
  return '';
}

export const fetchRequest = (data) => {
  const {method, resource, body} = data;
  const myRequest = {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let url = `https://jsonplaceholder.typicode.com/${resource}`;

  if (method === 'post') myRequest.body = JSON.stringify({body});
  if (method === 'get' && body.length > 0) {
    url += `/${body[0].value}`
  }

  return (
    fetch(url, myRequest)
      .then(response => response.json())
  );
}
