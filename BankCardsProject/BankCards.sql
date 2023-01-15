create table masterCard(
id int identity primary key,
cardType nvarchar(50) not null,
cardNumber int,
cardCharges int,
cardLimit int
)

create table paypal(
id int identity primary key,
cardType nvarchar(50) not null,
cardNumber int,
cardCharges int,
cardLimit int
)

create table visa(
id int identity primary key,
cardType nvarchar(50) not null,
cardNumber int,
cardCharges int,
cardLimit int
)

select * from masterCard
select * from paypal
select * from visa
