const controller = {};

// Helper: ejecuta múltiples queries en paralelo
function multiQuery(conn, queries, callback) {
    const results = [];
    let pending = queries.length;
    let hasError = null;

    queries.forEach((sql, i) => {
        conn.query(sql, (err, rows) => {
            if (err) hasError = err;
            results[i] = rows || [];
            if (--pending === 0) callback(hasError, results);
        });
    });
}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        multiQuery(conn, [
            'SELECT * FROM matricula',
            'SELECT id_estudiante, nombre, apellido_paterno FROM estudiante',
            'SELECT id_curso, nombre_curso FROM curso',
            'SELECT id_aula, capacidad FROM aula'
        ], (err, [matriculas, estudiantes, cursos, aulas]) => {
            if (err) console.log(err);
            res.render('matricula', {
                data:        matriculas,
                estudiantes: estudiantes,
                cursos:      cursos,
                aulas:       aulas
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO matricula SET ?', [data], (err) => {
            if (err) console.log(err);
            res.redirect('/matricula');
        });
    });
};

controller.delete = (req, res) => {
    const { id_matricula } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM matricula WHERE id_matricula = ?', [id_matricula], (err) => {
            if (err) console.log(err);
            res.redirect('/matricula');
        });
    });
};

controller.edit = (req, res) => {
    const { id_matricula } = req.params;
    req.getConnection((err, conn) => {
        multiQuery(conn, [
            `SELECT * FROM matricula WHERE id_matricula = ${conn.escape(id_matricula)}`,
            'SELECT id_estudiante, nombre, apellido_paterno FROM estudiante',
            'SELECT id_curso, nombre_curso FROM curso',
            'SELECT id_aula, capacidad FROM aula'
        ], (err, [rows, estudiantes, cursos, aulas]) => {
            if (err) console.log(err);
            res.render('matricula_edit', {
                data:        rows[0],
                estudiantes: estudiantes,
                cursos:      cursos,
                aulas:       aulas
            });
        });
    });
};

controller.update = (req, res) => {
    const { id_matricula } = req.params;
    const newMatricula = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE matricula SET ? WHERE id_matricula = ?', [newMatricula, id_matricula], (err) => {
            if (err) console.log(err);
            res.redirect('/matricula');
        });
    });
};

module.exports = controller;
