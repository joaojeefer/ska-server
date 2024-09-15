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

-- CreateIndex
CREATE UNIQUE INDEX "Contato_email_key" ON "Contato"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Contato_usuario_id_key" ON "Contato"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_tipo_usuario_id_key" ON "Usuario"("tipo_usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_turno_id_key" ON "Usuario"("turno_id");
