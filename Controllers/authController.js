const User=require('./../Models/userModel');

exports.signup=async(req,res,next)=>{
    try{const newUser=await User.create(req.body);

res.status(201).json({
    status:"success",
    dats:{
        user: newUser
    }
});} catch(err){
    res.status(400).json({
        status:"failure",
        dats:{
            user: newUser
        }
    });
}
};