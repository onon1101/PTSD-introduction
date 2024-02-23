
----
這段程式碼是一個使用 Google Test 框架寫的音效系統的測試程式，讓我們來逐步解析：

### `UserCheck` 函式：

- 這個函式用於確認使用者是否想要執行特定的測試。

### `EXCEPT_INPUT_YES` 函式：

- 這個函式用於測試結果應該是肯定的情況下，如果使用者的輸入是否定的，則會加入一個錯誤訊息。

### `AudioInit` 函式：

- 這個函式用於初始化 SDL_mixer 音效系統。

### `AudioQuit` 函式：

- 這個函式用於清理 SDL_mixer 音效系統的資源。

### `AudioTest` 測試夾具類別：

- 這個類別繼承自 Google Test 的 `::testing::Test` 類別，用於設定測試環境。

### 測試案例 `BGM_TEST`：

- 這個測試案例測試了背景音樂 (BGM) 功能的不同方面，包括播放、調整音量、暫停、恢復、淡入和淡出。

### 測試案例 `SFX_TEST`：

- 這個測試案例測試了音效 (SFX) 功能的不同方面，包括播放、調整音量。

### 測試案例 `BGM_SFX_TEST`：

- 這個測試案例測試了同時使用背景音樂 (BGM) 和音效 (SFX) 的情況下的不同方面，包括播放、暫停、恢復、淡入和淡出。

這些測試案例使用了 `Util::BGM` 和 `Util::SFX` 類別，分別代表背景音樂和音效功能。每個測試案例都會播放音樂或音效，並要求使用者進行相應的確認，以驗證音效系統的正確性。