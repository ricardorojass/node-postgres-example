CREATE DATABASE postgres-example

machine table
machine: M001-A3
data:  { Temperatura: 15, Humedad: 10, ProbabilidadLluvia: 30 }

CREATE TABLE machine(
    machine_id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL
    temperature INTEGER NOT NULL,
    humidity INTEGER NOT NULL,
    condition INTEGER NOT NULL,
)

