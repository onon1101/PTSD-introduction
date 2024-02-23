
----
這段程式碼是一個預編譯標頭文件（Precompiled Header），用於包含常用的標頭文件，以提高編譯效率。讓我們來看一下它包含的內容：

1. **標準庫標頭文件**：
   - `#include <memory>`：用於智能指針和相關功能。
   - `#include <string>`：用於字符串操作。
   - `#include <vector>`：用於動態數組。
   - `#include <array>`：用於固定大小的數組。
   - `#include <set>`：用於集合操作。

2. **SDL 標頭文件**：
   - `#include <SDL.h>`：SDL 遊戲開發庫的主要標頭文件。
   - `#include <SDL_events.h>`：包含 SDL 事件處理的相關定義。
   - `#include <SDL_image.h>`：用於讀取和處理圖像的標頭文件。
   - `#include <SDL_ttf.h>`：用於處理 TrueType 字體的標頭文件。
   - `#include <SDL_mixer.h>`：用於音效和音樂播放的標頭文件。

3. **OpenGL 相關標頭文件**：
   - `#include <GL/glew.h>`：GLEW 是 OpenGL 的擴展庫，用於加載和管理 OpenGL 的擴展。

4. **GLM（OpenGL Mathematics）標頭文件**：
   - `#include <glm/glm.hpp>`：包含 GLM 的主要數學函數和類型定義。
   - `#include <glm/gtx/matrix_transform_2d.hpp>`：包含 GLM 的 2D 矩陣變換相關函數。

這些標頭文件為您的程式提供了許多常用的功能和庫，包括內存管理、字符串操作、圖形處理、音效處理和數學運算。預編譯標頭文件可以幫助減少編譯時間，因為它們僅在整個程式碼庫的編譯過程中包含一次，而不是在每個源文件中都包含一次。