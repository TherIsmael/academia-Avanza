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

module.exports=controller 