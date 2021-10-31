import parsePdf from "./ocr";

global.drive = () => {
    const drive = DriveApp.getFolderById("1tRMjzNnouj8DF1UtVEohPRUcw6-WMzBR");
    const files = drive.searchFiles("mimeType = 'application/pdf'");
    while(files.hasNext()) {
        const file = files.next();
        parsePdf(file);
    }
}