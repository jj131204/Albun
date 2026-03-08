// 1. Definir el contenido del álbum en un array
const pages = [
    {
        front: {
            textTop: "Así es como se ve la perfección para mí..",
            img: "images/foto1.jpg",
            textBottom: "Te quiero mucho <b>ʕ⁠っ⁠•⁠ᴥ⁠•⁠ʔ⁠っ</b>"
        },
        back: {
            textTop: "Me hace inmensamente feliz cada uno de tus logros.",
            img: "images/Foto3.jpg",
            textBottom: "Estoy muy orgulloso de tí ❤️"
        }
    },
    {
        front: {
            textTop: "Verte solo 5 minutos me alegra el día entero.",
            img: "images/Foto4.jpg",
            textBottom: "❤️"
        },
        back: {
            textTop: "Más allá de la pantalla, solo te veía a ti.",
            img: "images/Foto5.jpg",
            textBottom: "❤️"
        }
    },
    {
        front: {
            textTop: "❤️",
            img: "images/comoentrenar.jpg",
            textBottom: "pd: Fue la primera vez que te tome de la mano."
        },
        back: {
            textTop: "La mejor vocera que ha tenido el SENA.",
            img: "images/foto8.jpg",
            textBottom: ""
        }
    },
    {
        front: {
            textTop: "",
            img: "images/Foto6.jpg",
            textBottom: "Te vez muy bonita con el uniforme 😍"
        },
        back: {
            textTop: "Siempre vas a ser la más bonita ❤️",
            img: "images/Foto2.jpg",
            textBottom: ""
        }
    },
    {
        front: {
            textTop: "En muy poco tiempo te volviste muy especial para mí.",
            img: "images/foto9.jpg",
            textBottom: ""
        },
        back: {
            textTop: "Ehh!! primera foto juntos",
            img: "images/foto10.jpg",
            textBottom: "Ya era hora ❤️😍"
        }
    },
    {
        front: {
            textTop: "Te quiero mucho señorita ❤️",
            img: "images/foto11.jpg",
            textBottom: "Te voy a dar muchos abrazos y besos siempre :3"
        },
        back: {
            textTop: "Más fotos juntos ❤️",
            img: "images/foto13.jpg",
            textBottom: ""
        }
    },
    {
        front: {
            textTop: "",
            img: "images/foto16.jpg",
            textBottom: "Te voy a dar muchos abrazos y besos siempre :3"
        },
        back: {
            textTop: "",
            img: "images/foto14.jpg",
            textBottom: ""
        }
    },
    {
        front: {
            textTop: "Te quiero mucho señorita ❤️",
            img: "images/foto15.jpg",
            textBottom: "Eres demasiado especial para mí"
        },
        back: {
            textTop: "Y los cumpliste feliz 💕",
            img: "images/foto19.jpg",
            textBottom: ""
        }
    },
    {
        front: {
            textTop: "",
            img: "images/foto18.jpg",
            textBottom: "Ya eres una señorita adulta responsable 😎"
        },
        back: {
            textTop: "Foto familiar 😎😎",
            img: "images/foto20.jpg",
            textBottom: ""
        }
    },
    {
        front: {
            textTop: "Me alegra mucho haberlo pasado contigo",
            img: "images/foto17.jpg",
            textBottom: "Me gustas mucho señorita ❤️❤️  "
        },
        back: {
            textTop: "Primera ida a la finca",
            img: "images/arbol.jpg",
            textBottom: "Esos mangos se acabaron rápido 😂"
        }
    },
    {
        front: {
            textTop: "Primera lluvia",
            img: "images/impermeable.jpg",
            textBottom: "Parecemos dos minions 😎"
        },
        back: {
            textTop: "Buñuela al volante 😂",
            img: "images/pilota2.jpg",
            textBottom: ""
        }
    },
    {
        front: {
            textTop: "",
            img: "images/pilota.jpg",
            textBottom: "Ya solo falta el pase 😎"
        },
        back: {
            textTop: "Primer paseo juntos 😎",
            img: "images/cienaga.jpg",
            textBottom: ""
        }
    },
    {
        front: {
            textTop: "",
            img: "images/cienaga1.jpg",
            textBottom: "Por mas planes juntos ❤️"
        },
        back: {
            textTop: "La señorita mas bonita 💕",
            img: "images/playa1.jpg",
            textBottom: ""
        }
    },
    {
        front: {
            textTop: "Las mejores aventuras son las que no se planean",
            img: "images/playa2.jpg",
            textBottom: "❤️"
        },
        back: {
            textTop: "Eres muy especial para mi señorita ❤️",
            img: "images/playa3.jpg",
            textBottom: ""
        }
    },
    {
        front: {
            textTop: "",
            img: "images/playa4.jpg",
            textBottom: "Por mas planes juntos ❤️"
        },
        back: {
            textTop: "",
            img: "images/politica.jpg",
            textBottom: ""
        }
    },
    {
        front: {
            textTop: "",
            img: "images/politica1.jpg",
            textBottom: "❤️"
        },
        back: {
            textTop: "",
            img: "images/politica2.jpg",
            textBottom: ""
        }
    },
    {
        front: {
            textTop: "Las mejores aventuras son las que no se planean",
            img: "images/politica3.jpg",
            textBottom: "❤️"
        },
        back: {
            textTop: "Cada quien se peina como quire 😂😂",
            img: "images/videoLlamada.jpg",
            textBottom: ""
        }
    },
    {
        front: {
            textTop: "",
            img: "images/videoLlamada2.jpg",
            textBottom: "❤️"
        },
        back: {
            textTop: "",
            img: "images/durmiendo.jpg",
            textBottom: ""
        }
    },
    {
        front: {
            textTop: "La mas dormilona tu ❤️",
            img: "images/durmiendo2.jpg",
            textBottom: "❤️"
        },
        back: {
            textTop: "Los mejores planes improvisados ❤️😎",
            img: "images/mirador.jpg",
            textBottom: ""
        }
    },

    {
        front: {
            textTop: "",
            img: "images/mirador1.jpg",
            textBottom: "Por mas planes juntos ❤️"
        },
        back: {
            textTop: "Nuestro primer quinceañero 😌😌",
            img: "images/quinceanero1.jpg",
            textBottom: ""
        }
    },

    {
        front: {
            textTop: "",
            img: "images/quinceanero2.jpg",
            textBottom: "❤️"
        },
        back: {
            textTop: "Siempre te ves preciosa mientras duermes ❤️",
            img: "images/quinceanero3.jpg",
            textBottom: ""
        }
    },

    {
        front: {
            textTop: "",
            img: "images/grupoJuvenil1.jpg",
            textBottom: "❤️"
        },
        back: {
            textTop: "",
            img: "images/grupoJuvenil2.jpg",
            textBottom: ""
        }
    },

    {
        front: {
            textTop: "La que mas limpia 😂😂",
            img: "images/limpieza.jpg",
            textBottom: "❤️"
        },
        back: {
            textTop: "",
            img: "images/ccCarnaval1.jpg",
            textBottom: ""
        }
    },
    {
        front: {
            textTop: "",
            img: "images/ccCarnaval2.jpg",
            textBottom: "❤️"
        },
        back: {
            textTop: "",
            img: "images/biker1.jpg",
            textBottom: ""
        }
    },
    {
        front: {
            textTop: "",
            img: "images/corazon.jpg",
            textBottom: "❤️"
        },
        back: {
            textTop: "",
            img: "images/salida1.jpg",
            textBottom: ""
        }
    },
    {
        front: {
            textTop: "",
            img: "images/salida2.jpg",
            textBottom: "❤️"
        },
        back: {
            textTop: "",
            img: "images/biker3.jpg",
            textBottom: ""
        }
    },
    {
        front: {
            textTop: "Que nunca falten las capturas de pantalla 😂😂",
            img: "images/videoLlamada3.jpg",
            textBottom: "❤️"
        },
        back: {
            textTop: "Primera navidad juntos ❤️",
            img: "images/navidad4.jpg",
            textBottom: ""
        }
    },
    {
        front: {
            textTop: "❤️",
            img: "images/navidad1.jpg",
            textBottom: "❤️"
        },
        back: {
            textTop: "❤️",
            img: "images/navidad2.jpg",
            textBottom: ""
        }
    },
    {
        front: {
            textTop: "",
            img: "images/navidad3.jpg",
            textBottom: "❤️"
        },
        back: {
            textTop: "",
            img: "images/navidad5.jpg",
            textBottom: "Nueva integrante de la familia ❤️"
        }
    },
    {
        front: {
            textTop: "Mi novia la mas hermonsa 😘",
            img: "images/anoNuevo.jpg",
            textBottom: ""
        },
        back: {
            textTop: "",
            img: "images/usiacuri.jpg",
            textBottom: "Nuevo año, nuevas rutas ❤️"
        }
    },
    // 
    {
        front: {
            textTop: "",
            img: "images/usiacuri1.jpg",
            textBottom: ""
        },
        back: {
            textTop: "",
            img: "images/08_03_2026_01.jpeg",
            textBottom: "Primera ruta a puerto ❤️"
        }
    },
    {
        front: {
            textTop: "Mi novia la mas hermonsa 😘",
            img: "images/08_03_2026_02.jpeg",
            textBottom: "Muelle de puerto colombia ✌️✌️"
        },
        back: {
            textTop: "",
            img: "images/08_03_2026_03.jpeg",
            textBottom: "Por mas atardecers juntos ❤️"
        }
    },
    {
        front: {
            textTop: "Mi novia la mas hermonsa 😘",
            img: "images/08_03_2026_04.jpeg",
            textBottom: ""
        },
        back: {
            textTop: "",
            img: "images/08_03_2026_05.jpeg",
            textBottom: "Los 25 dolares 🤣🤣"
        }
    },
    // Este siempre queda de ultimo
    {
        front: {
            textTop: "",
            img: "images/08_03_2026_06.jpeg",
            textBottom: "El nine tu tu 😂😂 "
        },
        back: {
            textTop: "Por todos los momentos que atesoramos y por los infinitos que aún nos quedan por crear juntos..",
            img: "", // no tiene imagen
            textBottom: "Pd: Por muchos recuerdos más contigo ❤️"
        }
    }

];
function createFlipbook() {
    const flipbook = document.getElementById("flipbook");

    pages.forEach(({ front, back }) => {
        const leaf = document.createElement("div");
        leaf.className = "leaf";

        const frontPage = document.createElement("div");
        frontPage.className = "page front";
        frontPage.innerHTML = `
            <p class="textPhoto">${front.textTop || ""}</p>
            ${front.video
                ? `<video controls><source src="${front.video}" type="video/mp4" >Tu navegador no soporta el video.</video>`
                : front.img
                    ? `<img class="image" src="${front.img}" alt="">`
                    : '<div class="noPhoto"></div>'}
            <p class="textPhoto">${front.textBottom || ""}</p>
        `;

        const backPage = document.createElement("div");
        backPage.className = "page back";
        backPage.innerHTML = `
            <p class="textPhoto">${back.textTop || ""}</p>
            ${back.video
                ? `<video  controls><source src="${back.video}" type="video/mp4" >Tu navegador no soporta el video.</video>`
                : back.img
                    ? `<img class="image" src="${back.img}" alt="">`
                    : '<div class="noPhoto"></div>'}
            <p class="textPhoto">${back.textBottom || ""}</p>
        `;

        leaf.appendChild(frontPage);
        leaf.appendChild(backPage);
        flipbook.appendChild(leaf);
    });
}

// 3. Clase para controlar el álbum
class FlipBook {
    constructor(bookElem) {
        this.elems = {
            book: bookElem,
            leaves: bookElem.querySelectorAll(".leaf"),
            buttons: {
                next: document.getElementById("nextPage"),
                prev: document.getElementById("prevPage")
            }
        };
        this.setupEvents();
        this.currentPagePosition = 0;
        this.turnPage(0);
    }

    setPagePosition(page, position, index) {
        let transform = "translate3d(0,0," + ((position < 0 ? 1 : -1) * Math.abs(index)) + "px)";
        if (position < 0) {
            transform += " rotate3d(0,1,0,-180deg)";
            page.classList.add("turned");
        } else {
            page.classList.remove("turned");
        }
        if (page.style.transform !== transform) {
            page.style.transform = transform;
        }
    }

    turnPage(delta) {
        this.currentPagePosition += delta;

        if (this.currentPagePosition < 0) {
            this.currentPagePosition = 0;
            return;
        }
        if (this.currentPagePosition > this.elems.leaves.length) {
            this.currentPagePosition = this.elems.leaves.length;
            return;
        }

        this.elems.leaves.forEach((page, index) => {
            const pageNumber = index;
            this.setPagePosition(page, pageNumber - this.currentPagePosition, index);
        });

        // Actualizar botones
        this.elems.buttons.prev.disabled = this.currentPagePosition === 0;
        this.elems.buttons.next.disabled = this.currentPagePosition === this.elems.leaves.length;
    }

    setupEvents() {
        this.elems.buttons.next.addEventListener("click", () => this.turnPage(1));
        this.elems.buttons.prev.addEventListener("click", () => this.turnPage(-1));
    }
}

// 4. Inicializar al cargar el documento
document.addEventListener("DOMContentLoaded", () => {
    createFlipbook();
    const flipBook = new FlipBook(document.getElementById("flipbook"));
});