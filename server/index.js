const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

// Middleware
app.use(cors())
app.use(express.json())

// ROUTES

// Create a machine
app.post('/machines', async (req, res) => {
    try {
        const { name, temperature, humidity, rain_probability } = req.body
        const query = 'INSERT INTO machine (name, temperature, humidity, rain_probability) VALUES($1, $2, $3, $4) RETURNING *'
        const newMachine = await pool.query(query, [name, temperature, humidity, rain_probability])

        res.json(newMachine.rows[0])
    } catch (error) {
        console.error(error.message);

    }
})

// Get all machines
app.get('/machines', async (req, res) => {
    try {
        const allMachines = await pool.query('SELECT * FROM machine')
        res.json(allMachines.rows)
    } catch (error) {
        console.error(error.message);
    }
})

// Gel a machine

app.get('/machines/:id', async (req, res) => {
    try {
        const { id } = req.params
        const machine = await pool.query('SELECT * FROM machine WHERE machine_id = $1', [id])
        res.json(machine.rows[0])
    } catch (error) {
        console.error(error.message);
    }
})
// Update a machine
app.put('/machines/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { name } = req.body
        const machine = await pool.query('UPDATE machine SET name = $1 WHERE machine_id = $2', [name, id])
        res.json('Machine was updated!')
    } catch (error) {
        console.error(error.message);
    }
})

// Delete a machine
app.delete('/machines/:id', async (req, res) => {
    try {
        const { id } = req.params
        const machine = await pool.query('DELETE FROM machine WHERE machine_id = $1', [id])
        res.json('Machine was deleted!')
    } catch (error) {
        console.error(error.message);
    }
})

app.listen(5000, () => {
    console.log('server has started on port 5000');
})