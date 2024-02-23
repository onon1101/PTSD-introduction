- [[context]]
- [[App]]

----
這個 `main` 函式是整個應用程式的入口點，負責創建 `App` 物件並進入主循環，根據應用程式的狀態來執行相應的操作，直到應用程式結束。
### `main` 函式：

1. **`auto context = Core::Context::GetInstance();`：**
   - 創建了一個指向 `Core::Context` 物件的智慧指標 `context`，並調用了 `GetInstance()` 函式獲取 `Core::Context` 的單例實例。

2. **創建 `App` 物件：**
   - 創建了一個名為 `app` 的 `App` 物件，用於管理整個應用程式。

3. **主循環 `while (!context->GetExit())`：**
   - 進入了一個主循環，只要 `Core::Context` 的退出標誌為假，就持續運行。

4. **狀態判斷和更新：**
   - 使用 `switch` 語句根據 `App` 物件當前的狀態來執行相應的操作：
     - 如果狀態為 `START`，則呼叫 `app.Start()` 函式開始應用程式。
     - 如果狀態為 `UPDATE`，則呼叫 `app.Update()` 函式更新應用程式。
     - 如果狀態為 `END`，則呼叫 `app.End()` 函式結束應用程式，同時設置 `Core::Context` 的退出標誌為真。

5. **`context->Update();`：**
   - 在每次循環迭代後，呼叫 `context->Update()` 函式，用於更新 `Core::Context` 的狀態。

6. **返回值：**
   - `main` 函式的返回值為整數型別，這裡返回了 0，表示應用程式正常退出。

