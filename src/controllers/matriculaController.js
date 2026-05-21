const controller = {};

controller.list = (req, res) => {

    req.getConnection((err, conn) => {

        conn.query('SELECT * FROM matricula', (err, rows) => {

            if(err){
                console.log(err);
            }

            res.render('matricula', {
                data: rows
            });

        });

    });

};

controller.save = (req, res) => {

    const data = req.body;

    req.getConnection((err, conn) => {

        conn.query(
            'INSERT INTO matricula SET ?',
            [data],
            (err, rows) => {

                if(err){
                    console.log(err);
                }

                res.redirect('/matricula');

            }
        );

    });

};

controller.delete = (req, res) => {

    const { id_matricula } = req.params;

    req.getConnection((err, conn) => {

        conn.query(
            'DELETE FROM matricula WHERE id_matricula = ?',
            [id_matricula],
            (err, rows) => {

                if(err){
                    console.log(err);
                }

                res.redirect('/matricula');

            }
        );

    });

};

controller.edit = (req, res) => {

    const { id_matricula } = req.params;

    req.getConnection((err, conn) => {

        conn.query(
            'SELECT * FROM matricula WHERE id_matricula = ?',
            [id_matricula],
            (err, rows) => {

                if(err){
                    console.log(err);
                }

                res.render('matricula_edit', {
                    data: rows[0]
                });

            }
        );

    });

};

controller.update = (req, res) => {

    const { id_matricula } = req.params;

    const newMatricula = req.body;

    req.getConnection((err, conn) => {

        conn.query(
            'UPDATE matricula SET ? WHERE id_matricula = ?',
            [newMatricula, id_matricula],
            (err, rows) => {

                if(err){
                    console.log(err);
                }

                res.redirect('/matricula');

            }
        );

    });

};

module.exports = controller;