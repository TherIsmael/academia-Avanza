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
        })
    })
}
module.exports=controller 