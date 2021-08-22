// const AppError = require('./../../../Util/AppError');
// const Blog = require('./../../../Models/blogModel');
// const { catchAsync } = require('./../../../Util/catchAsync');


// exports.upvoteBlog=catchAsync(async (id)=>{
//     await Blog.findById(id,(err,blog)=>{
//           if(err){
//             AppError("No Blog Found",408);
//           }
//           else{
//             blog.upvotes=blog.upvotes+1;
//           }
//     });
// });