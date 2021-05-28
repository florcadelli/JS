// Tenemos que hacerle el sistema a una verdulería, en este establecimiento los productos
// tienen nombre, precio y cantidad vendida.

function Productos (nombre,precio,cantidadVendida) {
    this.nombre = nombre,
    this.precio = precio,
    this.cantidadVendida=cantidadVendida
}

let manzanas = new Productos("manzana", 150, 10);
let papas = new Productos("papa", 60, 20);
let tomates = new Productos("tomate", 180, 16);

let todosLosProductos =[ manzanas, papas, tomates];

// console.log(todosLosProductos)

let verduleria = {
    productos:todosLosProductos,
    calcularGanancia: function(){
        let gananciaPorProducto = this.productos.map(function(producto){
            return producto.precio * producto.cantidadVendida;
        })
        let todosSumados = gananciaPorProducto.reduce(function(acumulador,producto){
            return acumulador + producto;      
        })
        return todosSumados;
    },
    gananciaDeProductoPorNombre: function(nombreProducto){
        let productosBuscados = this.productos;
          function productoBuscado(productosBuscados ) {
            return productosBuscados.nombre === nombreProducto;
           }
        let productoEncontrado =this.productos.find(productoBuscado); 
        return productoEncontrado.precio * productoEncontrado.cantidadVendida;   
    },
    productosMasVendidos: function(valor){
       let masVendidos = this.productos.filter(function(producto){
            return producto.cantidadVendida > valor;
        })
        return masVendidos
    },
    ordenadosPorGanancia:function(){
        // let gananciaPorProducto = this.productos.map(function(producto){
        //     return producto.precio * producto.cantidadVendida;
        // })
        // return gananciaPorProducto;
        // usar ordenador
        // let productosOrdenados= [];
        let productos = this.productos;
        let gananciaPorProducto = productos.map(function(producto){    
            return  producto.precio * producto.cantidadVendida
        })
        
        function compare(a,b){
                return  b -a ;
               }
        gananciaPorProducto.sort(compare);
        // 1
        let productosOrdenados= gananciaPorProducto.map(function(ganancia){
               function productoBuscado(productos) {
               return ganancia === (productos.precio * productos.cantidadVendida);
               }
               let productoEncontrado = productos.find(productoBuscado); 

               return  productoEncontrado ;

        })
        return productosOrdenados;

      
        // ======OPCION 2==============
        // let productosOrdenados= gananciaPorProducto.map(function(ganancia){
        //       for(let j=0; j<productos.length;j++){
        //         if(ganancia == (productos[j].precio *productos[j].cantidadVendida)){
        //              return productos[j];                }
        //      }
        // })
        // return productosOrdenados;

        // =====OPCION 3=====
        // for(let i=0; i<gananciaPorProducto.length;i++){
            //  for(let j=0; j<this.productos.length;j++){
            //      if(gananciaPorProducto[i] == (this.productos[j].precio *this.productos[j].cantidadVendida)){
            //          productosOrdenados.push(this.productos[j])
            //      }
            //  }
        // }
        // return productosOrdenados;
     },
     asignarNuevosValores: function(nombre,valorNuevo){
        let productos = this.productos;
        let nombresProductos = productos.map(function(producto){
            return producto.nombre;
        })
        let posicion = nombresProductos.indexOf(nombre);
        // for(let i =0; i< productos.length; i++){
        //     if(nombre == productos[i].nombre){
        //         posicion = i
        //     }
        // }
        console.log(posicion)
       productos.splice(posicion, 1, valorNuevo );
       return productos;
     },
     ganaciaMenosImpuestos:function(){
         let ganancia = this.calcularGanancia()
         let impuesto = (ganancia / 100) * 45
         let diferencia = ganancia-impuesto;
         return diferencia
     }

}

//  console.log(verduleria.calcularGanancia())
// console.log(verduleria.gananciaDeProductoPorNombre('tomate'))
// console.log(verduleria.productosMasVendidos(15));
// console.log(verduleria.ordenadosPorGanancia());
// console.log(verduleria.asignarNuevosValores('tomate', {
//     nombre:'zapallo',
//     precio :58,
//     cantidadVendida:5
// }));
console.log(verduleria.ganaciaMenosImpuestos())
