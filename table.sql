create table user(
    id int Primary Key autoincrement,
    name varchar(20),
    email varchar(30),
    password varchar(20),
    status varchar(20),
    role varchar(20),
    contactnumber varchar(30),
    UNIQUE (email)
);

insert into user(name,email,password,status,role,contactnumber) values ('Preksha','patilpreksha1112@gmail.com','Pre@123','true','admin','7490945369');