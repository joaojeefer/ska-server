-- CreateTable
CREATE TABLE `Tipo_Usuario` (
    `tipo_usuario_id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`tipo_usuario_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Turno` (
    `turno_id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NOT NULL,
    `inicio` DATETIME(3) NOT NULL,
    `fim` DATETIME(3) NOT NULL,

    PRIMARY KEY (`turno_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contato` (
    `contato_id` INTEGER NOT NULL AUTO_INCREMENT,
    `telefone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `rua` VARCHAR(191) NOT NULL,
    `numero` INTEGER NULL,
    `complemento` VARCHAR(191) NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `usuario_id` INTEGER NOT NULL,

    UNIQUE INDEX `Contato_email_key`(`email`),
    UNIQUE INDEX `Contato_usuario_id_key`(`usuario_id`),
    PRIMARY KEY (`contato_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `usuario_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `data_nascimento` DATETIME(3) NULL,
    `tipo_usuario_id` INTEGER NOT NULL,
    `turno_id` INTEGER NOT NULL,

    UNIQUE INDEX `Usuario_cpf_key`(`cpf`),
    PRIMARY KEY (`usuario_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Maquina` (
    `maquina_id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NOT NULL,
    `localizacao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`maquina_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Indicadores` (
    `indicadores_id` INTEGER NOT NULL AUTO_INCREMENT,
    `ind_oee` DOUBLE NOT NULL,
    `ind_qualidade` DOUBLE NOT NULL,
    `ind_performance` DOUBLE NOT NULL,
    `ind_disponibilidade` DOUBLE NOT NULL,
    `tempo_programado` INTEGER NOT NULL,
    `tempo_em_producao` INTEGER NOT NULL,
    `tempo_teorico_producao` INTEGER NOT NULL,
    `tempo_paradas` INTEGER NOT NULL,
    `pecas_produzidas` INTEGER NOT NULL,
    `pecas_defeito` INTEGER NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `maquina_id` INTEGER NOT NULL,

    UNIQUE INDEX `Indicadores_maquina_id_key`(`maquina_id`),
    PRIMARY KEY (`indicadores_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Contato` ADD CONSTRAINT `Contato_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `Usuario`(`usuario_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_tipo_usuario_id_fkey` FOREIGN KEY (`tipo_usuario_id`) REFERENCES `Tipo_Usuario`(`tipo_usuario_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_turno_id_fkey` FOREIGN KEY (`turno_id`) REFERENCES `Turno`(`turno_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Indicadores` ADD CONSTRAINT `Indicadores_maquina_id_fkey` FOREIGN KEY (`maquina_id`) REFERENCES `Maquina`(`maquina_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
