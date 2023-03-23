//Bianca Vitorino de Souza Melaré
//Projeto classificatório Rocky Monks - Código JS


var database_1,database_2;

function lerJson(){
  try{
    database_1 = require("./json/broken_database_1.json");
    database_2 = require("./json/broken_database_2.json"); 
  } catch(error){
    console.log("Erro ao ler o arquivo." + "\n" + error);
  }
} 
 

function alterarValores(db_1,db_2){

for (i=0; i< db_1.length; i++)
{
       for (j=0; j<db_1[i].nome.length; j++)
       {
               db_1[i].nome = db_1[i].nome.replace('ø','o');
               db_1[i].nome = db_1[i].nome.replace('æ','a');
               db_1[i].vendas = Number(db_1[i].vendas);       
       }
}
for (i=0; i< db_2.length; i++)
{
       for (j=0; j<db_2[i].marca.length; j++)
       {
               db_2[i].marca = db_2[i].marca.replace('ø','o');
               db_2[i].marca = db_2[i].marca.replace('æ','a');      
       }
}
}

function exportarJson(db_1,db_2){
  let fs = require("fs");

  fs.writeFile("./json/database_1.json", JSON.stringify(db_1), err => {
      if (err) throw err; 
  })

  fs.writeFile("./json/database_2.json", JSON.stringify(db_2), err => {
    if (err) throw err; 
  })
}

 lerJson();
 alterarValores(database_1,database_2);
 exportarJson(database_1,database_2);




