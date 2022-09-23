let Salario = prompt("Salario");
let Contrato = prompt("Contrato");

const Eventual = 300
const Fijo = 480
const porcetaje = 0.10


function Empresa( cantidad,persona){

if (persona === "Eventual" && persona === "Fijo") {
    
    if (cantidad >= Eventual && persona ==="Eventual"){

        let pe=  cantidad * porcetaje
 
     let op = `El Salario tendra una renta de ${pe}`
 
     alert (op);
             
     }else if (cantidad >= Fijo && persona ==="Fijo"){
 
         let pe=  cantidad * porcetaje
  
      let op = `El Salario tendra una renta de ${pe}`
  
      alert (op);
              
      }else{
  
          let op = `El Salario tendra una renta de 0.00`
  
          alert (op);
      
      }

}else{

    let op = `El Contrato hacido ingresado incorrectamente`

    alert (op);
}

}

Empresa(Salario,Contrato);

