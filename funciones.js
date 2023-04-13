/*Función para cambiar de icono, al clicar sobre uno, cambia el icono a seleccionado y a los demás se les quita la selección*/
function cambiarIcon(item) {
  switch (item) {
    case "usuario":
      document.getElementById("usuario").innerHTML =
        "<img src='img/usuario-blanco.png' alt='usuario' width='50%' class='usuario img-item' />";
      document.getElementById("buscar").innerHTML =
        "<img src='img/lupa.png' alt='buscar' width='50%' class='buscar img-item' />";
      document.getElementById("favorito").innerHTML =
        "<img src='img/favorito.png' alt='favorito' width='50%' class='favorito img-item' />";
      document.getElementById("info").innerHTML =
        "<img src='img/info.png' alt='info' width='30%' class='info img-item' />";
      break;

    case "buscar":
      document.getElementById("usuario").innerHTML =
        "<img src='img/usuario.png' alt='usuario' width='50%' class='usuario img-item' />";
      document.getElementById("buscar").innerHTML =
        "<img src='img/lupa-blanco.png' alt='buscar' width='50%' class='buscar img-item' />";
      document.getElementById("favorito").innerHTML =
        "<img src='img/favorito.png' alt='favorito' width='50%' class='favorito img-item' />";
      document.getElementById("info").innerHTML =
        "<img src='img/info.png' alt='info' width='30%' class='info img-item' />";
      break;

    case "favorito":
      document.getElementById("usuario").innerHTML =
        "<img src='img/usuario.png' alt='usuario' width='50%' class='usuario img-item' />";
      document.getElementById("buscar").innerHTML =
        "<img src='img/lupa.png' alt='buscar' width='50%' class='buscar img-item' />";
      document.getElementById("favorito").innerHTML =
        "<img src='img/favorito-blanco.png' alt='favorito' width='50%' class='favorito img-item' />";
      document.getElementById("info").innerHTML =
        "<img src='img/info.png' alt='info' width='30%' class='info img-item' />";
      break;

    case "info":
      document.getElementById("usuario").innerHTML =
        "<img src='img/usuario.png' alt='usuario' width='50%' class='usuario img-item' />";
      document.getElementById("buscar").innerHTML =
        "<img src='img/lupa.png' alt='buscar' width='50%' class='buscar img-item' />";
      document.getElementById("favorito").innerHTML =
        "<img src='img/favorito.png' alt='favorito' width='50%' class='favorito img-item' />";
      document.getElementById("info").innerHTML =
        "<img src='img/info-blanco.png' alt='info' width='30%' class='info img-item' />";
      break;

    default:
      document.getElementById("usuario").innerHTML =
        "<img src='img/usuario-blanco.png' alt='usuario' width='50%' class='usuario img-item' />";
      document.getElementById("buscar").innerHTML =
        "<img src='img/lupa.png' alt='buscar' width='50%' class='buscar img-item' />";
      document.getElementById("favorito").innerHTML =
        "<img src='img/favorito.png' alt='favorito' width='50%' class='favorito img-item' />";
      document.getElementById("info").innerHTML =
        "<img src='img/info.png' alt='info' width='30%' class='info img-item' />";
      break;
  }
}
