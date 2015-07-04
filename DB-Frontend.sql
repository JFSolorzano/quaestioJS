CREATE DATABASE QUAESTIO_FRONTEND;
USE QUAESTIO_FRONTEND;

CREATE USER 'FRONTEND'@'localhost' IDENTIFIED BY 'P7K9';
GRANT ALL PRIVILEGES ON `QUAESTIO_FRONTEND`. * TO 'FRONTEND'@'localhost';
FLUSH PRIVILEGES;

CREATE TABLE CARGOS(
	ID int not null primary key auto_increment,
    Nombre nvarchar(300),
    Descripcion nvarchar(20000),
    FechaRegistro datetime
);

CREATE TABLE USUARIOS(
	ID int not null primary key auto_increment,
    fkCargoID int not null,
    Usuario nvarchar(40) not null,
    Contrasena varbinary(256) not null,
    FechaIngreso datetime,
    FechaModificacion datetime,
    FOREIGN KEY fkCargoID_USU (fkCargoID) REFERENCES CARGOS(ID) ON DELETE RESTRICT ON UPDATE CASCADE
);


CREATE TABLE DATOS_PERSONALES(
	ID int not null primary	key auto_increment,
    fkUsuarioID int not null,
    Nombres nvarchar(80) not null,
    Apellidos nvarchar(80) not null,
    Edad int,
    Sexo nvarchar(15),
    Biografia nvarchar(20000),
    FechaModificacion datetime,
    FOREIGN KEY fkUsuarioID_DAT (fkUsuarioID) REFERENCES USUARIOS(ID) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE SECCION(
    ID int not null primary key auto_increment,
    Nombre nvarchar(100),
    Descripcion nvarchar(1000),
    FechaRegistro datetime
);

CREATE TABLE CAMPOS(
	ID int not null primary key auto_increment,
    fkSeccionID int not null,
    Nombre nvarchar(100),
    Descripcion nvarchar(3000),
    esEntero bit,
    esTexto bit,
    esTextoCorto bit,
    esTextoDiminuto bit,
    esImagen bit,
    esDecimal bit,
    esHorayFecha bit,
    esDocumento bit,
    FOREIGN KEY fkSeccionID_C(fkSeccionID) REFERENCES SECCION(ID) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE USUARIO_CAMPO(
	ID int not null primary key auto_increment,
    fkUsuarioID int not null,
    fkCampoID int not null,
    esModificacion bit,
    esCreacion bit,
    FOREIGN KEY fkUsuarioID_UC(fkUsuarioID) REFERENCES USUARIOS(ID) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY fkCampoID_UC(fkCampoID) REFERENCES CAMPOS(ID) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE ENTEROS(
	ID int not null primary key auto_increment,
    fkCampoID int not null,
    Valor int,
    FechaRegistro datetime,
    FechaModificacion datetime,
    FOREIGN KEY fkCampoID_ENT(fkCampoID) REFERENCES CAMPOS(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE TEXTOS(
	ID int not null primary key auto_increment,
    fkCampoID int not null,
    Valor nvarchar(20000),
    FechaRegistro datetime,
    FechaModificacion datetime,
    FOREIGN KEY fkCampoID_TEX (fkCampoID) REFERENCES CAMPOS(ID) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE TEXTOSCORTOS(
	ID int not null primary key auto_increment,
    fkCampoID int not null,
    Valor nvarchar(8000),
    FechaRegistro datetime,
    FechaModificacion datetime,
    FOREIGN KEY fkCampoID_TC(fkCampoID) REFERENCES CAMPOS(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE TEXTOSDIMINUTOS(
	ID int not null primary key auto_increment,
    fkCampoID int not null,
    Valor nvarchar(100),
    FechaRegistro datetime,
    FechaModificacion datetime,
    FOREIGN KEY fkCampoID_TD(fkCampoID) REFERENCES CAMPOS(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IMAGENES(
	ID int not null primary key auto_increment,
    fkCampoID int not null,
    Valor varbinary(40000),
    FechaRegistro datetime,
    FechaModificacion datetime,
    FOREIGN KEY fkCampoID_IMA(fkCampoID) REFERENCES CAMPOS(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE DECIMALES(
	ID int not null primary key auto_increment,
    fkCampoID int not null,
    Valor decimal(65,30),
    FechaRegistro datetime,
    FechaModificacion datetime,
    FOREIGN KEY fkCampoID_DEC(fkCampoID) REFERENCES CAMPOS(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE DOCUMENTOS(
	ID int not null primary key auto_increment,
    fkCampoID int not null,
    Valor blob(50000),
    FechaRegistro datetime,
    FechaModificacion datetime,
    FOREIGN KEY fkCampoID_DOC(fkCampoID) REFERENCES CAMPOS(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

 CREATE TABLE FAQ(
	ID int not null primary key auto_increment,
    Pregunta varchar(500),
    Respuesta varchar(8000),
    FechaCreacion datetime,
    FechaModificacion datetime
 );

INSERT INTO FAQ(Pregunta, Respuesta, FechaCreacion, FechaModificacion) VALUES ('Pregunta?', 'Respuesta',now(),now()),('Pregunta1?', 'Respuesta1',now(),now());



SELECT ID, Pregunta, Respuesta, FechaModificacion, FechaCreacion FROM FAQ ORDER BY FechaModificacion;
