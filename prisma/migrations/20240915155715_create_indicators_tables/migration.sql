-- CreateTable
CREATE TABLE "Maquina" (
    "maquina_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Indicadores" (
    "indicadores_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ind_oee" REAL NOT NULL,
    "ind_qualidade" REAL NOT NULL,
    "ind_performance" REAL NOT NULL,
    "ind_disponibilidade" REAL NOT NULL,
    "tempo_programado" INTEGER NOT NULL,
    "tempo_em_producao" INTEGER NOT NULL,
    "tempo_teorico_producao" INTEGER NOT NULL,
    "tempo_paradas" INTEGER NOT NULL,
    "pecas_produzidas" INTEGER NOT NULL,
    "pecas_defeito" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "maquina_id" INTEGER NOT NULL,
    CONSTRAINT "Indicadores_maquina_id_fkey" FOREIGN KEY ("maquina_id") REFERENCES "Maquina" ("maquina_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Indicadores_maquina_id_key" ON "Indicadores"("maquina_id");
