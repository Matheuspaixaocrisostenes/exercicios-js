select * from estados e, cidades c
where e.id = c.estado_id

select e.nome as Estados, 
    c.nome as Cidades,
    regiao as Regiao
from estados e, cidades c
where e.id = c.estado_id

select 
    c.nome as Cidades,
    e.nome as Estados,
    regiao as Região
from estados e
inner join cidades c on e.id = c.estado_id