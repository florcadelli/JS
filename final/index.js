const fs = require ('fs')

let tickets= JSON.parse(fs.readFileSync(__dirname + '/TICKETS.json' ,{encoding: "utf-8"}));
// console.log(tickets)

let mesaDeAyuda={
    tickets:tickets,
    buscarTickets: function(numeroDeTicket){
        let tickets = this.tickets;
        function ticketBuscado(tickets) {
            return tickets.nroTicket === numeroDeTicket;
           }

        let ticketEncontrado =tickets.find(ticketBuscado)
         return ticketEncontrado;

    },
    listarTickets: function(tickets){
       tickets.forEach(function(ticket){
           if(ticket.estaResuelto){
            console.log( 
                "Nro Ticket: " + ticket.nroTicket , ",usuario: " + ticket.usuario, ",prioridad: " + ticket.prioridad, ",estado: resuelto, Minutos: " + ticket.minutosDeEspera)
           }else{
            console.log( 
             "Nro Ticket: " + ticket.nroTicket , ",usuario: " + ticket.usuario, ",prioridad: " + ticket.prioridad, ",estado: pendiente, Minutos: " + ticket.minutosDeEspera)
           }      
        });     
    },
    ticketsPendientes:function(tickets){
        let ticketsPendientes= tickets.filter(function(ticket){
            return ticket.estaResuelto === false; 
        });
        return ticketsPendientes;
        // this.listarTickets(ticketsPendientes)
    },
    buscarPorPrioridad: function(prioridad){
        ticketsPendientes = this.ticketsPendientes(this.tickets)
        let ticketsSegunPrioridad=ticketsPendientes.filter(function(ticket){
            return ticket.prioridad == prioridad; 
        });
        return ticketsSegunPrioridad;
    },
    ordenarPorTiempoDeEspera:function(){
        ticketsPendientes = this.ticketsPendientes(this.tickets)
        // ordenar por tiempo de espera
        let arrayDeMinutos = ticketsPendientes.map(function(ticket){
            return ticket.minutosDeEspera
        })
        function compare(a,b){
            return b -a ;
           }
        arrayDeMinutos.sort(compare);
       
        let ticketsOrdenados= arrayDeMinutos.map(function(minutos){

            function buscandoPorMinutos(ticketsPendientes) {
            return ticketsPendientes.minutosDeEspera == minutos;
            }

            let ticketEncontrado =  ticketsPendientes.find(buscandoPorMinutos); 
            return  ticketEncontrado;
        })
        return ticketsOrdenados
},
informarAlUsuario:function(nroDeTicket){
    ticketsPendientes = this.ticketsPendientes(this.tickets)
    function ticketBuscado(ticketsPendientes) {
        return ticketsPendientes.nroTicket === nroDeTicket;
       }

    let ticketEncontrado =tickets.find(ticketBuscado)
    // console.log(ticketEncontrado)
    console.log("Sr/a: "+ ticketEncontrado.usuario +", Se informa que su ticket Nro:" + ticketEncontrado.nroTicket + ", prioridad: " + ticketEncontrado.prioridad + ", está resuelto.")
}

}
// console.log(mesaDeAyuda.buscarTickets(12))
// mesaDeAyuda.listarTickets(tickets)
//  console.log(mesaDeAyuda.ticketsPendientes())
// console.log(mesaDeAyuda.buscarPorPrioridad("alta"))
// console.log(mesaDeAyuda.ordenarPorTiempoDeEspera())
mesaDeAyuda.informarAlUsuario(8)