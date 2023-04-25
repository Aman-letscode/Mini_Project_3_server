const dotenv = require('dotenv')
dotenv.config()
const User = require("./models/users");
const Case = require("./models/case");
const Messages = require("./models/message")
const express  = require('express')
const cors  = require('cors')
const bodyParser  = require('body-parser')
const app = express()


const routes = require('./routes/routes')
const connect = require('./config/dbconnect')


const port = process.env.PORT || 3000;


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))


connect(process.env.MONGO_DB_URL);
// connect()

app.use('/api/',routes);





app.get("/case/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user by their ID
    const user = await User.findOne({ user_id: userId });

    // If the user doesn't exist, return an error
    if (!user) {
      return res.status(404).json({ error: "User not found" });
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
});




app.get("/messages/:caseId", async (req, res) => {
  try {
    const { caseId } = req.params;

    // Find the chat room associated with the case
    const Message = await Case.findOne({ case_id: caseId });

    // If the chat room doesn't exist, return an error
    if (!Message) {
      return res.status(404).json({ error: "Chat room not found" });
    }

    // Retrieve the messages associated with the case
    const messages = await Messages.find({ case_id: caseId });

    // Extract the case IDs from the cases
    const allmessages = messages.map((c) => c);

    // Return the messages
    res.json({ allmessages });
  } catch (err) {
    console.error("Error retrieving messages:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});






app.listen(port,()=>{
    console.log("Listening to ", port);
})
