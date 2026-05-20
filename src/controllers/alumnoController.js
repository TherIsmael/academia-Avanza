const controller ={}
controller.list= (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query('select * FROM estudiante',(err,alumnos)=>{
            if(err){
                res.json(err)
            }
            res.render('alumno',{
                data:alumnos
            })
        })  
    })
}

controller.save=(req,res)=>{
    const data=req.body
    req.getConnection((err, conn)=>{
        conn.query('INSERT INTO Estudiante set ?',[data], (err,alumno)=>{
            res.redirect('/')
            if(err){
    console.log(err);
    return res.send(err);
}
        })
    })
}

controller.delete = (req, res) => {
    const { id_estudiante } = req.params
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM estudiante WHERE id_estudiante=?',[id_estudiante],(err,rows)=>{
            res.redirect('/')
        })
    })
}
controller.edit = (req, res) => {
    const { id_estudiante } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM estudiante WHERE id_estudiante = ?',
            [id_estudiante],(err, rows) => {
                if(err){
                    console.log(err);
                }
                res.render('alumno_edit', {
                    data: rows[0]
                });
            }
        );
    });
}

controller.update=(req, res)=>{
    const { id_estudiante } = req.params;
    const newAlumno=req.body
    req.getConnection((err, conn)=>{
        conn.query('UPDATE estudiante set ? where id_estudiante=?', [newAlumno,id_estudiante],(err,rows)=>{
            res.redirect('/')
        } )
    })
}
module.exports=controller 