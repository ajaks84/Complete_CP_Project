INSERT INTO country VALUES (1,'Belarus');
INSERT INTO country VALUES (2,'Russia');
INSERT INTO country VALUES (3,'Ukraine');

INSERT INTO factory VALUES (1,'Grodno',1);
INSERT INTO factory VALUES (2,'Stupino',2);
INSERT INTO factory VALUES (3,'Enem',2);
INSERT INTO factory VALUES (4,'Brovary',3);

INSERT INTO line VALUES (1,'LN-01',2,120,'per minute',1000000,1984,1);
INSERT INTO line VALUES (2,'LZ-03',1,250,'per minute',2500000,1976,1);
INSERT INTO line VALUES (3,'LL-01',1,120,'per minute',1000000,1984,2);
INSERT INTO line VALUES (4,'LZ-01',2,250,'per minute',2500000,1976,2);
INSERT INTO line VALUES (9,'LZ-02',1,250,'per minute',2500000,1976,2);
INSERT INTO line VALUES (11,'LN-02',1,250,'per minute',2500000,1976,2);
INSERT INTO line VALUES (10,'LN-01',2,250,'per minute',2500000,1976,2);
INSERT INTO line VALUES (5,'LN-04',2,120,'per minute',1000000,1984,3);
INSERT INTO line VALUES (6,'LZ-05',2,250,'per minute',2500000,1976,3);
INSERT INTO line VALUES (7,'LN-06',2,120,'per minute',1000000,1984,4);
INSERT INTO line VALUES (8,'LZ-07',1,250,'per minute',2500000,1976,4);

INSERT INTO report VALUES (1,'2017-03-16',1,50012,75784,71332,1);
INSERT INTO report VALUES (2,'2017-03-16',2,50012,75784,71332,1);
INSERT INTO report VALUES (3,'2017-03-16',1,50012,75784,71332,2);
INSERT INTO report VALUES (4,'2017-03-16',2,50012,75784,71332,2);
INSERT INTO report VALUES (5,'2017-03-17',1,50012,75784,71332,1);
INSERT INTO report VALUES (6,'2017-03-17',1,50012,75784,71332,1);
INSERT INTO report VALUES (7,'2017-04-06',1,50013,75324,72322,1);
INSERT INTO report VALUES (8,'2017-04-06',1,50013,73484,70932,1);

INSERT INTO consumption VALUES (1,1,4,2.2);
INSERT INTO consumption VALUES (2,1,5,6.42);
INSERT INTO consumption VALUES (3,1,6,8.4);
INSERT INTO consumption VALUES (4,1,1,8.62);
INSERT INTO consumption VALUES (5,2,3,4.44);
INSERT INTO consumption VALUES (6,2,2,8.92);

INSERT INTO material VALUES (1,'compound','kg',false);
INSERT INTO material VALUES (2,'cuprum cord','kg',false);
INSERT INTO material VALUES (3,'powder','kg',false);
INSERT INTO material VALUES (4,'laquer','kg',false);
INSERT INTO material VALUES (5,'tab','kg',false);
INSERT INTO material VALUES (6,'spirit','ltr',true);

INSERT INTO product VALUES (1,'standart end',null);
INSERT INTO product VALUES (2,'3-piece-can',null);
INSERT INTO product VALUES (3,'Alu G+G/2W Fl',1);
INSERT INTO product VALUES (4,'#9',2);

