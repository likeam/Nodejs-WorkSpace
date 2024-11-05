import * as fs from "fs/promises";

// Creating Directory / Folddr
// try {
//   await fs.mkdir("c:\\nodejs\\hania", { recursive: true });
//   console.log("Folder Created .......");
// } catch (error) {
//   console.log(error);
// }

//Reading dir
// try {
//   const files = await fs.readdir("c:\\nodejs\\hania");
//   for (const file of files) {
//     console.log(file);
//   }
// } catch (error) {
//   console.log(error);
// }

// // Removing Folder
// try {
//   await fs.rmdir("C:\\nodejs\\hano");
// } catch (error) {
//   console.log(error);
// }

//Create and |Write the files
// try {
//   await fs.writeFile("README.md", "Hello hania g how are you?");
// } catch (error) {
//   console.log(error);
// }

//Read File

try {
  const data = await fs.readFile("README.md", "utf-8");
  console.log(data);
} catch (error) {
  console.log(error);
}
