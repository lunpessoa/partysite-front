<%@page language="java" import="java.sql.*" %>

<%

    String banco   = "patyparty";
    String usuario = "root";
    String senha   = "";
    String url     = "jdbc:mysql://localhost:3306/" + banco;
    String driver  = "com.mysql.jdbc.Driver";

    // carrega o driver na memoria
    Class.forName( driver );

    // criar variavel para conectar com banco de dados
    Connection conexao ; 

    // abrir a conexao com o banco 
    conexao = DriverManager.getConnection( url , usuario , senha );

    // cria o statement 
    // ele é o responsável por executar o comando do SQL
    Statement stm = conexao.createStatement();

    // executa o comando do SQL
    stm.executeUpdate( sql );

    // inserindo informações na tabela
    String vnome  = request.getParameter("txtnome");
    String vsenha = request.getParameter("txtsenha");
    String vemail  = request.getParameter("txtemail");
    String sql = "insert into usuarios (nome,senha, email) values('" + vnome + "', '" + vsenha + "', '" + vemail + "')";

    stm.close();
    conexao.close();
%>

/*// criação do banco
create database banco_tcm

// criação da tabela usuarios
CREATE TABLE usuarios ( 
    id int PRIMARY KEY AUTO_INCREMENT,
    nome varchar(255) NOT NULL, 
    senha varchar(255) NOT NULL, 
    email varchar(255) NOT NULL
);
    telefone int(11) NOT NULL
    sobrenome varchar(255) NOT NULL, 
