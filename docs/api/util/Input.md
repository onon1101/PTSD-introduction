- [[SDL_event]]
- [[Uint8]]
- [[SDL_GetKeyboardState()]]
- [[SDL_GetMouseState()]]
- [[SDL_PollEvent()]]
- [[SDL_WarpMouseInWindow()]]

----
這段程式碼定義了名為 `Input` 的類別，位於 `Util` 命名空間中，提供了對鍵盤和滑鼠輸入的訪問。下面是這個類別的一些重要特點和功能：

### `Input` 類別介紹

`Input` 類別提供了對鍵盤和滑鼠輸入的訪問，它是一個單例（singleton）類別，意味著只有一個全局的 `Input` 對象，並且不可通過構造函式來創建新的對象。

#### 靜態成員函式：

- **`static glm::vec2 GetScrollDistance()`**：獲取滑鼠滾輪的滾動距離。
- **`static glm::vec2 GetCursorPosition()`**：獲取滑鼠游標的當前位置。
- **`static bool IsKeyPressed(const Keycode &key)`**：檢查指定的按鍵是否當前被按下。
- **`static bool IsLButtonPressed()`**：檢查左滑鼠按鈕是否當前被按下。
- **`static bool IsRButtonPressed()`**：檢查右滑鼠按鈕是否當前被按下。
- **`static bool IsMButtonPressed()`**：檢查中間滑鼠按鈕是否當前被按下。
- **`static bool IfScroll()`**：檢查滑鼠滾輪是否當前正在滾動。
- **`static bool IsMouseMoving()`**：檢查滑鼠是否正在移動。
- **`static bool IfExit()`**：檢查窗口是否被關閉。

#### 靜態成員變數：

- **`static SDL_Event s_Event`**：SDL 事件。
- **`static const Uint8 *s_KeyState`**：按鍵狀態。
- **`static glm::vec2 s_CursorPosition`**：滑鼠游標位置。
- **`static glm::vec2 s_ScrollDistance`**：滑鼠滾輪的滾動距離。
- **`static bool s_LBPressed`**：左滑鼠按鈕是否被按下。
- **`static bool s_RBPressed`**：右滑鼠按鈕是否被按下。
- **`static bool s_MBPressed`**：中間滑鼠按鈕是否被按下。
- **`static bool s_Scroll`**：滑鼠滾輪是否在滾動。
- **`static bool s_MouseMoving`**：滑鼠是否在移動。
- **`static bool s_Exit`**：窗口是否被關閉。

這個類別提供了一個方便的接口，用於檢查和訪問鍵盤和滑鼠輸入的狀態，以及處理相應的事件。開發者可以通過調用相應的靜態成員函式，來獲取和處理輸入數據。