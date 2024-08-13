function heroCard(element, response) {
  let heroCard = `
    <div class="card my-3 border-danger-subtle bg-dark h-100">
      <div class="row g-0">
        <div class="col-md-6">
          <img src="${response.image.url}" class="img rounded-start h-100 w-100 object-fit-cover" alt="...">
        </div>
        <div class="col-md-6 text-bg-dark rounded">
        <div class="card-header p-4 border-bottom-1 border-danger-subtle">
          <h2 class="card-title">${response.name}</h2>
          <p class="card-text fs-5">Nombre completo: ${response.biography["full-name"]}</p>
          <p class="card-text fs-5">Origen: ${response.biography["place-of-birth"]}</p>
          <p class="card-text fs-5"> Aliases: ${response.biography["aliases"].join(', ')}</p>
          <p class="card-text fs-5"> Conexiones: ${response.connections.relatives}</p>
        </div>
          <div class="card-body p-4">
            <p class="card-text fs-5"> Ocupación: ${response.work.occupation}</p>
            <p class="card-text fs-5"> Primera Aparición: ${response.biography["first-appearance"]}</p>
            <p class="card-text fs-5"> Género: ${response.appearance.gender}</p>
            ${response.appearance.race !== "null" ? `<p class="card-text fs-5"> Raza: ${response.appearance.race}</p>` : ''}
            <span class="me-3 card-text fs-5">Altura: ${response.appearance["height"].join(' | ')}</span>
            <span class="card-text fs-5">Peso: ${response.appearance["weight"].join(' | ')}</span>
            <p class="card-text fs-5">Alianzas: ${response.connections["group-affiliation"]}</p>
            </div>
            <div class="card-footer border-top-1 border-danger-subtle d-flex align-items-center justify-content-between pt-5 px-4">
            <p class="card-tex pt-4"><small> Publicado por: ${response.biography.publisher}</small></p>
            <img src="/assets/img/sh2.jpg" class="img icono rounded-circle object-fit-cover" alt="...">
            </div>
        </div>
      </div>
    </div>
  `;
  
  element.innerHTML = heroCard
}

export {heroCard}