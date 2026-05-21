const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM aula', (err, rows) => {
            if (err) {
                console.log(err);
            }
            res.render('aula', {
                data: rows
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO aula SET ?', [data], (err, rows) => {
            if (err) {
                console.log(err);
            }
            res.redirect('/aula');
        });
    });
};

controller.delete = (req, res) => {
    const { id_aula } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM aula WHERE id_aula = ?', [id_aula], (err, rows) => {
            if (err) {
                console.log(err);
            }
            res.redirect('/aula');
        });
    });
};

controller.edit = (req, res) => {
    const { id_aula } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM aula WHERE id_aula = ?', [id_aula], (err, rows) => {
            if (err) {
                console.log(err);
            }
            res.render('aula_edit', {
                data: rows[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id_aula } = req.params;
    const newAula = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE aula SET ? WHERE id_aula = ?', [newAula, id_aula], (err, rows) => {
            if (err) {
                console.log(err);
            }
            res.redirect('/aula');
        });
    });
};

module.exports = controller;
