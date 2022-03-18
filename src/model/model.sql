CREATE TABLE voters (
   voter_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
   voter_name varchar(64) not null,
   voter_age int not null,
   voter_address: varchar(32) not null
);

INSERT INTO voters(voter_name, voter_age, voter_address) VALUES ('Azamat Bozorov', 28, 'Qashqadaryo');
INSERT INTO voters(voter_name, voter_age, voter_address) VALUES ('Azam Alimov', 28, 'Samarqand');
INSERT INTO voters(voter_name, voter_age, voter_address) VALUES ('Jaxongir Abdiraimov', 24, 'Xorazim');
