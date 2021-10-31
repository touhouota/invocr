const option = {
    ocr: true,
    ocrLanguage: "ja",
};

const folderId = "19rY9IECAKSp6pnDDBn4NXvHCDeM2kjES";

const parsePdf = (driveFile) => {
    const ocrFolder = DriveApp.getFileById(folderId);
    console.log(driveFile.getName());
    // コピーしたファイルの情報を設定する
    const resource = {
        title: driveFile.getName(),
        mimeType: "application/vnd.google-apps.document",
        parents: [{id: folderId}]
    };

    // copy先ファイルの情報, copy元ファイルのID, optional queryParameter
    const document = Drive.Files.copy(resource, driveFile.getId(), option);
    // ocrFolder.
    const text = DocumentApp.openById(document.id).getBody().getText();
    console.log(text);
    Drive.Files.remove(document.id);
}

export default parsePdf;