create table customers (
    customer_id serial primary key,
    name varchar (200) not null,
    email varchar (200) not null,
    address varchar (300) not null,
    password varchar (50) not null
);

create table items (
    item_id serial primary key,
    name varchar (200) not null,
    description text not null,
    price numeric not null,
    quantity numeric not null
);

-- FOR LATER: add reviews, add ratings