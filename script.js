class contaBancaria {
    #saldo;
    constructor() {
        this.#saldo = 0;
    }

    depositar(valor) {
        this.#saldo += valor;
    }

    sacar(valor) {
        this.#saldo -= valor;
    }

    temSaldoParasacar(valor) {
        return valor <= this.#saldo;
    }

    get saldo() {
        return this.#saldo;
    }
}

class caixaEletronico {
    constructor(conta) {
        this.conta = conta;
    }

    depositar() {
        const valorDeposito = parseFloat(document.getElementById("valordeposito").value);

        if (isNaN(valorDeposito) || valorDeposito <= 0) {
            alert("Insira um valor válido para depósito.");
            return;
        }

        this.conta.depositar(valorDeposito);
        this.mostrarSaldo(this.conta.saldo);
    }

    sacar() {
        const valorSaque = parseFloat(document.getElementById("valorsaque").value);

        if (isNaN(valorSaque) || valorSaque <= 0) {
            alert("Insira um valor válido para saque.");
            return;
        }

        if (this.conta.temSaldoParasacar(valorSaque)) {
            this.conta.sacar(valorSaque);
            this.mostrarSaldo(this.conta.saldo);
        } else {
            alert("Saldo insuficiente para saque!");
        }
    }

    mostrarSaldo(saldo) {
        document.getElementById("saldo").textContent = `Saldo: R$ ${saldo.toFixed(2)}`;
        document.getElementById("valordeposito").value = '';
        document.getElementById("valorsaque").value = '';
    }
}

const conta = new contaBancaria();
const caixaEletronico = new caixaEletronico(conta);