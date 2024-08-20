let salir = false;
let sumaProductos = 0;

let menuPrincipal = `Seleccione una opción\n
1. Agregar un producto\n
2. Realizar pago\n
3. Salir\n`;

let menuProductos = `Seleccione un producto\n
1. Megamare\n
2. Acqua di Gio\n
3. Cedrat Boise\n
4. Eros\n
Digite cualquier tecla para regresar`;

let menuCantidad = `Seleccione una cantidad\n
1. 3 ml\n
2. 5 ml\n
3. 10 ml\n
Digite cualquier tecla para regresar`;

const descuento = (total, percentage) => total - (total * (percentage / 100));

do {
  let seleccionPrincipal = parseInt(prompt(menuPrincipal));
  console.log(seleccionPrincipal);

  switch (seleccionPrincipal) {
    case 1:
      let seleccionProducto = parseInt(prompt(menuProductos));
      let precioProductos;
      switch (seleccionProducto) {
        case 1:
          precioProductos = { "3ml": 15, "5ml": 25, "10ml": 50 }; // Precios específicos para Megamare
          break;
        case 2:
          precioProductos = { "3ml": 12, "5ml": 20, "10ml": 40 }; // Precios específicos para Acqua di Gio
          break;
        case 3:
          precioProductos = { "3ml": 16, "5ml": 27, "10ml": 54 }; // Precios específicos para Cedrat Boise
          break;
        case 4:
          precioProductos = { "3ml": 13, "5ml": 22, "10ml": 45 }; // Precios específicos para Eros
          break;
        default:
          alert("Opción no válida. Por favor, seleccione un número de producto válido.");
          continue;  
      }

      let seleccionCantidad = parseInt(prompt(menuCantidad));
      switch (seleccionCantidad) {
        case 1:
          sumaProductos += precioProductos["3ml"];
          alert("Producto de 3 ml agregado");
          break;
        case 2:
          sumaProductos += precioProductos["5ml"];
          alert("Producto de 5 ml agregado");
          break;
        case 3:
          sumaProductos += precioProductos["10ml"];
          alert("Producto de 10 ml agregado");
          break;
        default:
          alert("Opción no válida. Por favor, seleccione una cantidad válida.");
          continue; 
      }
      break;

    case 2:
      if (sumaProductos > 0) {
        let seleccionCompra = prompt(`Total: ${sumaProductos}\n 1. Comprar\n 2. Ingresar cupón\n Digite cualquier tecla para regresar`);
        if (seleccionCompra == 1) {
          alert("Gracias por su compra");
          salir = true;
        } else if (seleccionCompra == 2) {
          let cupon = prompt("Ingrese su cupón");
          if (cupon) {
            sumaProductos = descuento(sumaProductos, 20); 
            alert("Descuento realizado");
          }
        }
      } else {
        alert("No ha seleccionado ningún producto. Por favor, agregue productos antes de realizar el pago.");
      }
      break;

    case 3:
      salir = true;
      break;

    default:
      alert("Opción no válida. Por favor, seleccione un número del menú principal.");
      break;
  }
} while (!salir);
