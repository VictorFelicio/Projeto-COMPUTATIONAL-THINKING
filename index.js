var nome = prompt("Por Favor identifique-se:\n");

console.log(`\nOlá, ${nome}, boas vindas a:\n`);
console.log("A CASA DO PEDREIRO\n");

var perg = prompt("Deseja realizar a compra via APP para receber 10% de desconto?\nDigite SIM ou NAO\n\n");
var codigo; //armazenar codg produtos
var end; //colocar fim no WHILE direto do prompt
var valor = 0;//Usei para somar o valor dos produtos
var bank = ["Caixa", "Itau", "Bradesco"];//0, 1 e 2.
var pix = "";
var key = "";
var pag = ["À Vista", "Crédito (2x)", "Crédito 3(x)", "Boleto"];
var pag2;

var produto = [
	{ item: "Colher de pedreiro", preço: "R$15,00", código: "001" },
	{ item: "Desempenadeira de Plástico", preço: "R$12,00", código: "002" },
	{ item: "Prumo de Centro", preço: "R$27,00", código: "003" },
	{ item: "Régua de Aço 2m", preço: "R$49,00", código: "004" }]

if (perg == "SIM" || perg == "sim") {

	console.log("\nParabéns você recebeu 10% de desconto em sua compra atual!\n" + "Abaixo você encontrará a lista de produtos\n");

	while (end != "FIM") { //Enquanto ñ colocar FIM vai rodar

		console.table(produto);

		codigo = prompt("Para realizar a compra digite o código do produto.\nPara encerrar a compra digite: FIM\n\n");

		switch (codigo) { //dentro de um loop para SOMAR!

			case "001":
				valor += 15;
				console.log("\x1b[35m", "Colher de Pedreiro adicionado ao carrinho!");
				break;

			case "002":
				valor += 12;
				console.log("\x1b[35m", "Desempenadeira de Plástico adicionada ao carrinho!");
				break;

			case "003":
				valor += 27;
				console.log("\x1b[35m", "Prumo de Centro adicionado ao carrinho!");
				break;

			case "004":
				valor += 49;
				console.log("\x1b[35m", "Régua de 2m adicionado ao carrinho!");
				break;

			case "FIM":
				end = codigo;
				console.log("\x1b[36m", "\nESCOLHAS FINALIZADAS!\nVAMOS ÀS FORMAS DE PAGAMENTO?\n");
				break;

			default:
				console.log("\x1b[32m", "\nPor Favor digite um código válido\n");

		}

		if (codigo == "FIM") { //quando terminar ele vem aqui.			

			console.log('\x1b[33m%s\x1b[0m', `O valor FINAL de sua compra está em R$${(valor * 0.9).toFixed(2)}\n\n`);

			var valor2 = valor

			do {

				pag2 = parseInt(prompt("FORMAS DE PAGAMENTO:\n\nÀ vista = 00\n\nCrédito (2x) = 01\n\nCrédito (3x) = 02\n\nBoleto = 03:\n\n"));

				if (pag2 != 0 && pag2 != 1 && pag2 != 2 && pag2 != 3) {

					console.log("\nSelecione uma forma válida\n")
				}


			} while (pag[pag2] == undefined);

			if (pag2 == 0) {

				console.log(`\nVocê selecionou ${pag[pag2]}`)

				do {

					bank1 = parseInt(prompt("\nPor favor Digite um banco\n\nCaixa - 00 \n\nItau - 01\n\nBradesco - 02\n\n"));

					if (bank1 != 0 && bank1 != 1 && bank1 != 2) {

						console.log("\nDigite um Banco válido\n");
					}

				} while (bank[bank1] == undefined);

				console.log(`Você selecionou ${bank[bank1]}`);


				while (pix != "aa11") {

					pix = prompt("\nDigite sua chave de identificação\n");

					if (pix != "aa11") { console.log("\nChave não encontrada Digite novamente\n") }

					else { console.log("\nChave encontrada\n") };

				}

				while (key != "1234") {

					key = prompt("\nDigite sua senha\n");

					if (key != "1234") {
						console.log("\nSenha incorreta, digite novamente\n")

					}

				}

				console.log("\x1b[32m", `\nCompra finalizada com sucesso no valor de R$${(valor2 * 0.9).toFixed(2)}`);

			}

			else if (pag2 == 1) {

				console.log(`\nVocê selecionou ${pag[pag2]}`)

				do {

					bank1 = parseInt(prompt("\nPor favor Digite um banco\n\nCaixa - 00 \n\nItau - 01\n\nBradesco - 02\n\n"));

					if (bank1 != 0 && bank1 != 1 && bank1 != 2) {

						console.log("\nDigite um Banco válido\n");
					}

				} while (bank[bank1] == undefined);

				console.log(`\nVocê selecionou ${bank[bank1]}`);


				while (pix != "aa11") {

					pix = prompt("\nDigite sua chave de identificação\n");

					if (pix != "aa11") { console.log("\nChave não encontrada Digite novamente\n") }

					else { console.log("\nChave encontrada\n") };

				}

				while (key != "1234") {

					key = prompt("\nDigite sua senha\n");

					if (key != "1234") {
						console.log("\nSenha incorreta, digite novamente\n")

					}

				}

				console.log("\x1b[32m", `\nCompra finalizada com sucesso em 2(X) no valor de R$${(valor2 * 0.9 / 2).toFixed(2)} - Parcela 1 de 2.`);
			}

			else if (pag2 == 2) {

				console.log(`\nVocê selecionou ${pag[pag2]}\n`)

				do {

					bank1 = parseInt(prompt("\nPor favor digite um banco\n\nCaixa - 00 \n\nItau - 01\n\nBradesco - 02\n\n"));

					if (bank1 != 0 && bank1 != 1 && bank1 != 2) {

						console.log("\nDigite um Banco válido\n");
					}

				} while (bank[bank1] == undefined);

				console.log(`\nVocê selecionou ${bank[bank1]}\n`);


				while (pix != "aa11") {

					pix = prompt("\nDigite sua chave de identificação\n");

					if (pix != "aa11") { console.log("\nChave não encontrada Digite novamente\n") }

					else { console.log("\nChave encontrada\n") };

				}

				while (key != "1234") {

					key = prompt("\nDigite sua senha\n");

					if (key != "1234") {
						console.log("\nSenha incorreta, digite novamente\n")

					}

				}

				console.log("\x1b[32m", `Compra finalizada com sucesso em 3(X) no valor de R$${(valor2 * 0.9 / 3).toFixed(2)} - parcela 1 de 3`);

			}

			else {

				console.log(`\nVocê selecionou ${pag[pag2]}`)


				console.log("\x1b[32m", `Boleto gerado: ${parseInt((Math.random() * Math.pow(10, 7)))}, pagavél em qualquer lotérica ou banco.`);
			}

		}

		else {

			console.log('\x1b[33m%s\x1b[0m', `O valor atual de sua compra é R$${(valor * 0.9).toFixed(2)}\n`);

		}

	}//fim do while(compras)

}//FIM DO LOOP 10% DESCONTO.

else {//INICIA SEM DESCONTO

	console.log("Uma pena! Você não recebeu 10% de desconto em sua compra atual, mas poderá comprar normalmente!\nAbaixo você encontrará a lista de produtos\n");

	while (end != "FIM") {

		console.table(produto)

		codigo = prompt("Para realizar a compra digite o código do produto.\nPara encerrar a compra digite: FIM\n");

		switch (codigo) {

			case "001":
				valor += 15;
				console.log("\x1b[35m", "Colher de Pedreiro adicionado ao carrinho!");
				break;

			case "002":
				valor += 12;
				console.log("\x1b[35m", "Desempenadeira de Plástico adicionada ao carrinho!");
				break;

			case "003":
				valor += 27;
				console.log("\x1b[35m", "Prumo de Centro adicionado ao carrinho!");
				break;

			case "004":
				valor += 49;
				console.log("\x1b[35m", "Régua de 2m adicionado ao carrinho!");
				break;

			case "FIM":
				end = codigo;
				console.log("\x1b[36m", "\nESCOLHAS FINALIZADAS!\nVAMOS ÀS FORMAS DE PAGAMENTO?\n");
				break;

			default:
				console.log("\x1b[32m", "\nPor Favor digite um código válido\n");

		}

		if (codigo == "FIM") {

			console.log('\x1b[33m%s\x1b[0m', `O valor FINAL de sua compra está em R$${(valor).toFixed(2)}`)

			var valor2 = valor

			do {

				pag2 = parseInt(prompt("\nFormas de pagamento:\n\nÀ vista = 00\n\nCrédito (2x) = 01\n\nCrédito (3x) = 02\n\nBoleto = 03:\n\n"));

				if (pag2 != 0 && pag2 != 1 && pag2 != 2 && pag2 != 3) {

					console.log("\nSelecione uma forma válida\n")
				}


			} while (pag[pag2] == undefined);

			if (pag2 == 0) {

				console.log(`Você selecionou ${pag[pag2]}`)

				do {

					bank1 = parseInt(prompt("\nPor favor Digite um banco\n\nCaixa - 00 \n\nItau - 01\n\nBradesco - 02\n\n"));

					if (bank1 != 0 && bank1 != 1 && bank1 != 2) {

						console.log("\nDigite um Banco válido\n");
					}

				} while (bank[bank1] == undefined);

				console.log(`\nVocê selecionou ${bank[bank1]}\n`);

				while (pix != "aa11") {

					pix = prompt("\nDigite sua chave de identificação\n");

					if (pix != "aa11") { console.log("\nChave não encontrada Digite novamente\n") }

					else { console.log("\nChave encontrada\n") };

				}

				while (key != "1234") {

					key = prompt("\nDigite sua senha\n");

					if (key != "1234") { console.log("\nSenha incorreta, digite novamente\n") }

				}

				console.log("\x1b[32m", `\nCompra finalizada com sucesso no valor de ${(valor2.toFixed(2))}`);

			}

			else if (pag2 == 1) {

				console.log(`\nVocê selecionou ${pag[pag2]}\n`)

				do {

					bank1 = parseInt(prompt("\nPor favor Digite um banco\n\nCaixa - 00 \n\nItau - 01\n\nBradesco - 02\n\n"));

					if (bank1 != 0 && bank1 != 1 && bank1 != 2) {

						console.log("\nDigite um Banco válido\n");
					}

				} while (bank[bank1] == undefined);

				console.log(`\nVocê selecionou ${bank[bank1]}\n`);

				while (pix != "aa11") {

					pix = prompt("\nDigite sua chave de identificação\n");

					if (pix != "aa11") { console.log("\nChave não encontrada Digite novamente\n") }

					else { console.log("\nChave encontrada\n") };

				}

				while (key != "1234") {

					key = prompt("\nDigite sua senha\n");

					if (key != "1234") { console.log("\nSenha incorreta, digite novamente\n") }

				}

				console.log("\x1b[32m", `\nCompra finalizada com sucesso em 2(X) no valor de R$${(valor2 / 2).toFixed(2)} - parcela 1 de 2.`);
			}

			else if (pag2 == 2) {

				console.log(`Você selecionou ${pag[pag2]}`)

				do {

					bank1 = parseInt(prompt("Por favor Digite um banco\n\nCaixa - 00 \n\nItau - 01\n\nBradesco - 02\n\n"));

					if (bank1 != 0 && bank1 != 1 && bank1 != 2) { console.log("Digite um Banco válido") };

				} while (bank[bank1] == undefined);

				console.log(`Você selecionou ${bank[bank1]}`);


				while (pix != "aa11") {

					pix = prompt("Digite sua chave de identificação");

					if (pix != "aa11") { console.log("Chave não encontrada Digite novamente") }

					else { console.log("chave encontrada") };

				}

				while (key != "1234") {

					key = prompt("\nDigite sua senha\n");

					if (key != "1234") {
						console.log("\nSenha incorreta, digite novamente\n")

					}
				}
				console.log("\x1b[32m", `\nCompra finalizada com sucesso em 3(X) no valor de R$${(valor2 / 3).toFixed(2)} - parcela 1 de 3`);

			}

			else {

				console.log(`\nVocê selecionou ${pag[pag2]}\n`)


				console.log("\x1b[32m", `\nBoleto gerado: ${parseInt((Math.random() * Math.pow(10, 7)))}, pagavél em qualquer lotérica ou banco.`);
			}
		}

		else {
			console.log('\x1b[33m%s\x1b[0m', `O valor atual de sua compra é R$${(valor).toFixed(2)}`)
		}

	}

}//FIM DO LOOP SEM DESCONTO.