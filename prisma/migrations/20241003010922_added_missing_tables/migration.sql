-- DropIndex
DROP INDEX "Indicadores_maquina_id_key";

-- AlterTable
ALTER TABLE "Indicadores" ADD COLUMN "tempo_producao_real" INTEGER;

-- CreateTable
CREATE TABLE "Sensores" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT,
    "maquina_id" INTEGER NOT NULL,
    CONSTRAINT "Sensores_maquina_id_fkey" FOREIGN KEY ("maquina_id") REFERENCES "Maquina" ("maquina_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tipo_Evento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT,
    "criticidade" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Evento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_hora" DATETIME NOT NULL,
    "sensores_id" INTEGER NOT NULL,
    "tipo_evento_id" INTEGER NOT NULL,
    "ordem_producao_id" INTEGER NOT NULL,
    CONSTRAINT "Evento_sensores_id_fkey" FOREIGN KEY ("sensores_id") REFERENCES "Sensores" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Evento_tipo_evento_id_fkey" FOREIGN KEY ("tipo_evento_id") REFERENCES "Tipo_Evento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Evento_ordem_producao_id_fkey" FOREIGN KEY ("ordem_producao_id") REFERENCES "Ordem_Producao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT
);

-- CreateTable
CREATE TABLE "Ordem_Producao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantidade_pecas" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "data_execucao" DATETIME NOT NULL,
    "data_criacao" DATETIME NOT NULL,
    "descricao" TEXT,
    "tempo_planejado" INTEGER NOT NULL,
    "produto_id" INTEGER NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    CONSTRAINT "Ordem_Producao_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Ordem_Producao_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario" ("usuario_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Estoque" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantidade" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Materia_Prima" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT,
    "data_fabricacao" DATETIME NOT NULL,
    "data_validade" DATETIME NOT NULL,
    "massa" REAL NOT NULL,
    "estoque_id" INTEGER NOT NULL,
    CONSTRAINT "Materia_Prima_estoque_id_fkey" FOREIGN KEY ("estoque_id") REFERENCES "Estoque" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Receita" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "materia_prima_id" INTEGER NOT NULL,
    "produto_id" INTEGER NOT NULL,
    CONSTRAINT "Receita_materia_prima_id_fkey" FOREIGN KEY ("materia_prima_id") REFERENCES "Materia_Prima" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Receita_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
