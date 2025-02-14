// Exec 3 Vinicius


class Televisao {
    constructor(canalAtual, volume) {
        this.canalAtual = canalAtual
        this.volume = volume
    }

    aumentarVolume() {
        // alert ("anti-bug")
        let resp;
        while (true) {
            resp = prompt("Deseja aumentar o volume da TV ? <s/n> ")
            if (resp == "s" && this.volume < 100) {
                alert("O volume da TV passou de " + this.volume)
                this.volume += 10
                alert(" para " + this.volume);
            } else if (resp == "s" && (this.volume += 10) > 100) {
                this.volume = 100
                alert("O volume da TV está no máximo")
            } else {
                alert("O volume da TV está em: " + this.volume)
                break;
            }
        }
    }
    diminuirVolume() {
        // alert ("anti-bug")
        let resp;
        while (true) {
            resp = prompt("Deseja diminuir o volume da TV ? <s/n> ")
            if (resp == "s" && this.volume >= 0) {
                alert("O volume da TV passou de " + this.volume)
                this.volume -= 10
                alert(" para " + this.volume);
            } else if (resp == "s" && (this.volume -= 10) < 0) {
                this.volume = 0
                alert("O volume da TV está no mínimo")
            } else {
                alert("O volume da TV está em: " + this.volume)
                break;
            }
        }

    }
    mudarCanal() {
        // alert ("anti-bug")
        let resp = prompt("Deseja mudar o canal da TV ? <s/n> ")
        if (resp == "s") {
            this.canalAtual = parseInt(prompt("Qual canal deseja mudar ?"))
            alert("O canal atual é: " + this.canalAtual)
        } else {
            alert("O canal atual é: " + this.canalAtual)
        }
    }
}

tv = new Televisao(4, 80)

tv.aumentarVolume()
// tv.diminuirVolume()
// tv.mudarCanal()