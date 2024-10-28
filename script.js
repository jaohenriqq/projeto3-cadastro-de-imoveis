let property = ['']
let pick2 = prompt(`cadastro de imóveis.\nclique 1 para iniciar`)
while(pick2 !=3) {
  let pick = prompt(`você tem ${property.length} imóveis cadastrados\n\n 1-SALVAR UM NOVO IMÓVEL\n 2-LISTAR IMÓVEIS\n 3-SAIR`)
  if(pick= 1){
   let name = prompt('qual o nome do imovel adicionado?')
   let information = {
    proprietario:prompt('qual o nome do proprietário?'),
    quartos:prompt('qual a quantidade de quartos?'),
    banheiro:prompt('qual a quantidade de banheiros?'),
    garagem:prompt('tem garagem?')
   }
   property.push(information)
  }
   else if (pick= 2){
    let lista = prompt('qual o nome do imóvel que você quer saber as informações?')

   }
 }

    