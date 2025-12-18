const mongoose=require("mongoose");
const Chat=require("./models/chat.js")

mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("Error:", err);
  });

  let chat1=new Chat({
      from:"neha",
      to:"priya",
      msg:"sed me paper",
      created_at:new Date()
  
  })
  chat1.save().then((res)=>{
      console.log(res)
  });

  Chat.insertMany([
  { from: "neha", to: "priya", msg: "send me paper", created_at: new Date() },
  { from: "priya", to: "neha", msg: "kal bhejungi", created_at: new Date() },
  { from: "rahul", to: "neha", msg: "notes milenge?", created_at: new Date() },
  { from: "neha", to: "rahul", msg: "haan mil jayenge", created_at: new Date() },
  { from: "amit", to: "priya", msg: "class kab hai?", created_at: new Date() },
  { from: "priya", to: "amit", msg: "aaj shaam", created_at: new Date() },
  { from: "rohit", to: "neha", msg: "assignment submit?", created_at: new Date() },
  { from: "neha", to: "rohit", msg: "kal karna", created_at: new Date() },
  { from: "vikas", to: "rahul", msg: "project ready?", created_at: new Date() },
  { from: "rahul", to: "vikas", msg: "almost done", created_at: new Date() }
])
.then(() => {
  console.log("✅ 10 chats inserted successfully");
})
.catch((err) => {
  console.log(err);
});
