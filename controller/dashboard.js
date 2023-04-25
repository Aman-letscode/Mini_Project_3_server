const User = require("../models/users");
const Case = require("../models/case");

exports.dashboard = async (req,res) =>{
//     let user = req.params.id;
//     // let user  = req.body.id;
// try{

//     const data = await cases.find({_id: user});
//     // if(data.length>0){
//         res.json({data:data[0]});
//     // }

    
// }catch(e){
//     next(e);
// }
try {
    const { userId } = req.params;

    // Find the user by their ID
    const user = await User.findOne({ user_id: userId });

    // If the user doesn't exist, return an error
    if (!user) {
      res.status(404).json({ error: "User not found" });
    }

    // Retrieve the cases associated with the user
    const cases = await Case.find({ users: userId });

    // Extract the case IDs from the cases
    const caseIds = cases.map((c) => c);

    // Return the case IDs
    res.json({ caseIds });
  } catch (err) {
    console.error("Error retrieving case IDs:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
