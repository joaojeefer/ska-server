-- CreateTable
CREATE TABLE "Tipo_Usuario" (
    "tipo_usuario_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Turno" (
    "turno_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "inicio" DATETIME NOT NULL,
    "fim" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Contato" (
    "contato_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" INTEGER,
    "complemento" TEXT,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    CONSTRAINT "Contato_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario" ("usuario_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Usuario" (
    "usuario_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "data_nascimento" DATETIME,
    "tipo_usuario_id" INTEGER NOT NULL,
    "turno_id" INTEGER NOT NULL,
    CONSTRAINT "Usuario_tipo_usuario_id_fkey" FOREIGN KEY ("tipo_usuario_id") REFERENCES "Tipo_Usuario" ("tipo_usuario_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Usuario_turno_id_fkey" FOREIGN KEY ("turno_id") REFERENCES "Turno" ("turno_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

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
CREATE UNIQUE INDEX "Contato_email_key" ON "Contato"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Contato_usuario_id_key" ON "Contato"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Indicadores_maquina_id_key" ON "Indicadores"("maquina_id");
