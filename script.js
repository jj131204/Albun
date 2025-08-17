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

    // Este siempre queda de ultimo
    {
        front: {
            textTop: "Primera lluvia",
            img: "images/impermeable.jpg",
            textBottom: "Parecemos dos minions 😎"
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