       function selecionarItem(element) {
            const tipo = element.classList[0];
            const isSelected = element.classList.contains('selected');
            
            document.querySelectorAll(`.${tipo}`).forEach(i => i.classList.remove('selected'));

            if (!isSelected) {
                element.classList.add('selected');
            }

            checkAllSelected();
        }

        function checkAllSelected() {
            const pratoSelecionado = document.querySelector('.itensPratos.selected') !== null;
            const bebidaSelecionada = document.querySelector('.itensBebidas.selected') !== null;
            const sobremesaSelecionada = document.querySelector('.itensSobremesas.selected') !== null;
            const acaoBotao = document.getElementById('acaoBotao');
            if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
                acaoBotao.classList.add('ativar');
                acaoBotao.textContent = 'Finalizar pedido';
                acaoBotao.disabled = false;
            } else {
                acaoBotao.classList.remove('ativar');
                acaoBotao.textContent = 'Selecione os 3 itens para fechar o pedido';
                acaoBotao.disabled = true;
            }
        }

        function abrirConfirmacao() {
            document.querySelector(".janelaConfirmacao").classList.remove('escondido');
        }

        document.getElementById('acaoBotao').addEventListener('click', function() {
            const pratoSelecionado = document.querySelector('.itensPratos.selected');
            const bebidaSelecionada = document.querySelector('.itensBebidas.selected');
            const sobremesaSelecionada = document.querySelector('.itensSobremesas.selected');

            if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
                const nomePrato = pratoSelecionado.getAttribute('data-nome');
                const precoPrato = parseFloat(pratoSelecionado.getAttribute('data-preco'));
                const nomeBebida = bebidaSelecionada.getAttribute('data-nome');
                const precoBebida = parseFloat(bebidaSelecionada.getAttribute('data-preco'));
                const nomeSobremesa = sobremesaSelecionada.getAttribute('data-nome');
                const precoSobremesa = parseFloat(sobremesaSelecionada.getAttribute('data-preco'));

                const total = precoPrato + precoBebida + precoSobremesa;

                document.getElementById('detalhesPedido').innerHTML = `
                    <p>Prato: ${nomePrato} - R$ ${precoPrato.toFixed(2)}</p>
                    <p>Bebida: ${nomeBebida} - R$ ${precoBebida.toFixed(2)}</p>
                    <p>Sobremesa: ${nomeSobremesa} - R$ ${precoSobremesa.toFixed(2)}</p>
                `;
                document.getElementById('totalPedido').textContent = `R$ ${total.toFixed(2)}`;

                abrirConfirmacao();
            } else {
                alert('Por favor, selecione um prato, uma bebida e uma sobremesa.');
            }
        });

        function botaoCancelar() {
            document.querySelector('.janelaConfirmacao').classList.add("escondido");
        }

        function enviarPedidoWhatsApp() {
            const pratoSelecionado = document.querySelector('.itensPratos.selected');
            const bebidaSelecionada = document.querySelector('.itensBebidas.selected');
            const sobremesaSelecionada = document.querySelector('.itensSobremesas.selected');

            if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
                const nomePrato = pratoSelecionado.getAttribute('data-nome');
                const precoPrato = parseFloat(pratoSelecionado.getAttribute('data-preco'));
                const nomeBebida = bebidaSelecionada.getAttribute('data-nome');
                const precoBebida = parseFloat(bebidaSelecionada.getAttribute('data-preco'));
                const nomeSobremesa = sobremesaSelecionada.getAttribute('data-nome');
                const precoSobremesa = parseFloat(sobremesaSelecionada.getAttribute('data-preco'));

                const total = precoPrato + precoBebida + precoSobremesa;

                const mensagem = `Olá, gostaria de fazer um pedido:\n\n` +
                                 `Prato: ${nomePrato} - R$ ${precoPrato.toFixed(2)}\n` +
                                 `Bebida: ${nomeBebida} - R$ ${precoBebida.toFixed(2)}\n` +
                                 `Sobremesa: ${nomeSobremesa} - R$ ${precoSobremesa.toFixed(2)}\n\n` +
                                 `Total: R$ ${total.toFixed(2)}`;

                const numeroWhatsApp = '5521995214745'; 
                const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

                window.open(urlWhatsApp, '_blank');
            } else {
                alert('Por favor, selecione um prato, uma bebida e uma sobremesa.');
            }
        }
        function abrirConfirmacao() {
            const painel = document.querySelector(".janelaConfirmacao"); 
            const infoPedido = document.querySelector(".infoPedido"); 
            painel.classList.remove('escondido'); 
            infoPedido.classList.remove('escondido');
        }
        function botaoCancelar() {
            const mudaClasse = document.querySelector('.janelaConfirmacao');
            mudaClasse.classList.toggle("escondido");
        }
        