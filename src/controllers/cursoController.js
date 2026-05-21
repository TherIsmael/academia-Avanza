const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM curso', (err, rows) => {
            if (err) {
                console.log(err);
            }
            res.render('curso', {
                data: rows
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO curso SET ?', [data], (err, rows) => {
            if (err) {
                console.log(err);
            }
            res.redirect('/curso');
        });
    });
};

controller.delete = (req, res) => {
    const { id_curso } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM curso WHERE id_curso = ?', [id_curso], (err, rows) => {
            if (err) {
                console.log(err);
            }
            res.redirect('/curso');
        });
    });
};

controller.edit = (req, res) => {
    const { id_curso } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM curso WHERE id_curso = ?', [id_curso], (err, rows) => {
            if (err) {
                console.log(err);
            }
            res.render('curso_edit', {
                data: rows[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id_curso } = req.params;
    const newCurso = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE curso SET ? WHERE id_curso = ?', [newCurso, id_curso], (err, rows) => {
            if (err) {
                console.log(err);
            }
            res.redirect('/curso');
        });
    });
};

module.exports = controller;
