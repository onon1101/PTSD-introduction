- [[Image]] 
- [[Input]]
- [[Keycode]]
- [[Logger]]
- [[Giraffe]]
- [[Triangle(刪)]]

----
這些函式共同組成了 `App` 類別的行為，用於啟動、更新和結束應用程式的運行。
這段程式碼定義了一個名為 `App` 的類別，讓我們來逐步解析：

### `App` 類別：

1. **`class State`：**
   - 定義了一個列舉型別 `State`，包含三個成員：`START`、`UPDATE` 和 `END`，用於表示應用程式的不同狀態。

2. **成員變數 `m_CurrentState`：**
   - 這是一個 `State` 型別的成員變數，用於存儲當前應用程式的狀態。

3. **成員物件 `m_Triangle`：**
   - 這是一個 `Triangle` 物件，用於表示應用程式中的三角形物件。

4. **成員指標 `m_Giraffe`：**
   - 這是一個指向 `Giraffe` 物件的智慧指標，使用了 `std::shared_ptr` 來管理記憶體資源。
   - 透過 `std::make_shared<Giraffe>()` 創建了一個新的 `Giraffe` 物件並初始化，並將其指派給 `m_Giraffe`。

5. **成員函式 `GetCurrentState()`：**
   - 這是一個公共成員函式，用於獲取當前應用程式的狀態，返回值為 `State` 型別。

6. **成員函式 `Start()`、`Update()` 和 `End()`：**
   - 這些是公共成員函式，用於啟動、更新和結束應用程式的運行。
   - `Start()` 函式用於啟動應用程式，`Update()` 函式用於更新應用程式的狀態，`End()` 函式用於結束應用程式的運行。

這個類別的主要目的是管理應用程式的運行狀態，並包含了一個三角形物件和一個長頸鹿物件，可以啟動、更新和結束應用程式的運行。

----
### `App::Start()` 函式：

1. **`LOG_TRACE("Start");`：**
   - 使用了 `LOG_TRACE` 宏來輸出跟蹤級別的日誌，顯示 "Start" 字串，用於標記啟動操作的開始。
   - `注: spdlog 库允许设置日志记录的最低级别，低于该级别的日志消息将不会被输出。如果你的日志级别设置为比跟踪级别更高的级别`

2. **`m_Giraffe->SetDrawable(std::make_unique<Util::Image>("../assets/sprites/giraffe.png"));`：**
   - 設置了 `m_Giraffe` 物件的繪製元素，使用了 `Util::Image` 類別來表示圖片，指定了圖片檔案路徑 "../assets/sprites/giraffe.png"。

3. **`m_Giraffe->SetZIndex(5);`：**
   - 設置了 `m_Giraffe` 物件的 Z 軸索引為 5，這影響了其在場景中的繪製順序。

4. **`m_Giraffe->Start();`：**
   - 呼叫了 `m_Giraffe` 物件的 `Start` 函式，用於初始化 `m_Giraffe` 物件。

5. **創建並初始化 `gf` 物件：**
   - 使用了 `std::make_shared` 創建了一個 `GiraffeText` 物件，並指定了字型檔案路徑、字型大小和要顯示的文字。
   - 設置了 `gf` 物件的 Z 軸索引為 `m_Giraffe` 物件的 Z 軸索引減去 1。
   - 呼叫了 `gf` 物件的 `Start` 函式，用於初始化 `gf` 物件。

6. **`m_Giraffe->AppendChild(gf);`：**
   - 將 `gf` 物件附加為 `m_Giraffe` 物件的子節點，以便在場景中進行統一的管理。

7. **`m_CurrentState = State::UPDATE;`：**
   - 設置了 `m_CurrentState` 成員變數為 `State::UPDATE`，表示應用程式當前處於更新狀態。

### `App::Update()` 函式：

1. **處理滑鼠按鍵和滾輪事件：**
   - 使用了 `Util::Input` 命名空間中的函式來檢測滑鼠左鍵、右鍵、中鍵和滾輪是否被按下，並輸出相應的日誌。

2. **處理鍵盤按鍵事件：**
   - 使用了 `Util::Input` 命名空間中的函式來檢測是否按下 ESC 鍵、A 鍵和 B 鍵，並輸出相應的日誌。當按下 B 鍵時，還調用了 `Util::Input` 命名空間中的 `SetCursorPosition` 函式來設置滑鼠游標位置。

3. **`m_Giraffe->Update();`：**
   - 呼叫了 `m_Giraffe` 物件的 `Update` 函式，用於更新 `m_Giraffe` 物件的狀態。

### `App::End()` 函式：

1. **`LOG_TRACE("End");`：**
   - 使用了 `LOG_TRACE` 宏來輸出跟蹤級別的日誌，顯示 "End" 字串，用於標記應用程式結束操作的結束。

