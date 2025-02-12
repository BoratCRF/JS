// exemplo com encapsulamento

class ContaBancaria {
    #saldo; // Atributo privado
    constructor(titular, saldo){
        this.titular = titular;
        this.#saldo = saldo;
    }
    depositar(valor){
        this.#saldo += valor;
        document.write("Depósito de R$ " + valor + " realizado <br>");
    }
    consultarSaldo(){
        document.write("Saldo atual de "+this.titular+" | R$ " + this.#saldo+"<br>");
    }
    sacar(valor){
        if (valor > this.#saldo){
            document.write("Saldo insuficiente para saque na conta to titular: "+this.titular+"<br>")
        } else{
            this.#saldo -= valor;
            document.write("Saldo de "+this.titular+ " após o saque: R$ " + this.#saldo+"<br>");
        }
    }
    transferir(valor,destinatario){
        if (valor > this.#saldo){
            document.write("Saldo insuficiente para transferência na conta do titular: "+this.titular+"<br>")
        } else{
            this.#saldo -= valor;
            destinatario.#saldo += valor
            document.write("Transferência no valor de R$"+valor + " De " +this.titular +" para a conta de "+destinatario.titular+"<br>")
            document.write("Saldo após a transferência: R$ " + this.#saldo+"<br>");
        }

    }
}
// Criando as contas
let conta1 = new ContaBancaria ("Sarah", 500);
let conta2 = new ContaBancaria("Vinicius", 100);


// Consultando saldo
conta1.consultarSaldo();
conta2.consultarSaldo();

// Depositando nas contas

conta1.depositar(25);
conta2.depositar(25);

// Consultando após depósito

conta1.consultarSaldo();
conta2.consultarSaldo();

// Sacando das contas

conta1.sacar(10);
conta2.sacar(10);

// transferindo da conta da Sarah para de Vinicius e consultando os saldos em seguida
conta1.transferir(10,conta2);
conta1.consultarSaldo();
conta2.consultarSaldo();
