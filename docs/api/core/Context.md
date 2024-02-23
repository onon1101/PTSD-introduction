----
### 建構子:
- [[SDL_Init()]] : 初始化 [[SDL]]库，这是使用 [[SDL]] 库的第一步
- [[IMG_Init()]] : 初始化 [[SDL_image]] 库，准备加载和处理图像文件
- [[TTF_Init()]] :初始化 [[SDL_ttf]] 库，准备加载和渲染 TrueType 字体
- [[Mix_Init()]] :  初始化 [[SDL_mixer]] 库，准备处理音频混合
- [[Mix_OpenAudio()]] : 打开音频设备，准备播放音频
- [[SDL_GL_SetAttribute()]] :  设置 [[OpenGL]] 属性，用于配置 [[OpenGL]] 窗口
- [[SDL_GL_CreateContext()]] : [[SDL]] 中用于创建 [[OpenGL]] 渲染上下文的函数
- [[glewInit()]] :初始化 [[GLEW]] 库，准备使用 [[OpenGL]] 扩展
* [[glEnable()]] : 启用 [[OpenGL ]]功能，例如深度测试、顶点数组等
- [[glBlendFunc()]] : 设置混合函数，用于启用颜色混合以实现半透明效果
* [[SDL_CreateWindow()]] :用于创建一个可视的窗口，用于图形界面的显示
- [[LOG_INFO()]] : 初始化[[OpenGL]]上下文並輸出[[OpenGL]]相關的資訊到日誌中
### 解構子:
- [[SDL_DestroyWindow()]]
- [[SDL_GL_DeleteContext()]]
- [[SDL_VideoQuit()]]
- [[Mix_HaltGroup()]]
- [[Mix_CloseAudio()]]
- [[TTF_Quit()]]
- [[IMG_Quit()]]
- [[Mix_Quit()]]
- [[SDL_Quit()]]
### Update():
- Util::Time::Update()
- Util::Input::Update();
- [[SDL_GL_SwapWindow()]] : 用於交換[[OpenGL]]窗口的前後緩衝區
- [[glClear()]] : 用於清除指定的緩衝區
----
這段程式碼定義了一個名為 `Core::Context` 的類別，它負責初始化 [[SDL]] 和 [[OpenGL]] 上下文，並創建一個窗口，同時提供了一些方法用於更新上下文和檢查是否應該退出應用程式。現在來分析一下這個類別的作用：

1. `Context()` 构造函式：
   - 初始化 [[SDL]]，[[SDL_image]]，[[SDL_ttf]]，[[SDL_mixer]] 和 [[OpenGL]] 相關的內容。
   - 創建一個包含標題、位置、寬度和高度的窗口。
   - 設置 [[OpenGL]] 上下文的屬性和版本。
   - 初始化 [[GLEW]]。
   - 啟用 [[OpenGL]] 的深度測試和混合功能。
   - 輸出 [[OpenGL]] 的相關資訊到日誌中。

2. `~Context()` 解構函式：
   - 釋放窗口和 [[OpenGL]] 上下文相關的資源。
   - 關閉 [[SDL]] 相關的子系統。

3. `Update()` 方法：
   - 更新時間和輸入處理，這通常在遊戲迴圈的每一幀中調用。
   - 交換窗口的前後緩衝區，以顯示新的渲染。
   - 清除顏色緩衝區和深度緩衝區，為下一幀渲染做準備。

4. `GetInstance()` 靜態方法：
   - 返回一個共享指針，指向 `Context` 的實例，這樣可以確保只有一個 `Context` 實例存在。

總的來說，這個 `Core::Context` 類別負責初始化和管理 [[SDL]] 和 [[OpenGL]] 相關的內容，並提供了更新上下文和渲染的方法。這個類別通常在遊戲的初始化階段創建，並在主迴圈中更新並處理渲染。