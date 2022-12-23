var botaoConfirmacao = document.querySelector("#botao-confirmar");

botaoConfirmacao.addEventListener("click", function(event){
    event.preventDefault();

    //Buscando dados do cliente
    var dados = {
        email: form.inputEmail4.value,
        telefone: form.inputPassword4.value,
        endereco: form.inputAddress.value,
        numero: form.inputAddress2.value,
        cidade: form.inputCity.value,
        cep: form.inputZip.value
    }

    console.log(`Seu Email: ${dados.email}`);
    console.log(`Seu Telefone: ${dados.telefone}`);
    console.log(`Seu Endereço: ${dados.endereco}`);
    console.log(`Seu Numero: ${dados.numero}`);
    console.log(`Sua Cidade: ${dados.cidade}`);
    console.log(`Seu CEP: ${dados.cep}`);

        // Buscando produto  
        var select = document.getElementById('cerveja');
        var cerveja = select.options[select.selectedIndex].value;
        console.log(`Sua Cerveja escolhida foi a: ${cerveja}`);
        
        var select1 = document.getElementById('quantidade');
        var quantidade = select1.options[select1.selectedIndex].value;
        console.log(`Voce escolheu:${quantidade} unidades`);
        
});
