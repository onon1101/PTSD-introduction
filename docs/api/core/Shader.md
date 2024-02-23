- [[GL_VERTEX_SHADER]]
- [[GL_FRAGMENT_SHADER]]
- [[glCreateShader()]]
- [[GLenum]]
- [[GLuint]]
- [[LoadTextFile]]
- [[glDeleteShader()]]
- [[glShaderSource()]]
- [[glCompileShader()]]
- [[glGetShaderiv()]]
- [[glGetShaderInfoLog()]]

----
這段程式碼定義了名為 `Shader` 的類別，位於 `Core` 命名空間中。Shader代表了[[OpenGL]]中的一個着色器，它負責在GPU上執行特定的圖形計算。
以下是這個類別的一些重要成員和功能：
- **建構子**：
  - `Shader(const std::string &filepath, Type shaderType)`：根據給定的檔案路徑和着色器類型創建一個Shader對象。這個建構子會讀取指定檔案中的着色器程式碼，並將其編譯成[[OpenGL]]着色器對象。
  - `Shader(const Shader &) = delete`：刪除了拷貝建構子，禁止Shader對象的拷貝構造。
  - `Shader(Shader &&other)`：移動建構子，用於將其他Shader對象的資源移動到新建立的對象中。
- **析構子**：
  - `~Shader()`：Shader的析構子，用於釋放Shader對象佔用的資源，包括[[OpenGL]]的着色器對象。
- **成員函式**：
  - `GLuint GetShaderId() const`：返回Shader對象的OpenGL ID。
- **私有成員函式**：
  - `void Compile(const std::string &src) const`：將給定的着色器程式碼編譯成[[OpenGL]]着色器對象。
  - `void CheckStatus(const std::string &filepath) const`：檢查着色器編譯狀態，並在出現錯誤時拋出異常。
  - `GLuint m_ShaderId` : 用於存儲Shader對象的OpenGL ID。

這個類別提供了封裝[[OpenGL]]着色器的功能，包括創建、編譯和釋放等操作，使得使用者可以更方便地管理和操作[[OpenGL]]的着色器。