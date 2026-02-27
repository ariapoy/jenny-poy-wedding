/**
 * Google Apps Script - Wedding RSVP Form Handler
 * ================================================
 * 使用說明（Setup Instructions）：
 *
 * 1. 開啟 Google Sheets，建立新試算表，命名為「Jenny & Poy 婚禮 RSVP」
 * 2. 在試算表中，第一行 (Row 1) 填入以下欄位標題：
 *    時間戳記 | 姓名 | 電話 | Email | 與新人關係 | 出席狀況 |
 *    出席人數 | 同行賓客 | 飲食限制 | 其他飲食需求 | 交通方式 |
 *    接送地點 | 祝福留言
 *
 * 3. 點選選單「擴充功能」→「Apps Script」
 * 4. 將以下整段程式碼貼入編輯器（取代預設的 myFunction）
 * 5. 點選「部署」→「新增部署作業」
 *    - 類型：網頁應用程式 (Web app)
 *    - 說明：Wedding RSVP
 *    - 以誰的身分執行：我（your@gmail.com）
 *    - 誰可以存取：所有人
 * 6. 點選「部署」，複製「網頁應用程式網址」
 * 7. 將網址貼入 rsvp.html 中的 SCRIPT_URL 變數
 *
 * ================================================
 * 將以下程式碼貼入 Google Apps Script 編輯器：
 * ================================================
 */

/*
// ========== 貼入 Google Apps Script 的程式碼 ==========

const SHEET_NAME = 'RSVP回覆'; // 試算表分頁名稱（可自訂）

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    // 如果分頁不存在，自動建立並加入標題列
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        '時間戳記', '姓名', '電話', 'Email',
        '與新人關係', '出席狀況', '出席人數', '同行賓客',
        '飲食限制', '其他飲食需求', '交通方式', '接送地點', '祝福留言'
      ]);
      // 凍結第一列
      sheet.setFrozenRows(1);
      // 設定標題列樣式
      const headerRange = sheet.getRange(1, 1, 1, 13);
      headerRange.setBackground('#8B6F5E');
      headerRange.setFontColor('#ffffff');
      headerRange.setFontWeight('bold');
    }

    // 解析 JSON 資料
    const data = JSON.parse(e.postData.contents);

    // 新增一列資料
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
      data.name || '',
      data.phone || '',
      data.email || '',
      data.relation || '',
      data.attendance || '',
      data.guestCount || '0',
      data.companions || '',
      data.dietary || '',
      data.dietaryOther || '',
      data.transport || '',
      data.pickupLocation || '',
      data.message || '',
    ]);

    // 回傳成功
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // 回傳錯誤（for debugging）
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// GET 請求用於測試（可選）
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'active', message: 'RSVP form is ready!' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ========== 程式碼結束 ==========
*/
