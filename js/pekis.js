const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascotas")
const botonReiniciar = document.getElementById("boton-reiniciar")
sectionReiniciar.style.display = "none"

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")

const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemiga = document.getElementById("mascota-enemiga")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let jugadorId = null
let enemigoId = null
let pekis = []
let pekisEnemigos = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDePekis
let inputBlanqui
let inputGatito
let inputFelix
let inputLangos
let inputTuca
let inputPydos 
let mascotaJugador 
let mascotaJugadorObjeto
let ataquesPekis
let botonMaullido
let botonArañazo 
let botonMorder 
let ataquesPekisEnemigo
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./imagenes/mapa.png"
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800
mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos


class Pekis {
    constructor(nombre, foto, vida, fotoMapa, id = null) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 80
        this.alto = 80
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0

    }

    pintarPekis() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let blanqui = new Pekis("Blanqui", "./imagenes/blanqui-imagen.png", 5, "./imagenes/blanqui-imagen.png")

let gatito = new Pekis("Gatito", "./imagenes/gatito-imagen.png", 5, "./imagenes/gatito-imagen.png")

let felix = new Pekis ("Felix", "./imagenes/Felix-imagen2.png", 5, "./imagenes/Felix-imagen2.png")

let langos = new Pekis ("Langos", "./imagenes/lango-imagen.png", 5, "./imagenes/lango-imagen.png")

let tuca = new Pekis ("Tuca", "./imagenes/tuca-imagen.png", 5, "./imagenes/tuca-imagen.png")

let pydos = new Pekis ("Pydos", "./imagenes/pydos-imagen.png", 5, "./imagenes/pydos-imagen.png")


const BLANQUI_ATAQUES = [
    { nombre: "🐱", id: "boton-maullido" },
    { nombre: "🐱", id: "boton-maullido" },
    { nombre: "🐱", id: "boton-maullido" },
    { nombre: "🐾", id: "boton-arañazo" },
    { nombre: "🦷", id: "boton-mordida" },
    ]

blanqui.ataques.push(...BLANQUI_ATAQUES)

const GATITO_ATAQUES = [
    { nombre: "🐾", id: "boton-arañazo" },
    { nombre: "🐾", id: "boton-arañazo" },
    { nombre: "🐾", id: "boton-arañazo" },
    { nombre: "🐱", id: "boton-maullido"},
    { nombre: "🦷", id: "boton-mordida" },

]

gatito.ataques.push(...GATITO_ATAQUES)

const FELIX_ATAQUES = [
    { nombre: "🦷", id: "boton-mordida" },
    { nombre: "🦷", id: "boton-mordida" },
    { nombre: "🦷", id: "boton-mordida" },
    { nombre: "🐱", id: "boton-maullido"},
    { nombre: "🐾", id: "boton-arañazo" },

]
felix.ataques.push(...FELIX_ATAQUES)

const LANGOS_ATAQUES = [
    { nombre: "🦷", id: "boton-mordida" },
    { nombre: "🦷", id: "boton-mordida" },
    { nombre: "🐱", id: "boton-maullido" },
    { nombre: "🐱", id: "boton-maullido" },
    { nombre: "🐾", id: "boton-arañazo" },
]

langos.ataques.push(...LANGOS_ATAQUES)

const TUCA_ATAQUES = [
    { nombre: "🦷", id: "boton-mordida" },
    { nombre: "🐾", id: "boton-arañazo" },
    { nombre: "🐱", id: "boton-maullido" },
    { nombre: "🐱", id: "boton-maullido" },
    { nombre: "🐾", id: "boton-arañazo" },
]

tuca.ataques.push(...TUCA_ATAQUES)

const PYDOS_ATAQUES = [
    { nombre: "🦷", id: "boton-mordida" },
    { nombre: "🐾", id: "boton-arañazo" },
    { nombre: "🐱", id: "boton-maullido" },
    { nombre: "🐱", id: "boton-maullido" },
    { nombre: "🐾", id: "boton-arañazo" },
]
pydos.ataques.push(...PYDOS_ATAQUES)

pekis.push(blanqui,gatito,felix,langos,tuca,pydos)

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display="none"

    pekis.forEach((pekis) => {
        opcionDePekis = `
        <input type="radio" name="mascota" id=${pekis.nombre} />
        <label class="tarjeta-de-pekis" for=${pekis.nombre}>
            <p>${pekis.nombre}</p>
            <img src=${pekis.foto} alt=${pekis.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDePekis

   
    inputBlanqui = document.getElementById("Blanqui")
    inputGatito = document.getElementById("Gatito")
    inputFelix = document.getElementById("Felix")
    inputLangos = document.getElementById("Langos")
    inputTuca = document.getElementById("Tuca")
    inputPydos = document.getElementById("Pydos")

    })

    botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)

    botonReiniciar.addEventListener("click", reiniciarJuego)

    unirseAlJuego()

}

function unirseAlJuego() {
    fetch("http://192.168.100.21:8080/unirse")
        .then(function (res) {
            if (res.ok) {
                res.text()
                    .then(function (respuesta) {
                    console.log(respuesta)
                    jugadorId = respuesta
                })
            }
        })
}

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = "none"

    if (inputBlanqui.checked) {
        spanMascotaJugador.innerHTML = inputBlanqui.id
        mascotaJugador = inputBlanqui.id
    } else if (inputGatito.checked) {
        spanMascotaJugador.innerHTML = inputGatito.id
        mascotaJugador = inputGatito.id
    } else if (inputFelix.checked) {
        spanMascotaJugador.innerHTML = inputFelix.id
        mascotaJugador = inputFelix.id
    } else if (inputLangos.checked) {
        spanMascotaJugador.innerHTML = inputLangos.id
        mascotaJugador = inputLangos.id
    } else if (inputTuca.checked) {
        spanMascotaJugador.innerHTML = inputTuca.id
        mascotaJugador = inputTuca.id
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    } else {
        alert("Selecciona una mascota")
        return
    }

    seleccionarPekis(mascotaJugador)

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = "flex"
    iniciarMapa()

}

function seleccionarPekis(mascotaJugador) {
    fetch(`http://192.168.100.21:8080/pekis/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            pekis: mascotaJugador
        })
    })
}



function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < pekis.length; i++) {
        if (mascotaJugador === pekis[i].nombre) {
            ataques = pekis[i].ataques
        }

    }
    mostrarAtaques(ataques)

}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => { 
    ataquesPekis = `
     <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
     `
     contenedorAtaques.innerHTML +=  ataquesPekis
})
    botonMaullido = document.getElementById("boton-maullido")
    botonArañazo = document.getElementById("boton-arañazo")
    botonMorder = document.getElementById("boton-mordida")
    botones = document.querySelectorAll(".BAtaque")

}

function secuenciaAtaque() {
    botones.forEach((boton) => {
      boton.addEventListener("click", (e) => {
        if (e.target.textContent === "🐱") {
            ataqueJugador.push("SUPER MAULLIDO")
            console.log(ataqueJugador)
            boton.style.background = "#A10035"
            boton.disabled = true
        } else if (e.target.textContent === "🐾") {
            ataqueJugador.push("ARAÑAZO SANGRIENTO")
            console.log(ataqueJugador)
            boton.style.background = "#A10035"
            boton.disabled = true
        } else {
            ataqueJugador.push("MORDIDA MORTAL")
            console.log(ataqueJugador)
            boton.style.background = "#A10035"
            boton.disabled = true
          }
          if (ataqueJugador.length === 5) {
            enviarAtaques()
          }
        })
    })
}

function enviarAtaques() {
    fetch(`http://192.168.100.21:8080/pekis/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    }) 
    
    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques() {
    fetch(`http://192.168.100.21:8080/pekis/${enemigoId}/ataques`)
        .then(function (res) {
            if (res.ok) {
                res.json()
                .then(function ({ ataques }) {
                    if (ataques.length === 5) {
                        ataqueEnemigo = ataques
                        combate()

                    }
            })
        }
        })
}

function seleccionarMascotaEnemiga(enemigo) {
    spanMascotaEnemiga.innerHTML = enemigo.nombre
    ataquesPekisEnemigo = enemigo.ataques
    secuenciaAtaque()

}

function ataqueAleatorioEnemigo() {
    console.log("Ataques enemigo", ataquesPekisEnemigo);

        let ataqueAleatorio = aleatorio(0, ataquesPekisEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push( "SUPER MAULLIDO")
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push( "ARAÑAZO SANGRIENTO")
    } else {
        ataqueEnemigo.push( "MORDIDA MORTAL")
}
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    clearInterval(intervalo)

    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
        } else if (ataqueJugador[index] === "SUPER MAULLIDO" && ataqueEnemigo[index] === "MORDIDA MORTAL") {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === "ARAÑAZO SANGRIENTO" && ataqueEnemigo[index] === "SUPER MAULLIDO") {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === "MORDIDA MORTAL" && ataqueEnemigo[index] === "ARAÑAZO SANGRIENTO") {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVictorias()
    }

    function revisarVictorias () {
        if (victoriasJugador == victoriasEnemigo ) {
            crearMensajeFinal("Esto fue un EMPATE")
        } else if (victoriasJugador > victoriasEnemigo){
            crearMensajeFinal("You are the WINNER")
        } else {
            crearMensajeFinal("LOSER")
        }
    }

function crearMensaje(resultado) {

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML  = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

   
        ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
        ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
        }

    function crearMensajeFinal(resultadoFinal) {
    
        sectionMensajes.innerHTML = resultadoFinal
    
        sectionReiniciar.style.display = "block"
        }


function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)     
}


function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarPekis()

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

  pekisEnemigos.forEach(function (pekis) {
    pekis.pintarPekis()
    revisarColision(pekis)
    
  })
}

function enviarPosicion(x, y) {
    fetch(`http://192.168.100.21:8080/pekis/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    
     .then(function (res) {
        if (res.ok) {
           res.json()
               .then(function ({ enemigos }) {
                if (enemigos.id === 0) {
                    console.log("todavia no hay enemigos")
                }
                console.log(enemigos)
                pekisEnemigos = enemigos.map (function (enemigo) {
                    let pekisEnemigo = null
                const pekisNombre = enemigo.pekis.nombre || ""

                if (pekisNombre === "Blanqui") {
                    pekisEnemigo = new Pekis("Blanqui", "./imagenes/blanqui-imagen.png", 5, "./imagenes/blanqui-imagen.png", enemigo.id)
                } else if (pekisNombre === "Gatito") {
                    pekisEnemigo = new Pekis("Gatito", "./imagenes/gatito-imagen.png", 5, "./imagenes/gatito-imagen.png", enemigo.id)
                } else if (pekisNombre === "Felix") {
                    pekisEnemigo = new Pekis ("Felix", "./imagenes/Felix-imagen2.png", 5, "./imagenes/Felix-imagen2.png", enemigo.id)
                } else if (pekisNombre === "Langos") {
                    pekisEnemigo = new Pekis ("Langos", "./imagenes/lango-imagen.png", 5, "./imagenes/lango-imagen.png", enemigo.id)
                } else if (pekisNombre === "Tuca") {
                    pekisEnemigo = new Pekis ("Tuca", "./imagenes/tuca-imagen.png", 5, "./imagenes/tuca-imagen.png", enemigo.id)
                } else if (pekisNombre === "Pydos") {
                    pekisEnemigo = new Pekis ("Pydos", "./imagenes/pydos-imagen.png", 5, "./imagenes/pydos-imagen.png", enemigo.id)
                } 
            
                pekisEnemigo.x = enemigo.x
                pekisEnemigo.y = enemigo.y
            
                 return pekisEnemigo

                })
        
               })
        }
      })    
    }

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}
function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5
    
}
function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
    
}
function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5
   
}
function detenerMovimiento() {
    
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionaUnaTecla(event) {
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown":
            moverAbajo()
            break   
        case "ArrowLeft":
            moverIzquierda()
            break
        case "ArrowRight":
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa() {
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    console.log(mascotaJugadorObjeto, mascotaJugador);
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener("keydown", sePresionaUnaTecla)

    window.addEventListener("keyup", sePresionaUnaTecla)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < pekis.length; i++) {
        if (mascotaJugador === pekis[i].nombre) {
            return pekis[i]
        }
    }
}
function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = 
        mascotaJugadorObjeto.y
    const abajoMascota = 
        mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = 
        mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = 
        mascotaJugadorObjeto.x



    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo

    ) {
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    console.log("Se detecto una colision");

    enemigoId = enemigo.id
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    seleccionarMascotaEnemiga(enemigo)
}

window.addEventListener("load", iniciarJuego )

