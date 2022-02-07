class Calculadora {
    operand1 = 0;
    operand2 = 0;
    operation;

    setOperand1(_operand1) {
        this.operand1 = _operand1;
    }

    setOperand2(_operand2) {
        this.operand2 = _operand2;
    }

    setOperation(_operation) {
        this.operation = _operation;
    }

    getResult() {

        if(this.operation == '+') {
            return this.operand1 + this.operand2;
        } else if(this.operation === '-') {
            return this.operand1 - this.operand2;
        } else if(this.operation === '/') {
            return this.operand1 / this.operand2;
        }else if(this.operation === '*') {
            return this.operand1 * this.operand2
        }
    }

    clearCalculator() {
        this.operand1 = 0;
        this.operand2 = 0;
        this.operation = 0;
    }
}

const calc = new Calculadora;

$(document).ready(function() {
    let valor = '';
    let valorTela = '';

    $('button').click(function() {
        let botaoApertado = $(this).text().trim();

        if(botaoApertado === '+' || botaoApertado === '-' || botaoApertado === '*' || botaoApertado === '/') {
            calc.setOperand1(Number(valor));
            valor = '';
            calc.setOperation(botaoApertado);
        }

        if(botaoApertado !== 'LIMPAR' && botaoApertado !== '=') {
            valor += botaoApertado;
            valorTela += botaoApertado;
        } 

        $('#display').text(valorTela);

        if(botaoApertado === '=') {
            calc.setOperand2(Number(valor.substr(1)));
            $('#display').text(calc.getResult());
        }

        if(botaoApertado === 'LIMPAR') {
            calc.clearCalculator();
            $('#display').text(0);
            valorTela = '';
            valor = 0;
        }        
    });
});
