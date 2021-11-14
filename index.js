"use strict";
 

//variables

let entrada = document.querySelector(".entrada")
let multiplicar = document.querySelector(".multiplicar")
let resultado = document.querySelector(".resultado")
let opcion = document.querySelector("#opcion")
let lastOP


//generar tablas función
function tablaMultiplicar(tabla,setting){
    let frag = new DocumentFragment()
    if(setting == "todas"){ 
    

    for(let i = 1; i <= tabla ; i++){
        let h3 = document.createElement("h3")
        let div = document.createElement("div")
        div.classList.add("tablas")
        

        h3.innerHTML =`tabla de multiplicacion del numero ${i}`
        div.appendChild(h3)

        for(let j = 1; j <=10 ; j++){  
            let op = document.createElement("div")
            op.innerHTML = `${i} x ${j} = `+ i*j
            div.appendChild(op)
            
        }
       
        frag.appendChild(div)
    }
}else{
   
   
    for(let i = tabla; i <= tabla ; i++){
        let h3 = document.createElement("h3")
        let div = document.createElement("div")
        div.classList.add("tablas")
    
         h3.innerHTML =`tabla de multiplicacion ${i}`
         
        for(let j = 1; j <=10 ; j++){
            let op = document.createElement("div")
            op.innerHTML = `${i} x ${j} = `+ i*j
            div.appendChild(op)
            
        }
        frag.appendChild(h3)
        frag.appendChild(div)
    }
}

resultado.appendChild(frag)

}


multiplicar.addEventListener("click",()=>{
    let setting 
    resultado.innerHTML = ""
    if(opcion.checked === true){
        setting = "lol"

    }else{
        setting ="todas"
    }
   lastOP = entrada.value
    tablaMultiplicar(entrada.value,setting)
    entrada.value=""
    


})
//ver si quiere generar una o todas
opcion.addEventListener("click",()=>{
    let setting 
    resultado.innerHTML = ""
    if(opcion.checked === true){
        setting = "lol"

    }else{
        setting ="todas"
    }
    tablaMultiplicar(lastOP,setting)
    entrada.value=""

})



/*"use strict";
class añadir{
     saludar(...num) {
         let arr = [num]
        console.log(...arr)

        
    }
     se(nombre,...num){
        this.nombre = nombre
        const arreglo = [num]
        console.log(`hola ${this.nombre} el resultado es :`, ...arreglo, `o ${num}`)
        
    
    }
    

}

//let nombre = prompt("digite su nombre")
const persona = new añadir


//persona.saludar("dfdf",5,4,5,4,1,2)

persona.se("jhon",4,5,4,2,1,4,5,2,1,4,5,2,1,4,0)*/

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



const localizacion = navigator.geolocation;

const posicion = (pos)=>{
    console.log(localStorage.getItem("localizacion"))
    console.log(localStorage.getItem("nombre"))
    if(localStorage.getItem("localizazion")==null && localStorage.getItem("nombre")==null)
    {
        let nombre = prompt("digite su nombre : ")
        localStorage.setItem("nombre",nombre)
        localStorage.setItem("localizazion",`${pos.coords.latitude},${pos.coords.longitude}`)
        window.open(`https://www.google.com/maps/place/2%C2%B056'32.1%22N+75%C2%B014'27.0%22W/@${pos.coords.latitude},${pos.coords.longitude}`)
}else{
    alert(`hola ${localStorage.getItem("nombre")}, su localizacion es ${localStorage.getItem("localizazion")}`)

}
    

    
}

localizacion.getCurrentPosition(posicion)

*/

//base de datos indexdb

/*const IDBRequest =  indexedDB.open("baseDa",3) //conexion

IDBRequest.addEventListener("upgradeneeded",()=>{  //crear
    const db = IDBRequest.result
    db.createObjectStore("nombres",{
        autoIncrement : true

    })
    console.log("se creo la base de datos")



})

IDBRequest.addEventListener("success",()=>{
    console.log("se abrio la base de datos")  //abrir


    
})


IDBRequest.addEventListener("error",()=>{
    console.log("hubo error al abrir la base de datos")  //error


    
})


console.log(IDBRequest)


const agregar = obj =>{
    const db =  IDBRequest.result
    const trasaccion = db.transaction("nombres","readwrite")
    const objectoT = trasaccion.objectStore("nombres")
    objectoT.add(obj)
    trasaccion.addEventListener("complete",()=>console.log("agregado"))

}


const modificado = (key,obj) =>{
    const db =  IDBRequest.result
    const trasaccion = db.transaction("nombres","readwrite")
    const objectoT = trasaccion.objectStore("nombres")
    objectoT.put(obj,key)
    trasaccion.addEventListener("complete",()=>console.log("modificado"))

}

const borrar = (key) =>{
    const db =  IDBRequest.result
    const trasaccion = db.transaction("nombres","readwrite")
    const objectoT = trasaccion.objectStore("nombres")
    objectoT.delete(key)
    trasaccion.addEventListener("complete",()=>console.log("borrado"))

}

const  mostrar =()=>{
    const basesDatos = IDBRequest.result.transaction("nombres","readonly").objectStore("nombres")
    const cursor = basesDatos.openCursor()
    cursor.addEventListener("success",()=>{
        if(cursor.result){
            console.log(cursor.result.value)
            cursor.result.continue()

        }else{
            console.log("los datos fueron leidos")
        }

    })
    
}


// ***************************************************************************************
// matchMedia
//intersectionObserver(verifyVisibily,options)

//visibilitychange

//notifiacaciones

Notification.requestPermission(()=>{
    if(Notification.permission=="granted"){
        new Notification("jajsjasjajasjjasj")
     
        
       
    }
})


console.log("notificacion enviada")

//worker - services worker
//const worker  = new worker()

let edad = 18
//edad > 17 ? alert("mayor de edad ") : alert("menor de edad")
*/
