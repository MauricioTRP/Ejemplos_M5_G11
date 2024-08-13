const iifeGlobal = (()=>{
  let inyectarTodo = (url,id) => {
      id.setAttribute('src', url);
      id.style.display = 'block';
  };

  return {
      mostrarTodo: (url,id) => inyectarTodo(url,id),
  };
})();

export default iifeGlobal