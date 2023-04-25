// const



exports.messages = async (req,res)=>{
    try {
        const { caseId } = req.params;
    
        // Find the chat room associated with the case
        const Message = await Case.findOne({ case_id: caseId });
    
        // If the chat room doesn't exist, return an error
        if (!Message) {
          res.status(404).json({ error: "Chat room not found" });
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
}