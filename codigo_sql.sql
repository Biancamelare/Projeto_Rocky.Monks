CREATE TABLE tabela_unificada(
  id_marca INTEGER,
  marca TEXT,
  data TEXT,
  vendas INTEGER,
  valor_veiculo INTEGER,
  nome_veiculo TEXT
);

INSERT INTO tabela_unificada (id_marca,marca,data,vendas,valor_veiculo,nome_veiculo)
SELECT
database_2.c1,
database_2.c2,
database_1.c1,
database_1.c3,
database_1.c4,
database_1.c5
FROM
database_1 INNER JOIN database_2 ON database_1.c2 = database_2.c1;




 