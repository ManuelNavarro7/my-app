
# Reverse tienda On-line

Es una tienda online donde puedes comprar tus zapatillas. Fue creada para el curso de React en CoderHouse.






## Roadmap

- Al ingresar se hace una peticion a una base de datos alojada en firestore donde estan almacenados los datos del producto como, name,price,img,stock,cantidad y talle.

- Esos productos se muestran en el sector inferior de la tienda.

- Cuando selecciono un producto nos dirige a la direccion correspondiente del mismo a traves del id por el metodo useParams. Al seleccionarlo con el metodo find se busca el producto dentro del array que lo contiene y en la direccion correspondiente nos muestra todo el contido a traves del .map .

- Estando dentro la direccion del producto podemos ejecutar diferentes acciones , como : agregarlo al carrito , esto lo que hara es atraves del id va a hacer un check para comprobar si el producto se encuentra ya en el array de CompraSniker, en el caso que no se encuentre lo va a agregar para poder visualizarlo proximamente dentro del carrito. La otra opcion es volver al Store o pagina principal y la ultima opcion es ir directo al carrito.

- Una vez dentro del Carrito se muestran todos los productos seleccionados que se encuentran dentro del Array CompraSnicker . Tenemos 4 opciones por producto. La primera es incrementar la cantidad o decrementar la misma a traves del metodo .foreach que va a buscar a traves del id el producto y si coincide va a aumentar o disminuir la cantidad que estoy accionando. La segunda opcion realiza lo mismo con el talle del producto. La tercer opcion es borrar el producto tambien utilizando el metodo foreach para seleccionarlo y despues con el metodo .splice borramos el producto seleccionado. Tambien el sector inferior del carrito se ve el total que se va a ir modificando si subo o bajo la cantidad del producto o si agrego otros producto por el metodo .reduce que toma como referencia con el id del producto la cantidad y el precio generando una suma y almacenandola y asi producto por producto. La 4 opcion es finalizar la compra donde nos dirigira hacia otra ubicacion.

- Finalizacion de la compra, nos va a mostrar en el sector izquierdo los productos seleciconados para comprar y en el sector derecho los datos que necesitamos para finalizar la misma. Una vez que completamos los datos correspondientes como Nombre , dni y mail podemos presionar el boton de finalizar la compra.Al presionarlo se envian los datos a Firebase donde quedan almacenados en una biblioteca con el nombre Order.Ahi quedan almacenados los datos ingresados como tambien los productos seleccionados. Nos genera un id random que nos sirve para poder saber donde quedo alojado el pedido.





## Authors

- [@ManuelNavarro7](https://github.com/ManuelNavarro7)

