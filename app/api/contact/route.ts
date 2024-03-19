import { NextRequest, NextResponse } from "next/server";
const fs = require("fs");
const path = require("path");

export async function POST(request: NextRequest) {
  const data = await request.json();

  const filePath = path.resolve(process.cwd(), "app/data/submission.json");
  let submission: any = [];

  try {
    const data = fs.readFileSync(filePath, "utf8");
    submission = JSON.parse(data);
  } catch (error) {
    console.log("Error reading this file", error);
  }
  submission.push(data);

  try {
    const newData = JSON.stringify(submission, null, 2);
    fs.writeFileSync(filePath, newData, "utf8");
  } catch (error) {
    console.error("Error writting this file", error);
  }

  return NextResponse.json({
    data: data,
    message: "This message has been succesfully sent",
   
    
  });

  // PARSE THE JSON ' ADD HE NEW DATA ' WRITE IN JSON FILE AGAIN
}

// export async function GET() {
//   return NextResponse.json({
//     message: "Hello",
//   });
// }
