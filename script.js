function asignarContenido(elementoSelector, contenido) {
    let elementoHTML = document.querySelector(elementoSelector);
    elementoHTML.innerHTML = contenido;
  }
  
  function realizarTransformacion(accion) {
    let texto = document.getElementById("cajatexto").value.toLowerCase();
  
    if (texto === "") {
      alert("Por favor, ingresa un mensaje para " + accion);
      return;
    }
  
    if (accion === "encriptar") {
      // Proceso de encriptación
      texto = texto.replaceAll('e', 'enter');
      texto = texto.replaceAll('i', 'imes');
      texto = texto.replaceAll('a', 'ai');
      texto = texto.replaceAll('o', 'ober');
      texto = texto.replaceAll('u', 'ufat');
    } else if (accion === "desencriptar") {
      // Proceso de desencriptación
      texto = texto.replaceAll('enter', 'e');
      texto = texto.replaceAll('imes', 'i');
      texto = texto.replaceAll('ai', 'a');
      texto = texto.replaceAll('ober', 'o');
      texto = texto.replaceAll('ufat', 'u');
    }
  
    asignarContenido('#titulo-mensaje', '');
    asignarContenido('#parrafo', texto);
  
    document.getElementById('imagen2').remove();
  }
  
  const copiarContenido = async () => {
    let texto = document.getElementById('parrafo').innerHTML;
    try {
        await navigator.clipboard.writeText(texto);
        alert('Texto copiado al portapapeles');
    } catch (err) {
        alert('No se pudo copiar el texto al portapapeles');
    }
  };
  