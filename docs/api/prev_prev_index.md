# hello world

```txt
PTSD
├── Core
│   ├── Context.cpp                 # 圖形上下文類別，用於初始化和管理 OpenGL 上下文。
│   ├── DebugMessageCallback.cpp    # 用於調試消息回調的類別，用於在開發過程中記錄 OpenGL 的錯誤和警告。
│   ├── IndexBuffer.cpp             # 索引緩衝區類別，用於儲存三角形的索引數據。
│   ├── Program.cpp                 # 著色器程序類別，用於管理 GLSL 程序的創建、編譯和連接。
│   ├── Shader.cpp                  # 著色器類別，用於管理 GLSL 著色器的創建、編譯和載入。
│   ├── Texture.cpp                 # 紋理類別，用於管理和加載紋理圖像。
│   ├── TextureUtils.cpp            # 統一緩衝區類別，用於將統一數據傳遞給 GLSL 程序。
│   ├── VertexArray.cpp             # 頂點數組類別，用於管理頂點數據。
│   └── VertexBuffer.cpp            # 頂點緩衝區類別，用於儲存頂點數據。
├── Util
│   ├── Animation.cpp
│   ├── BGM.cpp                     # 背景音樂類別，用於播放背景音樂。
│   ├── Color.cpp
│   ├── GameObject.cpp              # 遊戲物件類別，用於表示遊戲中的物件，可能包含位置、大小、碰撞等信息。
│   ├── Image.cpp                   # 圖像處理類別，用於加載、顯示和處理圖像。
│   ├── Input.cpp                   # 輸入處理類別，用於處理鍵盤和鼠標輸入。
│   ├── LoadTextFile.cpp            # 加載文本文件的類別，用於從文件中讀取文本內容。
│   ├── Logger.cpp                  # 日誌記錄類別，用於記錄應用程式的運行日誌。
│   ├── Root.cpp
│   ├── SFX.cpp                     # 音效處理類別，用於播放遊戲中的音效。
│   ├── Text.cpp                    # 文本處理類別，用於渲染和顯示文本。
│   ├── Time.cpp                    # 時間處理類別，用於獲取系統時間和計時器。
│   └── TransformUtils.cpp          # 變換類別，用於表示和管理物體的位置、旋轉和縮放。
├── App.cpp                         # 代表應用程式的主要類別，負責初始化、更新和結束應用程式。包含了應用程式的主要邏輯，例如初始化遊戲世界、處理使用者輸入、更新遊戲狀態等。
├── Cat.cpp
├── Giraffe.cpp                     # 代表一個長頸鹿的類別，可能是遊戲中的角色或元素。可能包含了長頸鹿的外觀、動作、行為等相關邏輯。
├── GiraffeText.cpp
└── main.cpp                        # 程式的主入口點，包含 main 函數。初始化應用程式，創建必要的對象，並開始主要的遊戲循環。

```
